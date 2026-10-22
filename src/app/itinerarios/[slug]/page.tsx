import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide";
import Reveal from "@/components/Reveal";
import { MorphIcon } from "@/components/MorphIcon";
import FondoAura from "@/components/FondoAura";
import VideoRuta from "@/components/VideoRuta";
import GaleriaRuta from "@/components/GaleriaRuta";
import { AntesDeViajar, Cronograma, LugaresEnMapa } from "@/components/itinerarios";
import { ITINERARIOS, itinerarioPorSlug } from "@/lib/itinerarios";

/** Exportación estática: todas las rutas se prerenderizan en el build. */
export async function generateStaticParams() {
  return ITINERARIOS.map((it) => ({ slug: it.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const it = itinerarioPorSlug(slug);
  if (!it) return { title: "Itinerario no encontrado | CamiñAndes" };
  return {
    title: `${it.nombre} | CamiñAndes`,
    description: it.resumen,
  };
}

export default async function ItinerarioDetalle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const it = itinerarioPorSlug(slug);
  if (!it) notFound();


  return (
    <div className="relative isolate overflow-hidden px-4 pb-24 pt-32 sm:px-8 sm:pb-36 sm:pt-36">
      <FondoAura />
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <nav aria-label="Miga de pan" className="text-[11px] uppercase tracking-[0.24em] text-emerald-900/70">
            <Link href="/itinerarios/" className="hover:text-emerald-950 hover:underline focus-visible:outline-2 focus-visible:outline-emerald-700">
              Itinerarios
            </Link>
            {" / "}
            <span aria-current="page">{it.corto}</span>
          </nav>
          <div className="mt-4 text-[11px] uppercase tracking-[0.32em] text-emerald-900/80">
            {it.duracion}
          </div>
          <h1 className="serif mt-4 text-[clamp(2.5rem,6vw,5rem)] leading-[.9] text-emerald-950">
            {it.nombre}
          </h1>
          {it.avisoDuracion && (
            <p role="note" className="mt-4 max-w-2xl rounded-2xl bg-amber-100/70 px-5 py-3 text-base font-medium leading-8 text-amber-900">
              {it.avisoDuracion}
            </p>
          )}
          <p className="texto-lectura mt-5 max-w-2xl">
            {it.resumen}
          </p>
        </Reveal>

        {it.imagen && (
          <Reveal delay={0.1}>
            <figure className="mt-10 overflow-hidden rounded-[2.5rem] border border-white/50 shadow-[0_30px_80px_rgba(11,40,20,0.18)]">
              <div className="relative h-72 w-full sm:h-96">
                <Image
                  src={it.imagen.src}
                  alt={it.imagen.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </figure>
          </Reveal>
        )}

        <Reveal delay={0.05}>
          <dl className="vapor mt-10 grid gap-6 rounded-[2.5rem] p-5 text-emerald-950 sm:grid-cols-2 sm:p-12">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/80">
                Duración
              </dt>
              <dd className="serif mt-2 text-3xl leading-tight">{it.duracion}</dd>
            </div>
            {it.base && (
              <div>
                <dt className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/80">
                  Alojamiento
                </dt>
                <dd className="texto-lectura mt-2">{it.base}</dd>
              </div>
            )}
            <div>
              <dt className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/80">
                Destinos
              </dt>
              <dd className="texto-lectura mt-2">
                {it.destinos.join(" · ")}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/80">
                Tipo de experiencia
              </dt>
              <dd className="texto-lectura mt-2">
                {it.tipoExperiencia.join(" · ")}
              </dd>
            </div>
            {it.publico && (
              <div className="sm:col-span-2">
                <dt className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/80">
                  Público objetivo
                </dt>
                <dd className="texto-lectura mt-2">{it.publico}</dd>
              </div>
            )}
          </dl>
        </Reveal>

        <div className="mt-16 space-y-16 text-emerald-950">
          {it.galeria && it.galeria.length > 0 && (
            <Reveal>
              <GaleriaRuta imagenes={it.galeria} />
            </Reveal>
          )}

          {it.video && (
            <Reveal>
              <section aria-labelledby="video-ruta">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.32em] text-emerald-900/80">
                      Video
                    </div>
                    <h2 id="video-ruta" className="serif mt-3 text-4xl leading-none sm:text-5xl">
                      La ruta en movimiento
                    </h2>
                  </div>
                  <p className="max-w-sm text-sm leading-7 text-emerald-950/65">
                    Un adelanto de lo que se vive en el camino.
                  </p>
                </div>
                <VideoRuta
                  src={it.video.src}
                  poster={it.video.poster}
                  titulo={it.nombre}
                />
              </section>
            </Reveal>
          )}

          <Reveal>
            <Cronograma dias={it.dias} />
          </Reveal>

          <Reveal>
            <AntesDeViajar items={it.antesDeViajar} />
          </Reveal>

          {it.recuerdo && (
            <Reveal>
              <section
                aria-labelledby="recuerdo"
                className="rounded-[2.5rem] border border-emerald-900/15 bg-white/40 p-5 backdrop-blur sm:p-12"
              >
                <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/80">
                  Recuerdo · propuesta no garantizada
                </div>
                <h2 id="recuerdo" className="serif mt-3 text-4xl leading-none sm:text-5xl">
                  {it.recuerdo.titulo}
                </h2>
                <p className="texto-lectura mt-4 max-w-2xl">
                  {it.recuerdo.descripcion}
                </p>
              </section>
            </Reveal>
          )}

          <Reveal>
            <LugaresEnMapa lugares={it.lugaresMapa} />
          </Reveal>
        </div>

        <nav aria-label="Otros itinerarios" className="mt-16 flex flex-wrap justify-center gap-4">
          {ITINERARIOS.filter((o) => o.slug !== it.slug).map((o) => (
            <Link
              key={o.slug}
              href={`/itinerarios/${o.slug}/`}
              className="rounded-full bg-emerald-950/5 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-emerald-950 transition hover:bg-emerald-950/10 focus-visible:outline-2 focus-visible:outline-emerald-700"
            >
              {o.corto}
            </Link>
          ))}
        </nav>

        <div className="mt-10 text-center">
          <Link
            href="/itinerarios/"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-950/5 px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-emerald-950 transition hover:bg-emerald-950/10 focus-visible:outline-2 focus-visible:outline-emerald-700"
          >
            <MorphIcon icon={ArrowLeft} size={13} color="currentColor" /> Todos los itinerarios
          </Link>
        </div>
      </div>
    </div>
  );
}

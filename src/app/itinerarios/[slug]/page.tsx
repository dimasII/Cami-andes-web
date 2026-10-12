import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide";
import Reveal from "@/components/Reveal";
import { MorphIcon } from "@/components/MorphIcon";
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
  if (!it) return { title: "Itinerario no encontrado | Camiñandes" };
  return {
    title: `${it.nombre} | Camiñandes`,
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
    <div className="px-4 pb-24 pt-32 sm:px-8 sm:pb-36 sm:pt-36">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <nav aria-label="Miga de pan" className="text-[11px] uppercase tracking-[0.24em] text-emerald-900/60">
            <Link href="/itinerarios/" className="hover:text-emerald-950 hover:underline focus-visible:outline-2 focus-visible:outline-emerald-700">
              Itinerarios
            </Link>
            {" / "}
            <span aria-current="page">{it.corto}</span>
          </nav>
          <div className="mt-4 text-[11px] uppercase tracking-[0.32em] text-emerald-900/70">
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
          <p className="mt-4 max-w-2xl text-lg leading-9 text-emerald-950/70">
            {it.resumen}
          </p>
        </Reveal>

        {it.imagen && (
          <Reveal delay={0.1}>
            <figure className="mt-10 overflow-hidden rounded-[2.5rem]">
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
              <dt className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/70">
                Duración
              </dt>
              <dd className="serif mt-2 text-3xl leading-tight">{it.duracion}</dd>
            </div>
            {it.base && (
              <div>
                <dt className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/70">
                  Alojamiento
                </dt>
                <dd className="mt-2 text-base leading-8 text-emerald-950/70">{it.base}</dd>
              </div>
            )}
            <div>
              <dt className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/70">
                Destinos
              </dt>
              <dd className="mt-2 text-base leading-8 text-emerald-950/70">
                {it.destinos.join(" · ")}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/70">
                Tipo de experiencia
              </dt>
              <dd className="mt-2 text-base leading-8 text-emerald-950/70">
                {it.tipoExperiencia.join(" · ")}
              </dd>
            </div>
            {it.publico && (
              <div className="sm:col-span-2">
                <dt className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/70">
                  Público sugerido
                </dt>
                <dd className="mt-2 text-base leading-8 text-emerald-950/70">{it.publico}</dd>
              </div>
            )}
          </dl>
        </Reveal>

        <div className="mt-16 space-y-16 text-emerald-950">
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
                <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/70">
                  Recuerdo · propuesta no garantizada
                </div>
                <h2 id="recuerdo" className="serif mt-3 text-4xl leading-none sm:text-5xl">
                  {it.recuerdo.titulo}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-emerald-950/70">
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

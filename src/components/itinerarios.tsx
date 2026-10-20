import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide";
import Reveal from "./Reveal";
import { MorphIcon } from "./MorphIcon";
import { provinciaPorSlug } from "../lib/provincias";
import { AVISO_HORARIOS, type DiaItinerario, type Itinerario } from "../lib/itinerarios";

export function TarjetaItinerario({
  itinerario,
  indice,
}: {
  itinerario: Itinerario;
  indice: number;
}) {
  return (
    <Reveal delay={Math.min(indice * 0.08, 0.2)} className="h-full">
      <article className="vapor group flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/50 text-emerald-950 shadow-[0_24px_70px_rgba(11,40,20,0.12)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_36px_90px_rgba(11,40,20,0.18)]">
        {itinerario.imagen ? (
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={itinerario.imagen.src}
              alt={itinerario.imagen.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
            />
          </div>
        ) : (
          <div
            className="flex h-56 w-full flex-col items-center justify-center gap-2 bg-emerald-950/5"
            role="img"
            aria-label={`Ilustración pendiente para ${itinerario.nombre}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt=""
              aria-hidden="true"
              className="h-14 w-14 object-contain opacity-30"
            />
            <span className="px-6 text-center text-[11px] uppercase tracking-[0.2em] text-emerald-950/40">
              Fotografía pendiente
            </span>
          </div>
        )}
        <div className="flex flex-1 flex-col p-5 sm:p-10">
          <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/80">
            {itinerario.duracion}
          </div>
          <h2 className="serif mt-3 text-4xl leading-[.95]">{itinerario.nombre}</h2>
          {itinerario.avisoDuracion && (
            <p className="mt-3 rounded-2xl bg-amber-100/70 px-4 py-2 text-sm font-medium leading-7 text-amber-900">
              {itinerario.avisoDuracion}
            </p>
          )}
          <p className="texto-lectura mt-4">
            {itinerario.resumen}
          </p>
          <dl className="mt-6 space-y-3 text-sm leading-7">
            <div className="flex gap-2">
              <dt className="shrink-0 font-semibold">Destinos:</dt>
              <dd className="text-emerald-950/80">{itinerario.destinos.join(" · ")}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="shrink-0 font-semibold">Experiencia:</dt>
              <dd className="text-emerald-950/80">{itinerario.tipoExperiencia.join(" · ")}</dd>
            </div>
          </dl>
          <Link
            href={`/itinerarios/${itinerario.slug}/`}
            aria-label={`Ver el itinerario ${itinerario.nombre}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-950 px-8 py-4 text-center text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
          >
            Ver itinerario <MorphIcon icon={ArrowRight} size={14} color="white" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

export function Cronograma({ dias }: { dias: DiaItinerario[] }) {
  const conHorarios = dias.some((d) => d.horarios.length > 0);
  return (
    <section aria-labelledby="cronograma">
      <h2 id="cronograma" className="serif text-4xl leading-none sm:text-5xl">
        Día a día
      </h2>
      {conHorarios && (
        <p className="mt-3 text-sm leading-7 text-emerald-950/70">{AVISO_HORARIOS}</p>
      )}
      <ol className="mt-8 space-y-6">
        {dias.map((d) => (
          <li
            key={d.dia}
            className="rounded-[2rem] border border-white/50 bg-white/50 p-6 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-[0_20px_50px_rgba(11,40,20,0.1)] sm:p-8"
          >
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-950 text-sm font-semibold text-white" aria-hidden="true">
                {d.dia}
              </span>
              <h3 className="serif text-2xl leading-tight sm:text-3xl">
                Día {d.dia}: {d.titulo}
              </h3>
            </div>
            <p className="texto-lectura mt-4">{d.resumen}</p>
            {d.horarios.length > 0 && (
              <div className="mt-5 overflow-x-auto rounded-2xl bg-white/60">
                <table className="w-full min-w-[320px] text-left text-sm leading-7">
                  <caption className="px-5 pb-1 pt-4 text-left text-[11px] uppercase tracking-[0.2em] text-emerald-900/75">
                    Horario orientativo
                  </caption>
                  <tbody>
                    {d.horarios.map((h) => (
                      <tr key={h.hora + h.actividad} className="border-t border-emerald-950/5 transition hover:bg-emerald-950/[0.03]">
                        <th scope="row" className="whitespace-nowrap px-5 py-2.5 font-semibold">
                          {h.hora}
                        </th>
                        <td className="px-5 py-2.5 text-[0.9375rem] leading-7 text-emerald-950/80">{h.actividad}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Bloque visible con las condiciones previas al viaje. */
export function AntesDeViajar({ items }: { items: string[] }) {
  return (
    <section
      aria-labelledby="antes-de-viajar"
      className="rounded-[2.5rem] bg-emerald-950 p-5 text-white sm:p-12"
    >
      <div className="text-[11px] uppercase tracking-[0.28em] text-white/65">
        Condiciones
      </div>
      <h2 id="antes-de-viajar" className="serif mt-3 text-4xl leading-none sm:text-5xl">
        Antes de viajar
      </h2>
      <ul className="mt-6 list-disc space-y-3 pl-6 text-base leading-8 text-white/85">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

/** Enlaces a lugares del mapa (solo coincidencias existentes en los datos). */
export function LugaresEnMapa({
  lugares,
}: {
  lugares: Itinerario["lugaresMapa"];
}) {
  if (lugares.length === 0) return null;
  return (
    <section aria-labelledby="en-el-mapa">
      <h2 id="en-el-mapa" className="serif text-4xl leading-none sm:text-5xl">
        En el mapa
      </h2>
      <p className="texto-lectura mt-3 max-w-2xl">
        Estos lugares del itinerario ya existen en el mapa del proyecto, con su
        ubicación y precisión registradas. Explóralos en la página de provincias.
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {lugares.map((ref) => {
          const prov = provinciaPorSlug(ref.provinciaSlug);
          const lugar = prov?.lugares.find((l) => l.id === ref.lugarId);
          if (!prov || !lugar) return null;
          return (
            <li
              key={`${ref.provinciaSlug}:${ref.lugarId}`}
              className="rounded-3xl border border-white/50 bg-white/50 p-5 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-[0_20px_50px_rgba(11,40,20,0.1)]"
            >
              <div className="text-[10px] uppercase tracking-[0.24em] text-emerald-900/75">
                {prov.nombre}
                {ref.dia ? ` · Día ${ref.dia}` : ""}
                {" · "}
                {lugar.precision === "exacta" ? "Ubicación exacta" : "Ubicación aproximada"}
              </div>
              <div className="serif mt-1 text-2xl leading-tight">{lugar.nombre}</div>
              <Link
                href="/provincias/#mapa-provincias"
                className="mt-2 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-emerald-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-emerald-700"
              >
                Ver en el mapa <MorphIcon icon={ArrowRight} size={12} color="currentColor" />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

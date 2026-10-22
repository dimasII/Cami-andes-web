import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide";
import Reveal from "@/components/Reveal";
import { MorphIcon } from "@/components/MorphIcon";
import FondoAura from "@/components/FondoAura";
import { TarjetaItinerario } from "@/components/itinerarios";
import { ITINERARIOS } from "@/lib/itinerarios";

export const metadata: Metadata = {
  title: "Itinerarios | CamiñAndes",
  description:
    "Cuatro rutas culturales por Apurímac: Abancay, Andahuaylas y los circuitos norte y sur. Propuestas de diseño por confirmar, con coordinación comunitaria.",
};

export default function ItinerariosPage() {
  return (
    <div className="relative isolate overflow-hidden px-4 pb-24 pt-32 sm:px-8 sm:pb-36 sm:pt-36">
      <FondoAura />
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.32em] text-emerald-900/80">
            Rutas · Apurímac
          </div>
          <h1 className="serif mt-6 text-[clamp(2.5rem,6vw,5rem)] leading-[.9] text-emerald-950">
            Cuatro formas de caminar Apurímac.
          </h1>
          <p className="texto-lectura mb-8 mt-5 max-w-2xl">
            Cuatro propuestas desarrolladas por el proyecto, con una identidad
            común y acentos propios: Abancay, entre paisaje, historia y vida
            cotidiana; Andahuaylas, en los saberes y las prácticas locales; el
            circuito norte, en la interpretación del paisaje y su patrimonio; y
            el circuito sur, en las historias, tradiciones y paisajes de altura.
            Son propuestas de diseño por confirmar, no rutas listas para
            reservar: requieren verificar accesos, horarios y coordinación con
            las comunidades.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {ITINERARIOS.map((it, i) => (
            <TarjetaItinerario key={it.slug} itinerario={it} indice={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <aside
            aria-label="Ruta combinada norte-sur"
            className="mt-12 rounded-[2.5rem] border border-dashed border-emerald-900/25 bg-white/30 p-5 backdrop-blur sm:p-10"
          >
            <div className="inline-block rounded-full bg-emerald-950/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.24em] text-emerald-950">
              En desarrollo
            </div>
            <h2 className="serif mt-4 text-3xl leading-tight text-emerald-950">
              Ruta combinada norte-sur
            </h2>
            <p className="texto-lectura mt-3 max-w-2xl">
              La unión de ambos circuitos solo se menciona como idea: falta definir
              su duración y sus etapas. No es una ruta lista para reservar.
            </p>
          </aside>
        </Reveal>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-950/5 px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-emerald-950 transition hover:bg-emerald-950/10 focus-visible:outline-2 focus-visible:outline-emerald-700"
          >
            <MorphIcon icon={ArrowLeft} size={13} color="currentColor" /> Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

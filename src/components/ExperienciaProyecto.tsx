"use client";

import { useState } from "react";
import Image from "next/image";
import { Compass, HeartHandshake, Landmark, Sprout, Users } from "lucide";
import { MorphIcon } from "./MorphIcon";

export type MomentoExperiencia = {
  titulo: string;
  texto: string;
  etiqueta: string;
  imagen: string;
  alt: string;
};

const ICONOS = [Compass, Landmark, Sprout, Users, HeartHandshake];

export default function ExperienciaProyecto({
  momentos,
}: {
  momentos: MomentoExperiencia[];
}) {
  const [activo, setActivo] = useState(0);
  const momento = momentos[activo];

  return (
    <div className="grid gap-5 lg:grid-cols-[1.12fr_.88fr]">
      <div
        id="panel-experiencia"
        role="region"
        aria-label="Momento de la experiencia"
        className="relative min-h-[27rem] overflow-hidden rounded-[2.5rem] bg-emerald-950 shadow-[0_30px_90px_rgba(9,38,24,0.24)] lg:min-h-[34rem]"
      >
        {momentos.map((m, i) => (
          <Image
            key={m.imagen}
            src={m.imagen}
            alt={i === activo ? m.alt : ""}
            aria-hidden={i !== activo}
            fill
            sizes="(max-width: 1024px) 100vw, 56vw"
            className={`object-cover transition duration-[900ms] ease-out ${
              i === activo ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04120c] via-[#04120c]/30 to-[#04120c]/25" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.18),transparent_38%)]" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-4 p-6 sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3.5 py-2 text-[10px] uppercase tracking-[0.24em] text-white/85 backdrop-blur-md">
            Etapa {String(activo + 1).padStart(2, "0")} / 05
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3.5 py-2 text-[10px] uppercase tracking-[0.24em] text-white/85 backdrop-blur-md">
            <MorphIcon icon={ICONOS[activo]} size={14} color="white" />
            {momento.etiqueta}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8" aria-live="polite">
          <div className="mb-5 flex gap-1.5" aria-hidden="true">
            {momentos.map((m, i) => (
              <span
                key={m.titulo}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === activo ? "w-10 bg-white" : "w-4 bg-white/30"
                }`}
              />
            ))}
          </div>
          <h3 className="serif max-w-xl text-[clamp(2rem,4vw,3.2rem)] leading-[.95]">
            {momento.titulo}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/75">
            {momento.texto}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {momentos.map((m, i) => {
          const seleccionado = i === activo;
          return (
            <button
              key={m.titulo}
              type="button"
              onClick={() => setActivo(i)}
              aria-pressed={seleccionado}
              aria-controls="panel-experiencia"
              className={`group flex items-center gap-4 rounded-2xl border px-4 py-4 text-left transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
                seleccionado
                  ? "border-emerald-950/20 bg-emerald-950 text-white shadow-[0_18px_50px_rgba(9,38,24,0.2)]"
                  : "border-emerald-950/10 bg-white/55 text-emerald-950 hover:border-emerald-950/20 hover:bg-white/85"
              }`}
            >
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition ${
                  seleccionado
                    ? "bg-white/12 text-white"
                    : "bg-emerald-900/8 text-emerald-800 group-hover:bg-emerald-900 group-hover:text-white"
                }`}
              >
                <MorphIcon
                  icon={ICONOS[i]}
                  size={18}
                  color={seleccionado ? "white" : "currentColor"}
                />
              </span>
              <span className="flex-1">
                <span
                  className={`block text-[10px] uppercase tracking-[0.24em] ${
                    seleccionado ? "text-white/50" : "text-emerald-900/45"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-0.5 block text-sm font-semibold leading-6">
                  {m.titulo}
                </span>
              </span>
              <span
                className={`h-2 w-2 shrink-0 rounded-full transition ${
                  seleccionado ? "bg-emerald-300" : "bg-emerald-950/15"
                }`}
              />
            </button>
          );
        })}

        <p className="mt-3 rounded-2xl border border-emerald-950/10 bg-white/40 px-4 py-3 text-xs leading-6 text-emerald-950/60">
          Toca cada momento para cambiar la imagen y leer cómo se vive en la
          ruta. La estructura es flexible: se adapta a cada itinerario.
        </p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  Binoculars,
  Check,
  ChevronDown,
  Church,
  Landmark,
  LayoutGrid,
  MapPin,
  Mountain,
  ScrollText,
  Shirt,
  SlidersHorizontal,
  UtensilsCrossed,
  Waves,
  Wheat,
} from "lucide";
import type { MorphIconProps } from "./MorphIcon";
import { MorphIcon } from "./MorphIcon";
import { PROVINCIAS, TIPO_LABEL, type TipoLugar } from "../lib/provincias";

type Icono = MorphIconProps["icon"];

export type Contenido = "todo" | "lugares" | "gastronomia" | "agricultura" | "vestimenta";

export const CONTENIDOS: { id: Contenido; label: string; icon: Icono }[] = [
  { id: "todo", label: "Todo", icon: LayoutGrid },
  { id: "lugares", label: "Lugares turísticos", icon: Landmark },
  { id: "gastronomia", label: "Gastronomía", icon: UtensilsCrossed },
  { id: "agricultura", label: "Agricultura", icon: Wheat },
  { id: "vestimenta", label: "Vestimenta", icon: Shirt },
];

const TIPO_ICONS: Record<TipoLugar, Icono> = {
  arqueologico: Landmark,
  natural: Mountain,
  termal: Waves,
  religioso: Church,
  mirador: Binoculars,
  historico: ScrollText,
};

const TIPOS = Object.keys(TIPO_ICONS) as TipoLugar[];

const VERDE = "#065f46";

interface FiltrosMapaProps {
  provincia: string | null;
  onProvincia: (slug: string | null) => void;
  contenido: Contenido;
  onContenido: (c: Contenido) => void;
  tipos: TipoLugar[];
  onToggleTipo: (t: TipoLugar) => void;
  onLimpiarTipos: () => void;
  mostrarContenido?: boolean;
}

type Abierto = "region" | "contenido" | "tipos" | null;

export default function FiltrosMapa({
  provincia,
  onProvincia,
  contenido,
  onContenido,
  tipos,
  onToggleTipo,
  onLimpiarTipos,
  mostrarContenido = true,
}: FiltrosMapaProps) {
  const [abierto, setAbierto] = useState<Abierto>(null);
  const toggle = (cual: Exclude<Abierto, null>) =>
    setAbierto((v) => (v === cual ? null : cual));

  const provActiva = PROVINCIAS.find((p) => p.slug === provincia);
  const contActivo = CONTENIDOS.find((c) => c.id === contenido)!;

  const btn =
    "inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] text-emerald-950 shadow backdrop-blur transition hover:bg-white";

  return (
    <div className="relative z-10 flex flex-wrap gap-2">
      <span className="mt-2.5 inline-flex">
        <MorphIcon icon={SlidersHorizontal} size={16} color="rgba(6,78,59,.5)" />
      </span>

      {/* 1 · Región */}
      <div className="relative">
        <button onClick={() => toggle("region")} className={btn}>
          <MorphIcon icon={MapPin} size={15} color={provActiva?.color ?? VERDE} />
          {provActiva ? provActiva.nombre : "Toda Apurímac"}
          <span className={`inline-flex transition-transform ${abierto === "region" ? "rotate-180" : ""}`}>
            <MorphIcon icon={ChevronDown} size={15} color={VERDE} />
          </span>
        </button>
        {abierto === "region" && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setAbierto(null)} />
            <div className="absolute left-0 top-full z-20 mt-2 w-56 max-w-[calc(100vw-4rem)] overflow-hidden rounded-2xl bg-white shadow-xl">
              <button
                onClick={() => { onProvincia(null); setAbierto(null); }}
                className={`flex w-full items-center gap-2 px-4 py-3 text-left text-sm transition hover:bg-emerald-950/5 ${
                  provincia === null ? "font-semibold text-emerald-800" : "text-emerald-950"
                }`}
              >
                <MorphIcon icon={MapPin} size={15} color={VERDE} />
                Toda Apurímac
              </button>
              {PROVINCIAS.map((p) => (
                <button
                  key={p.slug}
                  onClick={() => { onProvincia(p.slug); setAbierto(null); }}
                  className={`flex w-full items-center gap-2 px-4 py-3 text-left text-sm transition hover:bg-emerald-950/5 ${
                    provincia === p.slug ? "font-semibold" : ""
                  }`}
                >
                  <span
                    className="inline-block h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                  {p.nombre}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* 2 · Contenido */}
      {mostrarContenido && (
        <div className="relative">
          <button onClick={() => toggle("contenido")} className={btn}>
            <MorphIcon icon={contActivo.icon} size={15} color={VERDE} />
            {contActivo.label}
            <span className={`inline-flex transition-transform ${abierto === "contenido" ? "rotate-180" : ""}`}>
              <MorphIcon icon={ChevronDown} size={15} color={VERDE} />
            </span>
          </button>
          {abierto === "contenido" && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setAbierto(null)} />
              <div className="absolute left-0 top-full z-20 mt-2 w-56 max-w-[calc(100vw-4rem)] overflow-hidden rounded-2xl bg-white shadow-xl">
                {CONTENIDOS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => { onContenido(c.id); setAbierto(null); }}
                    className={`flex w-full items-center gap-2 px-4 py-3 text-left text-sm transition hover:bg-emerald-950/5 ${
                      contenido === c.id ? "font-semibold text-emerald-800" : "text-emerald-950"
                    }`}
                  >
                    <MorphIcon icon={c.icon} size={15} color={VERDE} />
                    {c.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* 3 · Tipo de lugar */}
      <div className="relative">
        <button onClick={() => toggle("tipos")} className={btn}>
          <MorphIcon icon={Landmark} size={15} color={VERDE} />
          {tipos.length === 0 ? "Todos los tipos" : `${tipos.length} tipo${tipos.length > 1 ? "s" : ""}`}
          <span className={`inline-flex transition-transform ${abierto === "tipos" ? "rotate-180" : ""}`}>
            <MorphIcon icon={ChevronDown} size={15} color={VERDE} />
          </span>
        </button>
        {abierto === "tipos" && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setAbierto(null)} />
            <div className="absolute right-0 top-full z-20 mt-2 w-60 max-w-[calc(100vw-4rem)] overflow-hidden sm:left-0 sm:right-auto rounded-2xl bg-white shadow-xl">
              {TIPOS.map((t) => {
                const activo = tipos.includes(t);
                return (
                  <button
                    key={t}
                    onClick={() => onToggleTipo(t)}
                    className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-emerald-950 transition hover:bg-emerald-950/5"
                  >
                    <span
                      className={`grid h-5 w-5 place-items-center rounded-md border text-white ${
                        activo ? "border-emerald-700 bg-emerald-700" : "border-emerald-950/25"
                      }`}
                    >
                      {activo ? <MorphIcon icon={Check} size={13} color="white" /> : null}
                    </span>
                    <MorphIcon icon={TIPO_ICONS[t]} size={15} color={VERDE} />
                    {TIPO_LABEL[t]}
                  </button>
                );
              })}
              {tipos.length > 0 && (
                <button
                  onClick={() => { onLimpiarTipos(); setAbierto(null); }}
                  className="w-full px-4 py-2.5 text-left text-[11px] uppercase tracking-[0.2em] text-emerald-800 underline"
                >
                  Limpiar
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

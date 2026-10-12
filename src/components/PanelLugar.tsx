"use client";
import { useEffect } from "react";
import { MapPin, X } from "lucide";
import { MorphIcon } from "./MorphIcon";
import Carrusel from "./Carrusel";
import { TIPO_LABEL, type LugarEnriquecido } from "../lib/provincias";
interface PanelLugarProps {
  lugar: LugarEnriquecido | null;
  onClose: () => void;
}

export default function PanelLugar({ lugar, onClose }: PanelLugarProps) {
  useEffect(() => {
    if (!lugar) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lugar, onClose]);

  if (!lugar) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-emerald-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={lugar.nombre}
    >
      <div
        className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-t-[2rem] bg-white p-5 shadow-2xl sm:rounded-[2rem] sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
            style={{ backgroundColor: lugar.color }}
          >
            {lugar.provincia} · {TIPO_LABEL[lugar.tipo]}
          </span>
          <button
            onClick={onClose}
            aria-label="Cerrar detalle"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-950/10 text-emerald-950 transition hover:bg-emerald-950/20"
          >
            <MorphIcon icon={X} size={18} color="currentColor" />
          </button>
        </div>

        <h3 className="serif mt-4 text-4xl leading-none text-emerald-950 sm:text-6xl">
          {lugar.nombre}
        </h3>
        <p className="mt-2 text-xs uppercase tracking-[0.24em] text-emerald-900/60">
          {lugar.distrito}
        </p>

        <div className="mt-5">
          <Carrusel imagenes={lugar.imagenes} alt={lugar.nombre} alto="h-72 sm:h-[28rem]" />
        </div>

        <p className="mt-5 max-w-3xl text-lg leading-9 text-emerald-950/80">
          {lugar.descripcion}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-emerald-950/10 pt-4 text-sm text-emerald-900/60">
          <span className="inline-flex items-center gap-1.5">
            <MorphIcon icon={MapPin} size={15} color="currentColor" />
            {lugar.coords[1].toFixed(4)}, {lugar.coords[0].toFixed(4)}
          </span>
          {lugar.precision === "aproximada" && (
            <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-amber-800">
              Ubicación aproximada
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

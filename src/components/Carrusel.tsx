"use client";

import { useState } from "react";

interface CarruselProps {
  imagenes: string[];
  alt: string;
  /** altura del marco, por defecto h-56 */
  alto?: string;
}

/**
 * Carrusel simple para las fotos de cada lugar.
 * - 0 fotos → marcador con el logo ("fotos próximamente").
 * - 1 foto → imagen fija sin flechas.
 * - N fotos → flechas + contador + puntos.
 */
export default function Carrusel({ imagenes, alt, alto = "h-56" }: CarruselProps) {
  const [i, setI] = useState(0);
  const [full, setFull] = useState(false);

  if (imagenes.length === 0) {
    return (
      <div
        className={`flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-emerald-950/5 text-center ${alto}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.svg"
          alt="Camiñandes"
          className="h-16 w-16 object-contain opacity-30"
        />
        <span className="px-6 text-xs uppercase tracking-[0.2em] text-emerald-950/40">
          Fotos próximamente
        </span>
      </div>
    );
  }

  const prev = () => setI((v) => (v - 1 + imagenes.length) % imagenes.length);
  const next = () => setI((v) => (v + 1) % imagenes.length);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-emerald-950/5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imagenes[i]}
        alt={`${alt} — foto ${i + 1}`}
        onClick={() => setFull(true)}
        title="Ver imagen completa"
        className={`w-full cursor-zoom-in object-cover ${alto}`}
      />
      <button
        onClick={() => setFull(true)}
        aria-label="Ver imagen completa"
        className="absolute left-2 top-2 rounded-full bg-black/45 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-white backdrop-blur transition hover:bg-black/65"
      >
        ⛶ Ampliar
      </button>
      {imagenes.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-lg text-white backdrop-blur transition hover:bg-black/65"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Foto siguiente"
            className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-lg text-white backdrop-blur transition hover:bg-black/65"
          >
            ›
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/45 px-3 py-1.5 backdrop-blur">
            {imagenes.map((_, d) => (
              <button
                key={d}
                onClick={() => setI(d)}
                aria-label={`Ir a la foto ${d + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  d === i ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
          <span className="absolute bottom-2 right-2 rounded-full bg-black/45 px-2.5 py-1 text-[11px] text-white backdrop-blur">
            {i + 1} / {imagenes.length}
          </span>
        </>
      )}
      {/* Vista de imagen completa */}
      {full && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-black/90 p-4"
          onClick={() => setFull(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} — imagen completa`}
        >
          <button
            aria-label="Cerrar imagen completa"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-2xl text-white transition hover:bg-white/30"
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imagenes[i]}
            alt={`${alt} — foto ${i + 1} completa`}
            className="max-h-full max-w-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-xs text-white">
            {i + 1} / {imagenes.length} · toca fuera para cerrar
          </span>
        </div>
      )}
    </div>
  );
}

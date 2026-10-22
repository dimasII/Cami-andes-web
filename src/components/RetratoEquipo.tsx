"use client";

import { useEffect, useRef, useState } from "react";

type RetratoEquipoProps = {
  src: string;
  alt: string;
  iniciales: string;
  siglas: string;
};

export default function RetratoEquipo({
  src,
  alt,
  iniciales,
  siglas,
}: RetratoEquipoProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [cargada, setCargada] = useState(false);
  const [fallo, setFallo] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img || !img.complete) return;

    if (img.naturalWidth > 0) {
      setCargada(true);
    } else {
      setFallo(true);
    }
  }, []);

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-emerald-950">
      <div className="relative flex h-full flex-col justify-between overflow-hidden p-5">
        <div className="absolute -right-12 -top-14 h-44 w-44 rounded-full bg-emerald-600/25 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-lime-300/10 blur-3xl" />
        <div className="moss-grid opacity-50" />

        <div className="relative text-[9px] uppercase tracking-[0.3em] text-white/40">
          CamiñAndes
        </div>

        <div className="relative">
          <div className="serif text-[5.5rem] leading-none text-white/90">
            {iniciales}
          </div>
          <div className="mt-2 text-[9px] uppercase tracking-[0.28em] text-white/45">
            COIL 2026
          </div>
        </div>
      </div>

      {!fallo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setCargada(true)}
          onError={() => setFallo(true)}
          className={`absolute inset-0 h-full w-full object-cover transition duration-700 ease-out ${
            cargada
              ? "opacity-100 group-hover:scale-[1.04]"
              : "opacity-0"
          }`}
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/55 via-transparent to-transparent opacity-70" />

      {cargada && !fallo && (
        <span className="absolute left-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-emerald-950/45 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          {siglas}
        </span>
      )}
    </div>
  );
}

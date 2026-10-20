"use client";

import { useEffect, useState } from "react";
import { Film } from "lucide";
import { MorphIcon } from "./MorphIcon";

interface VideoRutaProps {
  src: string;
  poster?: string;
  titulo: string;
}

type Estado = "cargando" | "listo" | "falta";

/**
 * Reproductor del video de una ruta.
 * Comprueba si el archivo existe en /video/itinerarios y, si todavía no está,
 * muestra un marcador elegante en lugar de un reproductor roto. Así basta con
 * subir el MP4 al hosting (o a public/) para que aparezca, sin tocar código.
 */
export default function VideoRuta({ src, poster, titulo }: VideoRutaProps) {
  const [estado, setEstado] = useState<Estado>("cargando");
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelado = false;
    fetch(src, { method: "HEAD" })
      .then((res) => {
        if (cancelado) return;
        setEstado(res.status === 404 ? "falta" : "listo");
      })
      .catch(() => {
        // Si HEAD no está permitido, dejamos que el propio <video> lo intente.
        if (!cancelado) setEstado("listo");
      });
    return () => {
      cancelado = true;
    };
  }, [src]);

  if (estado === "listo" && !error) {
    return (
      <div className="overflow-hidden rounded-[2rem] border border-white/50 bg-emerald-950 shadow-[0_30px_80px_rgba(11,40,20,0.22)]">
        <video
          src={src}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          onError={() => setError(true)}
          aria-label={`Video del itinerario ${titulo}`}
          className="aspect-video w-full object-cover"
        >
          Tu navegador no admite video HTML5.
        </video>
      </div>
    );
  }

  const cargando = estado === "cargando" && !error;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] border border-white/50 bg-emerald-950">
      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-35 blur-[3px]"
        />
      )}
      <div className="absolute inset-0 bg-emerald-950/60" />
      <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 text-center text-white">
        <span className="grid h-16 w-16 place-items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-xl">
          {cargando ? (
            <span
              aria-hidden="true"
              className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white"
            />
          ) : (
            <MorphIcon icon={Film} size={26} color="white" />
          )}
        </span>
        {cargando ? (
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/55">
            Cargando video
          </p>
        ) : (
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-white/55">
              Video de la ruta
            </div>
            <p className="serif mt-2 text-2xl leading-none sm:text-3xl">
              Próximamente
            </p>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Estamos preparando el video de {titulo}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

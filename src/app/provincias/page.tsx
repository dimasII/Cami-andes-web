"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide";
import { MorphIcon } from "../../components/MorphIcon";
import MapboxMap from "../../components/MapboxMap";
import PanelLugar from "../../components/PanelLugar";
import Carrusel from "../../components/Carrusel";
import FiltrosMapa, { type Contenido } from "../../components/FiltrosMapa";
import Reveal from "../../components/Reveal";
import {
  PROVINCIAS,
  TIPO_LABEL,
  type LugarEnriquecido,
  type TipoLugar,
} from "../../lib/provincias";

export default function ProvinciasPage() {
  const [provincia, setProvincia] = useState<string | null>(null);
  const [contenido, setContenido] = useState<Contenido>("todo");
  const [tipos, setTipos] = useState<TipoLugar[]>([]);
  const [seleccionado, setSeleccionado] = useState<LugarEnriquecido | null>(null);

  const toggleTipo = (t: TipoLugar) =>
    setTipos((v) => (v.includes(t) ? v.filter((x) => x !== t) : [...v, t]));

  const elegirProvincia = (slug: string | null) => {
    setProvincia(slug);
    setSeleccionado(null);
  };

  const verEnMapa = (slug: string) => {
    elegirProvincia(slug);
    document.getElementById("mapa-provincias")?.scrollIntoView({ behavior: "smooth" });
  };

  const provinciasVisibles = provincia
    ? PROVINCIAS.filter((p) => p.slug === provincia)
    : PROVINCIAS;

  const verLugares = contenido === "todo" || contenido === "lugares";

  return (
    <div className="px-4 pb-24 pt-32 sm:px-8 sm:pb-36 sm:pt-36">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.32em] text-emerald-900/70">
            Territorio · 7 provincias
          </div>
          <h1 className="serif mt-6 text-[clamp(2.5rem,6vw,5rem)] leading-[.9] text-emerald-950">
            Apurímac provincia por provincia.
          </h1>
          <p className="mb-8 mt-4 max-w-2xl text-lg leading-9 text-emerald-950/70">
            Primero elige la región, luego qué quieres ver. Toca cualquier punto
            del mapa para abrir su ficha a pantalla completa.
          </p>
        </Reveal>

        {/* FILTROS desplegables: 1 región · 2 contenido · 3 tipo */}
        <Reveal delay={0.05}>
          <FiltrosMapa
            provincia={provincia}
            onProvincia={elegirProvincia}
            contenido={contenido}
            onContenido={setContenido}
            tipos={tipos}
            onToggleTipo={toggleTipo}
            onLimpiarTipos={() => setTipos([])}
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div id="mapa-provincias" className="map-shell relative mt-8 scroll-mt-32">
            <MapboxMap
              foco={provincia}
              filtroProvincia={provincia}
              filtroTipos={tipos}
              onSelectLugar={setSeleccionado}
            />
          </div>
        </Reveal>

        {/* Fichas por provincia (respetan los filtros) */}
        <div className="mt-20 space-y-10">
          {provinciasVisibles.map((p, idx) => (
            <Reveal key={p.slug} delay={Math.min(idx * 0.05, 0.2)}>
              <article className="vapor overflow-hidden rounded-[2.5rem] text-emerald-950">
                <div className="h-2 w-full" style={{ backgroundColor: p.color }} />
                <div className="p-5 sm:p-12">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/70">
                        Capital: {p.capital}
                      </div>
                      <h2 className="serif mt-3 text-5xl leading-none">{p.nombre}</h2>
                      <p className="mt-3 max-w-2xl text-base leading-8 text-emerald-950/70">
                        {p.resumen}
                      </p>
                    </div>
                    <button
                      onClick={() => verEnMapa(p.slug)}
                      className="rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-white transition hover:opacity-90"
                      style={{ backgroundColor: p.color }}
                    >
                      Ver en mapa
                    </button>
                  </div>

                  {verLugares && (
                    <>
                      <h3 className="mt-10 text-[11px] uppercase tracking-[0.28em] text-emerald-900/70">
                        Lugares
                        {tipos.length > 0 && ` · ${tipos.map((t) => TIPO_LABEL[t]).join(", ")}`}
                      </h3>
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        {p.lugares
                          .filter((l) => tipos.length === 0 || tipos.includes(l.tipo))
                          .map((l) => (
                            <button
                              key={l.id}
                              onClick={() =>
                                setSeleccionado({
                                  ...l,
                                  provincia: p.nombre,
                                  provinciaSlug: p.slug,
                                  color: p.color,
                                })
                              }
                              className="rounded-3xl bg-white/50 p-5 text-left backdrop-blur transition hover:bg-white/80"
                            >
                              <div className="text-[10px] uppercase tracking-[0.24em] text-emerald-900/60">
                                {TIPO_LABEL[l.tipo]} · {l.distrito}
                              </div>
                              <div className="serif mt-1 text-2xl leading-tight">{l.nombre}</div>
                              <p className="mt-2 line-clamp-2 text-sm leading-7 text-emerald-950/65">
                                {l.descripcion}
                              </p>
                              <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-emerald-800">
                                Ver fotos e info <MorphIcon icon={ArrowRight} size={12} color="currentColor" />
                              </span>
                            </button>
                          ))}
                      </div>
                    </>
                  )}

                  {(
                    [
                      ["gastronomia", "Gastronomía", p.gastronomia],
                      ["agricultura", "Agricultura", p.agricultura],
                      ["vestimenta", "Vestimenta típica", p.vestimenta],
                    ] as const
                  )
                    .filter(([id]) => contenido === "todo" || contenido === id)
                    .map(([, titulo, items]) => (
                      <div key={titulo} className="mt-8">
                        <h3 className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/70">
                          {titulo}
                        </h3>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {items.map((item) => (
                            <div key={item.nombre} className="rounded-3xl bg-white/40 p-5 backdrop-blur">
                              {item.imagen && (
                                <div className="mb-3">
                                  <Carrusel imagenes={[item.imagen]} alt={item.nombre} />
                                </div>
                              )}
                              <div className="font-semibold">{item.nombre}</div>
                              <p className="mt-1 text-sm leading-7 text-emerald-950/65">
                                {item.descripcion}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-950/5 px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-emerald-950 transition hover:bg-emerald-950/10"
          >
            <MorphIcon icon={ArrowLeft} size={13} color="currentColor" /> Volver al inicio
          </Link>
        </div>
      </div>

      {/* Detalle a pantalla completa */}
      <PanelLugar lugar={seleccionado} onClose={() => setSeleccionado(null)} />
    </div>
  );
}

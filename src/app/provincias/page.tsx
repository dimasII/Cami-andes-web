"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Camera, ImageOff } from "lucide";
import { MorphIcon } from "../../components/MorphIcon";
import MapboxMap from "../../components/MapboxMap";
import PanelLugar from "../../components/PanelLugar";
import Carrusel from "../../components/Carrusel";
import FiltrosMapa, { TIPO_ICONS, type Contenido } from "../../components/FiltrosMapa";
import FondoAura from "../../components/FondoAura";
import Reveal from "../../components/Reveal";
import {
  PROVINCIAS,
  TIPO_LABEL,
  type LugarEnriquecido,
  type TipoLugar,
} from "../../lib/provincias";

export default function ProvinciasPage() {
  // Nivel 1 · región/provincia — Nivel 2 · contenido y tipo de lugar
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
    <div className="relative isolate overflow-hidden px-4 pb-24 pt-32 sm:px-8 sm:pb-36 sm:pt-36">
      <FondoAura />
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.32em] text-emerald-900/80">
            Territorio · 7 provincias
          </div>
          <h1 className="serif mt-6 text-[clamp(2.5rem,6vw,5rem)] leading-[.9] text-emerald-950">
            Apurímac provincia por provincia.
          </h1>
          <p className="texto-lectura mb-8 mt-5 max-w-2xl">
            Primero elige la región, luego qué quieres ver. Toca cualquier punto
            del mapa para abrir su ficha a pantalla completa o recorre las fotos
            de cada lugar más abajo.
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
        <div className="mt-20 space-y-12">
          {provinciasVisibles.map((p, idx) => {
            const lugaresFiltrados = p.lugares.filter(
              (l) => tipos.length === 0 || tipos.includes(l.tipo)
            );
            const portada = p.lugares.find((l) => l.imagenes.length > 0)?.imagenes[0];
            const totalFotos = p.lugares.reduce((n, l) => n + l.imagenes.length, 0);

            const categorias = (
              [
                ["gastronomia", "Gastronomía", p.gastronomia],
                ["agricultura", "Agricultura", p.agricultura],
                ["vestimenta", "Vestimenta típica", p.vestimenta],
              ] as const
            ).filter(([id]) => contenido === "todo" || contenido === id);

            return (
              <Reveal key={p.slug} delay={Math.min(idx * 0.05, 0.2)}>
                <article className="vapor overflow-hidden rounded-[2.5rem] border border-white/60 text-emerald-950 shadow-[0_24px_70px_rgba(11,40,20,0.1)]">
                  <div className="h-1.5 w-full" style={{ backgroundColor: p.color }} />

                  {/* Cabecera: datos + foto de portada */}
                  <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1.05fr_.95fr] lg:items-stretch lg:p-10">
                    <div className="flex flex-col">
                      <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/80">
                        Capital: {p.capital}
                      </div>
                      <h2 className="serif mt-3 text-5xl leading-none">{p.nombre}</h2>
                      <p className="texto-lectura mt-4 max-w-2xl">{p.resumen}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="rounded-full border border-emerald-950/10 bg-emerald-950/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-emerald-900/85">
                          {p.lugares.length} lugares
                        </span>
                        <span className="rounded-full border border-emerald-950/10 bg-emerald-950/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-emerald-900/85">
                          {totalFotos} fotos
                        </span>
                      </div>

                      <button
                        onClick={() => verEnMapa(p.slug)}
                        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-white shadow-lg transition hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                        style={{ backgroundColor: p.color }}
                      >
                        Ver en mapa <MorphIcon icon={ArrowRight} size={14} color="white" />
                      </button>
                    </div>

                    {portada && (
                      <figure className="relative h-60 overflow-hidden rounded-[1.75rem] border border-white/50 sm:h-72 lg:h-auto lg:min-h-[280px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={portada}
                          alt={`Paisaje de la provincia de ${p.nombre}`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-emerald-950/5 to-transparent" />
                        <figcaption className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3 text-white">
                          <span className="text-[10px] uppercase tracking-[0.24em] text-white/90">
                            {p.nombre} · Apurímac
                          </span>
                          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/15 backdrop-blur">
                            <MorphIcon icon={Camera} size={15} color="white" />
                          </span>
                        </figcaption>
                      </figure>
                    )}
                  </div>

                  {/* Lugares con foto */}
                  {verLugares && (
                    <div className="border-t border-emerald-950/10 px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h3 className="text-[11px] uppercase tracking-[0.28em] text-emerald-900/80">
                          Lugares
                          {tipos.length > 0 &&
                            ` · ${tipos.map((t) => TIPO_LABEL[t]).join(", ")}`}
                        </h3>
                        <span className="text-[10px] uppercase tracking-[0.18em] text-emerald-900/60">
                          {lugaresFiltrados.length} de {p.lugares.length}
                        </span>
                      </div>

                      {lugaresFiltrados.length === 0 ? (
                        <p className="texto-lectura mt-4 text-emerald-900/75">
                          No hay lugares con esos filtros en {p.nombre}. Prueba con
                          otro tipo.
                        </p>
                      ) : (
                        <div className="mt-5 flex flex-wrap justify-center gap-4">
                          {lugaresFiltrados.map((l) => (
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
                              className="group flex h-auto w-full flex-col overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/55 text-left shadow-[0_10px_30px_rgba(11,40,20,0.08)] transition duration-500 hover:-translate-y-1 hover:bg-white/85 hover:shadow-[0_20px_50px_rgba(11,40,20,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
                            >
                              <div className="relative aspect-[16/10] w-full overflow-hidden bg-emerald-950/5">
                                {l.imagenes[0] ? (
                                  // eslint-disable-next-line @next/next/no-img-element
                                  <img
                                    src={l.imagenes[0]}
                                    alt={l.nombre}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                                  />
                                ) : (
                                  <div className="flex h-full w-full items-center justify-center text-emerald-900/30">
                                    <MorphIcon icon={ImageOff} size={34} color="currentColor" />
                                  </div>
                                )}
                                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-emerald-950/65 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-md">
                                  <MorphIcon icon={TIPO_ICONS[l.tipo]} size={12} color="white" />
                                  {TIPO_LABEL[l.tipo]}
                                </span>
                                {l.imagenes.length > 1 && (
                                  <span className="absolute bottom-3 right-3 rounded-full bg-black/45 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur">
                                    {l.imagenes.length} fotos
                                  </span>
                                )}
                              </div>

                              <div className="flex flex-1 flex-col p-4">
                                <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-900/75">
                                  {l.distrito}
                                </div>
                                <div className="serif mt-1 text-2xl leading-tight">
                                  {l.nombre}
                                </div>
                                <p className="mt-2 line-clamp-2 text-[0.9375rem] leading-6 text-emerald-950/80">
                                  {l.descripcion}
                                </p>
                                <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[10px] uppercase tracking-[0.2em] text-emerald-800">
                                  Ver fotos e info
                                  <MorphIcon icon={ArrowRight} size={12} color="currentColor" />
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Gastronomía · agricultura · vestimenta */}
                  {categorias.length > 0 && (
                    <div className="border-t border-emerald-950/10 px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
                      <div className="grid gap-4 md:grid-cols-3">
                        {categorias.map(([id, titulo, items]) => (
                          <section
                            key={id}
                            className="rounded-[1.5rem] border border-white/50 bg-white/45 p-5"
                          >
                            <h3 className="text-[11px] uppercase tracking-[0.24em] text-emerald-900/80">
                              {titulo}
                            </h3>
                            <ul className="mt-4 space-y-3">
                              {items.map((item) => (
                                <li
                                  key={item.nombre}
                                  className="border-t border-emerald-950/8 pt-3 first:border-0 first:pt-0"
                                >
                                  <div className="font-semibold leading-tight">
                                    {item.nombre}
                                  </div>
                                  <p className="mt-1 text-[0.9375rem] leading-6 text-emerald-950/80">
                                    {item.descripcion}
                                  </p>
                                  {item.imagen && (
                                    <div className="mt-2">
                                      <Carrusel
                                        imagenes={[item.imagen]}
                                        alt={item.nombre}
                                        alto="h-36"
                                      />
                                    </div>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </section>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-950/5 px-8 py-4 text-[11px] uppercase tracking-[0.24em] text-emerald-950 transition hover:bg-emerald-950/10 focus-visible:outline-2 focus-visible:outline-emerald-700"
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

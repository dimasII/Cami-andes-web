"use client";

import { useState } from "react";
import Link from "next/link";
import { MorphIcon } from "../components/MorphIcon";
import { ArrowRight, Bird, Images, Landmark, Map as MapIcon, Mountain, Newspaper, Route, Users } from "lucide";
import MapboxMap from "../components/MapboxMap";
import PanelLugar from "../components/PanelLugar";
import FiltrosMapa, { type Contenido } from "../components/FiltrosMapa";
import Reveal from "../components/Reveal";
import type { LugarEnriquecido, TipoLugar } from "../lib/provincias";

const secciones = [
  {
    icon: Users,
    tag: "Nosotros",
    title: "Quiénes somos",
    desc: "El equipo detrás de Camiñandes y su trabajo en Apurímac.",
    href: "/contacto/",
  },
  {
    icon: MapIcon,
    tag: "Provincias",
    title: "Apurímac provincia por provincia",
    desc: "Las 7 provincias en el mapa: lugares, gastronomía, agricultura y vestimenta.",
    href: "/provincias/",
  },
  {
    icon: Route,
    tag: "Itinerarios",
    title: "4 rutas culturales",
    desc: "Abancay, Andahuaylas y los circuitos norte y sur, día a día.",
    href: "/itinerarios/",
  },
  {
    icon: Images,
    tag: "Galería",
    title: "Fotos de Apurímac",
    desc: "Caminos, paisajes y fiestas de la región.",
    href: "/galeria/",
  },
  {
    icon: Newspaper,
    tag: "Blog",
    title: "Diario del proyecto",
    desc: "Avances, relatos y resultados del trabajo en Apurímac.",
    href: "/blog/",
  },
];

const records = [
  {
    icon: Mountain,
    tag: "Lo más alto",
    title: "Nevado Ampay · 5 235 m",
    desc: "El techo del Santuario Nacional de Ampay, entre bosques de intimpas y lagunas de altura.",
  },
  {
    icon: Bird,
    tag: "Lo más profundo",
    title: "Cañón del Apurímac · 4 691 m",
    desc: "Uno de los cañones más profundos del planeta: miradores, vuelo de cóndores y puerta a Choquequirao.",
  },
  {
    icon: Landmark,
    tag: "El imperdible",
    title: "Choquequirao, la «cuna de oro»",
    desc: "Ciudadela inca entre los Andes y la ceja de selva, en caminata de 2 días desde Cachora.",
  },
];

export default function Home() {
  const [seleccionado, setSeleccionado] = useState<LugarEnriquecido | null>(null);
  const [provincia, setProvincia] = useState<string | null>(null);
  const [tipos, setTipos] = useState<TipoLugar[]>([]);
  const noopContenido = (_: Contenido) => {};

  return (
    <div>
      {/* HERO con video de fondo */}
      <section className="ascend-mid relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        {/* Video de fondo — solo en el hero */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        {/* Velo neutro muy sutil solo para legibilidad, sin tinte verde */}
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 max-w-5xl rounded-[4rem] px-6 py-14 text-center text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.8)] sm:px-10">
          <div className="condense condense-1 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-[11px] uppercase tracking-[0.32em] text-white/80">
            Proyecto COIL · 2026
          </div>

          <h1 className="serif condense condense-2 mt-10 text-[clamp(3.5rem,11vw,9rem)] leading-[.85]">
            Camiñandes
          </h1>

          <p className="condense condense-3 mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/75">
            Caminando entre Apurímac y Galicia: un intercambio cultural y
            académico sobre caminos, memoria, territorio e identidad.
          </p>

          <div className="condense condense-4 mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/proyecto/"
              className="mist-button inline-flex items-center gap-3 px-8 py-5 text-[11px] uppercase tracking-[0.24em]"
            >
              Conoce el proyecto
              <MorphIcon icon={ArrowRight} size={16} color="white" />
            </Link>
            <Link
              href="/galeria/"
              className="rounded-full bg-white/8 px-8 py-5 text-[11px] uppercase tracking-[0.24em] text-white/70 backdrop-blur-3xl transition hover:bg-white/14"
            >
              Ver galería
            </Link>
          </div>
        </div>
      </section>

      {/* RÉCORDS DE APURÍMAC */}
      <section className="ascend-light relative overflow-hidden px-4 sm:px-8 py-36">
        <div className="mx-auto max-w-[1700px]">
          <Reveal className="max-w-4xl">
            <div className="text-[11px] uppercase tracking-[0.32em] text-emerald-900/70">
              Apurímac en sus extremos
            </div>
            <h2 className="serif mt-6 text-[clamp(2.5rem,6vw,5.5rem)] leading-[.9] text-emerald-950">
              Lo más alto, lo más profundo, lo imperdible.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {records.map((c, i) => (
              <Reveal key={c.tag} delay={i * 0.12} className="h-full">
                <Link
                  href="/provincias/"
                  aria-label={`${c.tag}: ${c.title}. Ver en provincias`}
                  className={`vapor flex h-full flex-col p-6 sm:p-10 text-emerald-950 transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
                    i % 2 === 0 ? "organic" : "leaf"
                  }`}
                >
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-900/10">
                    <MorphIcon icon={c.icon} size={26} color="var(--emerald)" />
                  </div>
                  <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-emerald-900/90">
                    {c.tag}
                  </div>
                  <h3 className="serif mt-4 text-4xl leading-[.95]">{c.title}</h3>
                  <p className="mt-5 text-base leading-8 text-emerald-950/70">
                    {c.desc}
                  </p>
                  <span className="mt-auto inline-block pt-6 text-[11px] uppercase tracking-[0.24em] text-emerald-800">
                    Ver en provincias →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORA — la información principal, con redirección a cada sección */}
      <section className="ascend-light relative overflow-hidden px-4 sm:px-8 pb-36">
        <div className="mx-auto max-w-[1700px]">
          <Reveal className="max-w-4xl">
            <div className="text-[11px] uppercase tracking-[0.32em] text-emerald-900/70">
              Explora
            </div>
            <h2 className="serif mt-6 text-[clamp(2.5rem,6vw,5.5rem)] leading-[.9] text-emerald-950">
              Todo el proyecto, desde aquí.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-emerald-950/70">
              Cada tarjeta resume una sección de la web y te lleva a su página
              completa.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {secciones.map((s, i) => (
              <Reveal key={s.tag} delay={Math.min(i * 0.06, 0.2)} className="h-full">
                <Link
                  href={s.href}
                  aria-label={`Ir a ${s.tag}: ${s.title}`}
                  className={`vapor flex h-full flex-col p-6 sm:p-10 text-emerald-950 transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 ${
                    i % 2 === 0 ? "organic" : "leaf"
                  }`}
                >
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-900/10">
                    <MorphIcon icon={s.icon} size={26} color="var(--emerald)" />
                  </div>
                  <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-emerald-900/90">
                    {s.tag}
                  </div>
                  <h3 className="serif mt-4 text-4xl leading-[.95]">{s.title}</h3>
                  <p className="mt-5 text-base leading-8 text-emerald-950/70">
                    {s.desc}
                  </p>
                  <span className="mt-auto inline-block pt-6 text-[11px] uppercase tracking-[0.24em] text-emerald-800">
                    Entrar →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="ascend-light relative overflow-hidden px-4 sm:px-8 pb-36">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-emerald-900/70">
              <MorphIcon icon={MapIcon} size={18} color="var(--emerald)" />
              Territorio
            </div>
            <h2 className="serif text-[clamp(2.5rem,6vw,5rem)] leading-[.9] text-emerald-950">
              De Apurímac a Galicia.
            </h2>
            <p className="mb-8 mt-4 max-w-2xl text-lg leading-9 text-emerald-950/70">
              Explora la región Apurímac resaltada en el mapa, con los límites de
              sus 7 provincias: Abancay, Andahuaylas, Antabamba, Aymaraes,
              Chincheros, Cotabambas y Grau. Toca cada punto para ver sus fotos
              e historia.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mb-4">
              <FiltrosMapa
                provincia={provincia}
                onProvincia={(slug) => { setProvincia(slug); setSeleccionado(null); }}
                contenido="todo"
                onContenido={noopContenido}
                tipos={tipos}
                onToggleTipo={(t) => setTipos((v) => (v.includes(t) ? v.filter((x) => x !== t) : [...v, t]))}
                onLimpiarTipos={() => setTipos([])}
                mostrarContenido={false}
              />
            </div>
            <div className="map-shell relative">
              <MapboxMap
                foco={provincia}
                filtroProvincia={provincia}
                filtroTipos={tipos}
                onSelectLugar={setSeleccionado}
              />
              <PanelLugar lugar={seleccionado} onClose={() => setSeleccionado(null)} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="ascend-mid relative overflow-hidden px-4 sm:px-8 py-32">
        <div className="moss-grid"></div>
        <Reveal className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="serif text-[clamp(2.5rem,6vw,5rem)] leading-[.9] text-white">
            ¿Quieres participar?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-9 text-white/70">
            Escríbenos desde la página de contacto o explora el blog con los
            avances del proyecto.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto/"
              className="mist-button inline-flex items-center gap-3 px-8 py-5 text-[11px] uppercase tracking-[0.24em]"
            >
              Contactar
              <MorphIcon icon={ArrowRight} size={16} color="white" />
            </Link>
            <Link
              href="/blog/"
              className="rounded-full bg-white/8 px-8 py-5 text-[11px] uppercase tracking-[0.24em] text-white/70 backdrop-blur-3xl transition hover:bg-white/14"
            >
              Leer el blog
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

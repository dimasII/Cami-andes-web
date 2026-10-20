"use client";

import { useState } from "react";
import Link from "next/link";
import { MorphIcon } from "../components/MorphIcon";
import { ArrowRight, Bird, Images, Landmark, Map as MapIcon, MountainSnow, Newspaper, Route, Users } from "lucide";
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
    imagen: "/img/provincias/abancay/muralla-china/04.jpg",
    alt: "Caminantes en el mirador de la Muralla China, Apurímac",
    cta: "Conocer al equipo",
  },
  {
    icon: MapIcon,
    tag: "Provincias",
    title: "Apurímac provincia por provincia",
    desc: "Las 7 provincias en el mapa: lugares, gastronomía, agricultura y vestimenta.",
    href: "/provincias/",
    imagen: "/img/provincias/andahuaylas/pacucha/03.jpg",
    alt: "Laguna de Pacucha rodeada de montañas en Andahuaylas",
    cta: "Explorar provincias",
  },
  {
    icon: Route,
    tag: "Itinerarios",
    title: "4 rutas culturales",
    desc: "Abancay, Andahuaylas y los circuitos norte y sur, día a día.",
    href: "/itinerarios/",
    imagen: "/img/provincias/abancay/pachachaca/02.jpg",
    alt: "Puente colonial de Pachachaca sobre el río Apurímac",
    cta: "Ver rutas",
  },
  {
    icon: Images,
    tag: "Galería",
    title: "Fotos de Apurímac",
    desc: "Caminos, paisajes y fiestas de la región.",
    href: "/galeria/",
    imagen: "/img/provincias/andahuaylas/pampachiri/01.jpg",
    alt: "Bosque de piedra de Pampachiri, Andahuaylas",
    cta: "Ver galería",
  },
  {
    icon: Newspaper,
    tag: "Blog",
    title: "Diario del proyecto",
    desc: "Avances, relatos y resultados del trabajo en Apurímac.",
    href: "/blog/",
    imagen: "/img/provincias/andahuaylas/sondor/01.jpg",
    alt: "Chullpas de Sóndor con el nevado al fondo, Andahuaylas",
    cta: "Leer el blog",
  },
];

const records = [
  {
    icon: MountainSnow,
    tag: "Lo más alto",
    title: "Nevado Ampay · 5 235 m",
    desc: "El techo del Santuario Nacional de Ampay, entre bosques de intimpas y lagunas de altura.",
    imagen: "/img/provincias/abancay/ampay/03.webp",
    alt: "Nevado Ampay cubierto de nieve entre pastizales de altura",
    href: "/provincias/#mapa-provincias",
    cta: "Ver en provincias",
  },
  {
    icon: Bird,
    tag: "Lo más profundo",
    title: "Cañón del Apurímac · 4 691 m",
    desc: "Uno de los cañones más profundos del planeta: miradores, vuelo de cóndores y puerta a Choquequirao.",
    imagen: "/img/provincias/abancay/canon-miradores/03.jpg",
    alt: "Mirador sobre el Cañón del Apurímac con el río al fondo",
    href: "/provincias/#mapa-provincias",
    cta: "Ver en provincias",
  },
  {
    icon: Landmark,
    tag: "El imperdible",
    title: "Choquequirao, la «cuna de oro»",
    desc: "Ciudadela inca entre los Andes y la ceja de selva, en caminata de 2 días desde Cachora.",
    imagen: "/img/provincias/abancay/choquequirao/01.webp",
    alt: "Andenes y edificios de la ciudadela inca de Choquequirao",
    href: "/provincias/#mapa-provincias",
    cta: "Ver en provincias",
  },
];

type TarjetaContenido = {
  icon: typeof Users;
  tag: string;
  title: string;
  desc: string;
  href: string;
  imagen: string;
  alt: string;
  cta: string;
};

function TarjetaEnlace({
  item,
  index,
  delay,
  className = "",
}: {
  item: TarjetaContenido;
  index: number;
  delay: number;
  className?: string;
}) {
  return (
    <Reveal delay={delay} className={`h-full ${className}`}>
      <Link
        href={item.href}
        aria-label={`${item.tag}: ${item.title}. ${item.cta}`}
        className="vapor group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/50 text-emerald-950 shadow-[0_24px_70px_rgba(11,40,20,0.12)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_36px_90px_rgba(11,40,20,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.imagen}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.06]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/75 via-emerald-950/5 to-transparent" />
          <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-emerald-950/40 px-3.5 py-2 text-[10px] uppercase tracking-[0.24em] text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <MorphIcon icon={item.icon} size={14} color="white" />
            {item.tag}
          </span>
          <span className="absolute bottom-4 right-5 text-[11px] tracking-[0.24em] text-white/60">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <h3 className="serif text-3xl leading-[.95] lg:text-[2.1rem]">
            {item.title}
          </h3>
          <p className="mt-4 text-base leading-8 text-emerald-950/70">
            {item.desc}
          </p>
          <span className="mt-auto inline-flex items-center gap-3 pt-6 text-[11px] uppercase tracking-[0.24em] text-emerald-800">
            {item.cta}
            <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-900/8 transition group-hover:bg-emerald-900 group-hover:text-white">
              <MorphIcon icon={ArrowRight} size={15} color="currentColor" />
            </span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

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
        {/* Fundido inferior: une el video con la sección clara sin corte brusco */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42vh] bg-[linear-gradient(to_bottom,transparent_0%,rgba(238,247,239,0.06)_28%,rgba(238,247,239,0.3)_55%,rgba(238,247,239,0.7)_80%,#eef7ef_100%)]" />

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
      <section id="extremos" className="ascend-light relative scroll-mt-24 overflow-hidden px-4 sm:px-8 py-36">
        <div className="mx-auto max-w-[1700px]">
          <Reveal className="max-w-4xl">
            <div className="text-[11px] uppercase tracking-[0.32em] text-emerald-900/70">
              Apurímac en sus extremos
            </div>
            <h2 className="serif mt-6 text-[clamp(2.5rem,6vw,5.5rem)] leading-[.9] text-emerald-950">
              Lo más alto, lo más profundo, lo imperdible.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-emerald-950/70">
              Tres hitos que explican la escala de la región: el techo nevado,
              el cañón que la parte en dos y la ciudadela que la corona.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3 lg:gap-8">
            {records.map((c, i) => (
              <TarjetaEnlace key={c.tag} item={c} index={i} delay={i * 0.12} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORA — la información principal, con redirección a cada sección */}
      <section id="explora" className="ascend-light relative scroll-mt-24 overflow-hidden px-4 sm:px-8 pb-36">
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

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-8">
            {secciones.map((s, i) => (
              <TarjetaEnlace
                key={s.tag}
                item={s}
                index={i}
                delay={Math.min(i * 0.06, 0.2)}
                className={`lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="ascend-light relative overflow-hidden px-4 sm:px-8 pb-36">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-emerald-900/70"><MorphIcon icon={MapIcon} size={18} color="var(--emerald)" />Territorio</div>
            <h2 className="serif text-[clamp(2.5rem,6vw,5rem)] leading-[.9] text-emerald-950">De Apurímac</h2>
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
            <Link href="/contacto/" className="mist-button inline-flex items-center gap-3 px-8 py-5 text-[11px] uppercase tracking-[0.24em]">Contactar<MorphIcon icon={ArrowRight} size={16} color="white" /></Link>
            <Link href="/blog/" className="rounded-full bg-white/8 px-8 py-5 text-[11px] uppercase tracking-[0.24em] text-white/70 backdrop-blur-3xl transition hover:bg-white/14">Leer el blog</Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Globe2,
  Mail,
  MapPin,
  MountainSnow,
  Users,
  Wheat,
} from "lucide";
import { MorphIcon } from "../../components/MorphIcon";
import FondoAura from "../../components/FondoAura";
import IntroLogo from "../../components/IntroLogo";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Nosotros | Camiñandes",
  description:
    "Conoce al equipo de Camiñandes: estudiantes de la Universidade de Santiago de Compostela y de la Universidad Nacional Micaela Bastidas de Apurímac unidos por el COIL.",
};

type Persona = {
  nombre: string;
  iniciales: string;
  email: string;
};

type Equipo = {
  nombre: string;
  pais: string;
  universidad: string;
  siglas: string;
  descripcion: string;
  personas: Persona[];
};

const EQUIPOS: Equipo[] = [
  {
    nombre: "Galicia",
    pais: "España",
    universidad: "Universidade de Santiago de Compostela",
    siglas: "USC",
    descripcion:
      "La mirada atlántica y la experiencia del Camino de Santiago, puestas al servicio de un relato compartido.",
    personas: [
      {
        nombre: "Sofía Pérez Cobas",
        iniciales: "SP",
        email: "sofia.perez.cobas@rai.usc.gal",
      },
      {
        nombre: "Fabiola Pulleiro Iglesias",
        iniciales: "FP",
        email: "fabiola.pulleiro@rai.usc.gal",
      },
      {
        nombre: "Noa Martínez Sanjurjo",
        iniciales: "NM",
        email: "noa.martinez.sanjurjo@rai.usc.es",
      },
    ],
  },
  {
    nombre: "Apurímac",
    pais: "Perú",
    universidad: "Universidad Nacional Micaela Bastidas de Apurímac",
    siglas: "UNAMBA",
    descripcion:
      "El territorio, las rutas y la memoria de las siete provincias andinas, contadas desde dentro.",
    personas: [
      {
        nombre: "Dimas Rogelio Prada Huamani",
        iniciales: "DP",
        email: "221184@unamba.edu.pe",
      },
      {
        nombre: "Giordano Jhosser Ticona Ortiz",
        iniciales: "GT",
        email: "212141@unamba.edu.pe",
      },
    ],
  },
];

const EJES = [
  {
    icon: MountainSnow,
    titulo: "Territorio y paisaje",
    texto:
      "Leemos el paisaje como patrimonio: montañas, cañones, lagunas y caminos que explican cómo se vive en cada lugar.",
  },
  {
    icon: BookOpen,
    titulo: "Memoria y oralidad",
    texto:
      "Recogemos relatos, nombres y saberes que pasan de una generación a otra y que no siempre aparecen en los libros.",
  },
  {
    icon: Users,
    titulo: "Fiesta y comunidad",
    texto:
      "Miramos las celebraciones, los mercados y la vida cotidiana como espacios donde una comunidad se reconoce.",
  },
  {
    icon: Wheat,
    titulo: "Futuro rural",
    texto:
      "Pensamos el turismo desde el respeto, el trabajo local y el cuidado de un territorio que queremos seguir habitando.",
  },
];

const CORREO_EQUIPO = EQUIPOS.flatMap((e) => e.personas.map((p) => p.email)).join(",");
const CORREO_HREF = `mailto:${CORREO_EQUIPO}?subject=${encodeURIComponent("Hola Camiñandes")}`;

const STATS = [
  { valor: "5", etiqueta: "personas" },
  { valor: "2", etiqueta: "universidades" },
  { valor: "7", etiqueta: "provincias" },
  { valor: "4", etiqueta: "rutas culturales" },
];

export default function NosotrosPage() {
  return (
    <>
      <IntroLogo />

      <div className="relative isolate overflow-hidden px-4 pb-24 pt-32 sm:px-8 sm:pb-36 sm:pt-36">
        <FondoAura />

        <div className="relative mx-auto max-w-6xl">
          {/* HERO */}
          <div className="grid gap-10 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.32em] text-emerald-900/80">
                Nosotros · COIL 2026
              </div>
              <h1 className="serif mt-6 text-[clamp(2.9rem,7vw,5.6rem)] leading-[.86] text-emerald-950">
                Dos orillas.
                <br />
                Un mismo camino.
              </h1>
              <p className="texto-lectura mt-6 max-w-xl">
                Somos un equipo de estudiantes de Apurímac y Galicia unidos por
                el programa COIL. Durante meses comparamos caminos, recogimos
                relatos y construimos esta web para compartir lo que encontramos.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#equipo"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-950 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white transition hover:-translate-y-0.5 hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  Conocer al equipo
                  <MorphIcon icon={ArrowRight} size={14} color="white" />
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-950/15 bg-white/55 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-emerald-950 backdrop-blur transition hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                >
                  Hablemos
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <figure className="relative overflow-hidden rounded-[2.5rem] border border-white/60 shadow-[0_30px_80px_rgba(11,40,20,0.22)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/provincias/abancay/muralla-china/04.jpg"
                  alt="Caminantes en el mirador de la Muralla China, Apurímac"
                  className="h-[26rem] w-full object-cover sm:h-[31rem]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/10 to-transparent" />

                <figcaption className="absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-4 text-white sm:inset-x-7 sm:bottom-7">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/65">
                      Camiñandes
                    </div>
                    <div className="serif mt-1 text-3xl leading-none sm:text-4xl">
                      Apurímac ↔ Galicia
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <Image
                      src="/logo.svg"
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain brightness-0 invert"
                    />
                    <div className="text-[10px] uppercase leading-4 tracking-[0.2em] text-white/80">
                      COIL
                      <br />
                      2026
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* CIFRAS */}
          <Reveal delay={0.2}>
            <div className="vapor mt-10 grid grid-cols-2 gap-4 rounded-[2rem] border border-white/60 p-5 text-emerald-950 sm:grid-cols-4 sm:p-6">
              {STATS.map((s) => (
                <div key={s.etiqueta} className="text-center">
                  <div className="serif text-4xl leading-none sm:text-5xl">
                    {s.valor}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-emerald-900/70">
                    {s.etiqueta}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* QUIÉNES SOMOS */}
          <Reveal className="mt-20">
            <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-14">
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-emerald-900/80">
                  Quiénes somos
                </div>
                <h2 className="serif mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[.92] text-emerald-950">
                  Una web hecha entre dos continentes.
                </h2>
              </div>

              <div>
                <p className="texto-lectura">
                  <strong>Camiñandes</strong> nace del encuentro entre
                  estudiantes de Apurímac (Perú) y Galicia (España) dentro del
                  programa COIL (Collaborative Online International Learning).
                  Lo que empezó como un intercambio virtual de relatos se
                  convirtió en un archivo vivo de caminos, paisajes y memorias.
                </p>
                <p className="texto-lectura mt-4">
                  Investigamos, fotografiamos y escribimos sobre los territorios
                  que habitamos: las siete provincias de Apurímac y el Camino de
                  Santiago. Esta web reúne ese trabajo en un mapa, cuatro
                  itinerarios culturales y una selección de fotografías.
                </p>

                <blockquote className="mt-7 rounded-[1.75rem] border-l-2 border-emerald-700 bg-white/45 p-5 sm:p-6">
                  <p className="serif text-2xl leading-snug text-emerald-950 sm:text-[1.7rem]">
                    “Del Camino de Santiago a los caminos andinos: camino,
                    memoria y comunidad a ambos lados del Atlántico.”
                  </p>
                </blockquote>

                <Link
                  href="/proyecto/"
                  className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-800 underline-offset-4 transition hover:text-emerald-950 hover:underline"
                >
                  Leer los objetivos del proyecto
                  <MorphIcon icon={ArrowUpRight} size={13} color="currentColor" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* EQUIPO */}
          <div id="equipo" className="mt-20 scroll-mt-32">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.3em] text-emerald-900/80">
                Equipo
              </div>
              <h2 className="serif mt-4 max-w-3xl text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[.92] text-emerald-950">
                Cinco personas, dos universidades.
              </h2>
              <p className="texto-lectura mt-4 max-w-2xl">
                Un grupo pequeño con una idea grande: que el camino se entienda
                como patrimonio compartido y no como una simple ruta de paso.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
                {EQUIPOS.map((equipo) => (
                  <section
                    key={equipo.nombre}
                    className="vapor rounded-[2rem] border border-white/60 p-6 text-emerald-950 sm:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.26em] text-emerald-900/70">
                          {equipo.pais}
                        </div>
                        <h3 className="serif mt-2 text-4xl leading-none">
                          {equipo.nombre}
                        </h3>
                      </div>
                      <span className="rounded-full border border-emerald-950/10 bg-white/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-emerald-900">
                        {equipo.siglas}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-emerald-950/80">
                      {equipo.universidad}
                    </p>
                    <p className="texto-lectura-sm mt-3">{equipo.descripcion}</p>

                    <ul className="mt-6 space-y-3">
                      {equipo.personas.map((persona) => (
                        <li
                          key={persona.email}
                          className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/50 p-3"
                        >
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-800 to-emerald-600 text-[11px] font-semibold tracking-[0.12em] text-white">
                            {persona.iniciales}
                          </span>
                          <div className="min-w-0">
                            <div className="font-semibold leading-tight">
                              {persona.nombre}
                            </div>
                            <a
                              href={`mailto:${persona.email}`}
                              className="mt-1 block truncate text-xs text-emerald-800 underline-offset-4 transition hover:text-emerald-950 hover:underline"
                            >
                              {persona.email}
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </Reveal>
          </div>

          {/* EJES */}
          <Reveal className="mt-20">
            <div className="text-[11px] uppercase tracking-[0.3em] text-emerald-900/80">
              Lo que nos mueve
            </div>
            <h2 className="serif mt-4 max-w-3xl text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[.92] text-emerald-950">
              Cuatro preguntas que guían el proyecto.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {EJES.map((eje) => (
                <div
                  key={eje.titulo}
                  className="rounded-[1.75rem] border border-white/60 bg-white/45 p-6 transition hover:-translate-y-1 hover:bg-white/70"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald-900/10 text-emerald-800">
                    <MorphIcon icon={eje.icon} size={19} color="currentColor" />
                  </span>
                  <h3 className="serif mt-4 text-2xl leading-tight">
                    {eje.titulo}
                  </h3>
                  <p className="texto-lectura-sm mt-2">{eje.texto}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* CONTACTO */}
          <Reveal className="mt-20">
            <section
              id="contacto"
              className="vapor scroll-mt-32 overflow-hidden rounded-[2.5rem] border border-white/60 text-emerald-950"
            >
              <div className="grid lg:grid-cols-[1.15fr_.85fr]">
                <div className="p-6 sm:p-9">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-emerald-900/80">
                    Contacto
                  </div>
                  <h2 className="serif mt-3 text-4xl leading-none sm:text-5xl">
                    Hablemos.
                  </h2>
                  <p className="texto-lectura mt-4 max-w-xl">
                    ¿Quieres sumarte al proyecto, compartir una historia del
                    camino o coordinar una actividad con las comunidades?
                    Escríbenos: respondemos entre Apurímac y Galicia.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={CORREO_HREF}
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-950 px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                    >
                      <MorphIcon icon={Mail} size={15} color="white" />
                      Escribir al equipo
                    </a>
                    <a
                      href="https://github.com/dimasII/Cami-andes-web"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-950/15 bg-white/60 px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] text-emerald-950 transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                    >
                      Ver el repositorio
                      <MorphIcon icon={ArrowUpRight} size={14} color="currentColor" />
                    </a>
                  </div>
                </div>

                <div className="border-t border-emerald-950/10 bg-emerald-950/[.04] p-6 sm:p-9 lg:border-l lg:border-t-0">
                  <ul className="space-y-5">
                    <li className="flex gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-900/10 text-emerald-800">
                        <MorphIcon icon={Mail} size={15} color="currentColor" />
                      </span>
                      <div className="min-w-0 text-sm leading-6">
                        <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-900/65">
                          Correo
                        </div>
                        <a
                          href="mailto:221184@unamba.edu.pe"
                          className="block truncate text-emerald-950 underline-offset-4 hover:underline"
                        >
                          221184@unamba.edu.pe
                        </a>
                        <a
                          href="mailto:sofia.perez.cobas@rai.usc.gal"
                          className="block truncate text-emerald-950 underline-offset-4 hover:underline"
                        >
                          sofia.perez.cobas@rai.usc.gal
                        </a>
                      </div>
                    </li>

                    <li className="flex gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-900/10 text-emerald-800">
                        <MorphIcon icon={MapPin} size={15} color="currentColor" />
                      </span>
                      <div className="text-sm leading-6">
                        <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-900/65">
                          Dónde estamos
                        </div>
                        Apurímac, Perú · Galicia, España
                      </div>
                    </li>

                    <li className="flex gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-900/10 text-emerald-800">
                        <MorphIcon icon={Globe2} size={15} color="currentColor" />
                      </span>
                      <div className="text-sm leading-6">
                        <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-900/65">
                          Programa
                        </div>
                        COIL 2026 · USC × UNAMBA
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </div>
    </>
  );
}

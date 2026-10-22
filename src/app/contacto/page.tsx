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
import RetratoEquipo from "../../components/RetratoEquipo";
import Reveal from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Nosotros | CamiñAndes",
  description:
    "Conoce al equipo de CamiñAndes: estudiantes de la Universidade de Santiago de Compostela y de la Universidad Nacional Micaela Bastidas de Apurímac unidos por el COIL y por el diseño de rutas culturales en Apurímac.",
};

type Persona = {
  nombre: string;
  iniciales: string;
  email: string;
  universidad: string;
  siglas: "USC" | "UNAMBA";
  pais: string;
  enfoque: string;
  bio: string;
  foto: string;
};

// Los retratos se guardan en public/img/equipo/.
// Si un archivo no existe, la tarjeta muestra el monograma de la persona.
const EQUIPO: Persona[] = [
  {
    nombre: "Sofía Pérez Cobas",
    iniciales: "SP",
    email: "sofia.perez.cobas@rai.usc.gal",
    universidad: "Universidade de Santiago de Compostela",
    siglas: "USC",
    pais: "España",
    enfoque: "Relatos y conexiones",
    bio: "Le interesa tender puentes entre el Camino de Santiago y los caminos andinos: qué historias se comparten, qué se transforma y qué queda en el territorio.",
    foto: "/img/equipo/sofia-perez.jpg",
  },
  {
    nombre: "Fabiola Pulleiro Iglesias",
    iniciales: "FP",
    email: "fabiola.pulleiro@rai.usc.gal",
    universidad: "Universidade de Santiago de Compostela",
    siglas: "USC",
    pais: "España",
    enfoque: "Patrimonio y comunidad",
    bio: "Mira el patrimonio desde las personas que lo habitan: las fiestas, los oficios y las formas de vida que hacen que un lugar sea mucho más que un paisaje.",
    foto: "/img/equipo/fabiola-pulleiro.jpg",
  },
  {
    nombre: "Noa Martínez Sanjurjo",
    iniciales: "NM",
    email: "noa.martinez.sanjurjo@rai.usc.es",
    universidad: "Universidade de Santiago de Compostela",
    siglas: "USC",
    pais: "España",
    enfoque: "Diseño y comunicación",
    bio: "Convierte la investigación del equipo en una experiencia visual clara y cercana, cuidando que cada historia llegue sin ruido y con intención.",
    foto: "/img/equipo/noa-martinez.jpg",
  },
  {
    nombre: "Dimas Rogelio Prada Huamani",
    iniciales: "DP",
    email: "221184@unamba.edu.pe",
    universidad: "Universidad Nacional Micaela Bastidas de Apurímac",
    siglas: "UNAMBA",
    pais: "Perú",
    enfoque: "Desarrollo y mapas",
    bio: "Traduce rutas, fotografías y relatos en mapas interactivos y en una web pensada para recorrer Apurímac con curiosidad y respeto.",
    foto: "/img/equipo/dimas-prada.jpg",
  },
  {
    nombre: "Giordano Jhosser Ticona Ortiz",
    iniciales: "GT",
    email: "212141@unamba.edu.pe",
    universidad: "Universidad Nacional Micaela Bastidas de Apurímac",
    siglas: "UNAMBA",
    pais: "Perú",
    enfoque: "Rutas y territorio",
    bio: "Conecta los paisajes y las voces de Apurímac con quienes quieren descubrirlos, buscando que el viaje deje algo bueno en cada comunidad.",
    foto: "/img/equipo/giordano-ticona.jpg",
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

const CORREO_EQUIPO = EQUIPO.map((p) => p.email).join(",");
const CORREO_HREF = `mailto:${CORREO_EQUIPO}?subject=${encodeURIComponent("Hola CamiñAndes")}`;

const STATS = [
  { valor: "5", etiqueta: "integrantes" },
  { valor: "2", etiqueta: "universidades" },
  { valor: "7", etiqueta: "provincias" },
  { valor: "4", etiqueta: "rutas culturales" },
];

function TarjetaEquipo({ persona }: { persona: Persona }) {
  const esUsc = persona.siglas === "USC";

  return (
    <article className="group flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-white/45 p-3 shadow-[0_18px_50px_rgba(11,40,20,0.08)] transition duration-500 hover:-translate-y-1 hover:border-white/90 hover:bg-white/70 hover:shadow-[0_28px_70px_rgba(11,40,20,0.14)]">
      <RetratoEquipo
        src={persona.foto}
        alt={`Retrato de ${persona.nombre}`}
        iniciales={persona.iniciales}
        siglas={persona.siglas}
      />

      <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
        <div className="flex items-center justify-between gap-3">
          <span
            title={persona.universidad}
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] ${
              esUsc
                ? "border-emerald-900/15 bg-emerald-900/[.06] text-emerald-950/70"
                : "border-amber-800/20 bg-amber-700/[.08] text-amber-950/75"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                esUsc ? "bg-emerald-700" : "bg-amber-700"
              }`}
            />
            {persona.siglas}
          </span>
          <span className="text-[9px] uppercase tracking-[0.24em] text-emerald-900/45">
            {persona.pais}
          </span>
        </div>

        <h3 className="serif mt-3 text-[1.7rem] leading-[1.03] text-emerald-950 sm:text-[1.8rem]">
          {persona.nombre}
        </h3>
        <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-emerald-700">
          {persona.enfoque}
        </p>
        <p className="texto-lectura-sm mt-3 flex-1">{persona.bio}</p>

        <a
          href={`mailto:${persona.email}`}
          title={`Escribir a ${persona.nombre}`}
          className="mt-5 flex min-w-0 items-center gap-2 border-t border-emerald-950/10 pt-4 text-[11px] text-emerald-800 transition hover:text-emerald-950"
        >
          <MorphIcon icon={Mail} size={13} color="currentColor" />
          <span className="min-w-0 flex-1 truncate">{persona.email}</span>
        </a>
      </div>
    </article>
  );
}

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
              <p className="serif mt-4 text-xl leading-tight text-emerald-800">
                «Entre raíces y montañas»
              </p>
              <p className="texto-lectura mt-5 max-w-xl">
                Somos un equipo de estudiantes de Apurímac y Galicia unidos por
                el programa COIL. Durante meses comparamos caminos, recogimos
                relatos y diseñamos CamiñAndes: una marca de turismo cultural e
                interpretativo para descubrir Apurímac desde sus paisajes, su
                patrimonio y sus comunidades.
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
                      CamiñAndes
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
                  <strong>CamiñAndes</strong> nace del encuentro entre
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
                <p className="texto-lectura mt-4">
                  Sobre esa base diseñamos el producto turístico CamiñAndes:
                  una marca cercana, auténtica, respetuosa, sostenible y
                  exploradora, pensada para viajeros que quieren comprender el
                  territorio y no solo visitarlo. El diseño incluye el naming, el
                  lema, el público objetivo, la estructura de la experiencia, el
                  storytelling y el narrador digital Yachaq, además de los cuatro
                  itinerarios.
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
          <div id="equipo" className="mt-24 scroll-mt-32">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-900/80">
                  Equipo
                </span>
                <span className="h-px w-16 bg-emerald-950/15" />
                <span className="text-[10px] uppercase tracking-[0.24em] text-emerald-900/45">
                  05 integrantes
                </span>
              </div>

              <div className="mt-5 flex items-end justify-between gap-6">
                <div>
                  <h2 className="serif max-w-3xl text-[clamp(2.4rem,5vw,4.4rem)] leading-[.86] text-emerald-950">
                    Cinco integrantes,
                    <br />
                    <span className="text-emerald-800">
                      dos universidades.
                    </span>
                  </h2>
                  <p className="texto-lectura mt-5 max-w-2xl">
                    Detrás de CamiñAndes hay cinco estudiantes de la
                    Universidade de Santiago de Compostela y de la Universidad
                    Nacional Micaela Bastidas de Apurímac que investigaron,
                    escribieron, fotografiaron y diseñaron el proyecto. Estas son
                    sus miradas.
                  </p>
                </div>
                <div className="serif hidden shrink-0 pb-2 text-[7rem] leading-none text-emerald-950/[.07] lg:block">
                  05
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-emerald-900/[.05] px-3.5 py-2 text-[10px] uppercase tracking-[0.18em] text-emerald-950/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-700" />
                  USC · Galicia · 3 integrantes
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-800/20 bg-amber-700/[.07] px-3.5 py-2 text-[10px] uppercase tracking-[0.18em] text-amber-950/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-700" />
                  UNAMBA · Apurímac · 2 integrantes
                </span>
              </div>
            </Reveal>

            <div className="mt-9 flex flex-wrap justify-center gap-5">
              {EQUIPO.map((persona, indice) => (
                <Reveal
                  key={persona.email}
                  className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
                  delay={0.05 * indice}
                >
                  <TarjetaEquipo persona={persona} />
                </Reveal>
              ))}
            </div>
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

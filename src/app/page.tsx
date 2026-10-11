import Link from "next/link";
import { MorphIcon } from "../components/MorphIcon";
import { ArrowRight, Brain, Footprints, Map as MapIcon, Users } from "lucide";
import MapboxMap from "../components/MapboxMap";
import Reveal from "../components/Reveal";

const pilares = [
  {
    icon: Footprints,
    tag: "Camino",
    title: "El caminar como práctica cultural",
    desc: "Peregrinaje jacobeo y qhapaq ñan andino: dos formas de habitar el territorio a pie.",
  },
  {
    icon: Brain,
    tag: "Memoria",
    title: "Historias que conectan",
    desc: "Relatos orales, archivos y memorias que tienden puentes entre Galicia y Apurímac.",
  },
  {
    icon: Users,
    tag: "Comunidad",
    title: "Crear juntos",
    desc: "Estudiantes y docentes creando a ambos lados del Atlántico.",
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="ascend-mid relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        {/* Blobs flotantes */}
        <div className="canopy organic left-[6%] top-[16%] hidden h-[280px] w-[280px] md:block"></div>
        <div
          className="canopy leaf right-[8%] top-[12%] hidden h-[380px] w-[380px] md:block"
          style={{ animationDuration: "14s" }}
        ></div>
        <div
          className="canopy organic bottom-[10%] left-[16%] hidden h-[220px] w-[220px] lg:block"
          style={{ animationDuration: "12s" }}
        ></div>

        <div className="relative z-10 max-w-5xl rounded-[4rem] px-6 py-14 text-center text-white sm:px-10">
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

      {/* PILARES */}
      <section className="ascend-light relative overflow-hidden px-8 py-36">
        <div className="mx-auto max-w-[1700px]">
          <Reveal className="max-w-4xl">
            <div className="text-[11px] uppercase tracking-[0.32em] text-emerald-900/70">
              Tres pilares
            </div>
            <h2 className="serif mt-6 text-[clamp(2.5rem,6vw,5.5rem)] leading-[.9] text-emerald-950">
              Humedad moldeada por la altura.
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {pilares.map((c, i) => (
              <Reveal key={c.tag} delay={i * 0.12}>
                <article
                  className={`vapor p-10 text-emerald-950 ${
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
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="ascend-light relative overflow-hidden px-8 pb-36">
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
              Explora el punto de partida en Abancay, Apurímac. Mueve el mapa,
              haz zoom y haz clic en el marcador.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="map-shell">
              <MapboxMap />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="ascend-mid relative overflow-hidden px-8 py-32">
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

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Backpack,
  BadgeCheck,
  BookOpen,
  Brain,
  CalendarDays,
  Camera,
  CircleCheck,
  Clock,
  Compass,
  Footprints,
  Globe2,
  Handshake,
  HeartHandshake,
  Landmark,
  Languages,
  Leaf,
  Map,
  MapPin,
  Megaphone,
  Mountain,
  MountainSnow,
  Music,
  Palette,
  Quote,
  Route,
  ScanEye,
  Smartphone,
  Sparkles,
  Sprout,
  Target,
  Ticket,
  Users,
  Utensils,
} from "lucide";
import FondoAura from "../../components/FondoAura";
import Reveal from "../../components/Reveal";
import { MorphIcon } from "../../components/MorphIcon";
import ExperienciaProyecto, {
  type MomentoExperiencia,
} from "../../components/ExperienciaProyecto";

export const metadata: Metadata = {
  title: "Proyecto | CamiñAndes",
  description:
    "CamiñAndes, diseño del producto turístico del proyecto COIL Galicia–Apurímac: naming, público, experiencia interpretativa, storytelling, Yachaq y cuatro itinerarios por Apurímac.",
};

const NAV = [
  { id: "origen", label: "Origen" },
  { id: "marca", label: "Marca" },
  { id: "publico", label: "Público" },
  { id: "experiencia", label: "Experiencia" },
  { id: "relato", label: "Relato" },
  { id: "valor", label: "Valor" },
  { id: "rutas", label: "Rutas" },
  { id: "estado", label: "Estado" },
];

const PERSONALIDAD = [
  "Cercana",
  "Auténtica",
  "Respetuosa",
  "Sostenible",
  "Exploradora",
];

const PALETA = [
  { nombre: "Terracota", color: "#b4552d", uso: "Tierra y materiales" },
  { nombre: "Ocre", color: "#c08a3e", uso: "Caminos y cosecha" },
  { nombre: "Verde montaña", color: "#3f5d45", uso: "Naturaleza" },
  { nombre: "Azul profundo", color: "#1f4e63", uso: "Cielo y altura" },
  { nombre: "Turquesa", color: "#2e8b8b", uso: "Aguas andinas" },
];

const OBJETIVOS = [
  {
    icon: Route,
    texto:
      "Comparar el Camino de Santiago y los caminos andinos como patrimonio vivo.",
  },
  {
    icon: Camera,
    texto: "Recoger testimonios, fotos y relatos de ambas regiones.",
  },
  {
    icon: Globe2,
    texto: "Crear una web colaborativa como producto final del COIL.",
  },
  {
    icon: Languages,
    texto: "Fomentar la competencia intercultural y digital.",
  },
];

const EJES = [
  { icon: Mountain, texto: "Territorio y paisaje" },
  { icon: BookOpen, texto: "Memoria y oralidad" },
  { icon: Music, texto: "Fiesta y ritualidad" },
  { icon: Sprout, texto: "Sostenibilidad y futuro rural" },
];

const STATS = [
  { valor: "51 %", texto: "tiene entre 25 y 44 años", icon: Users },
  { valor: "96 %", texto: "realizó actividades culturales", icon: Landmark },
  { valor: "98 %", texto: "realizó actividades gastronómicas", icon: Utensils },
  { valor: "52 %", texto: "visitó espacios naturales", icon: MountainSnow },
];

const MERCADOS = [
  { pais: "Chile", valor: 22 },
  { pais: "Estados Unidos", valor: 20 },
  { pais: "Ecuador", valor: 9 },
  { pais: "Brasil", valor: 6 },
  { pais: "Colombia", valor: 6 },
  { pais: "España", valor: 5 },
];

const FORMAS = [
  { label: "Viajó solo", valor: 40 },
  { label: "En pareja", valor: 23 },
  { label: "Con amigos o familia sin niños", valor: 24 },
];

const CANALES = [
  { icon: Users, valor: "46 %", texto: "recomendaciones de familiares y amigos" },
  { icon: Smartphone, valor: "46 %", texto: "vídeos cortos como formato inspirador" },
  { icon: Ticket, valor: "67 %", texto: "contrató los servicios por separado" },
];

const MOMENTOS: MomentoExperiencia[] = [
  {
    titulo: "Descubrir el territorio",
    etiqueta: "Primera mirada",
    texto:
      "Primera aproximación al destino mediante recorridos por ciudades, pueblos, paisajes y espacios de interés. El visitante se sitúa en el territorio y reconoce su diversidad cultural y natural.",
    imagen: "/img/provincias/abancay/muralla-china/04.jpg",
    alt: "Caminantes y guía en el mirador de la Muralla China, Apurímac",
  },
  {
    titulo: "Interpretar la memoria y el paisaje",
    etiqueta: "Lectura del lugar",
    texto:
      "Visitas guiadas y actividades interpretativas para comprender la historia, el patrimonio arqueológico, la arquitectura, la biodiversidad y la relación entre el entorno y las formas de vida locales.",
    imagen: "/img/provincias/andahuaylas/sondor/01.jpg",
    alt: "Muros de piedra del complejo arqueológico de Sóndor con el nevado al fondo",
  },
  {
    titulo: "Aprender de las comunidades",
    etiqueta: "Saberes locales",
    texto:
      "Encuentros y actividades participativas vinculadas a la agricultura, la artesanía, la gastronomía y otros saberes locales, organizados conjuntamente con sus participantes y respetando sus tiempos y decisiones.",
    imagen: "/img/provincias/andahuaylas/pacucha/05.jpg",
    alt: "Campos de cultivo y viviendas junto a la laguna de Pacucha, Andahuaylas",
  },
  {
    titulo: "Compartir la cultura y la vida cotidiana",
    etiqueta: "Vida local",
    texto:
      "Experiencias gastronómicas, visitas a mercados y comidas compartidas que acercan al visitante a los productos, las costumbres y las relaciones sociales del territorio.",
    imagen: "/img/provincias/andahuaylas/pacucha/04.jpg",
    alt: "Botes de pesca y paseo sobre la laguna de Pacucha, Andahuaylas",
  },
  {
    titulo: "Reflexionar y recordar",
    etiqueta: "Cierre del viaje",
    texto:
      "Momentos de intercambio y cierre para poner en común lo aprendido y valorar la conservación del patrimonio. Como recuerdo, un elemento simbólico vinculado a la identidad de cada itinerario.",
    imagen: "/img/provincias/abancay/ampay/01.jpg",
    alt: "Persona sentada frente a la laguna del Santuario Nacional de Ampay",
  },
];

const VALORES = [
  {
    icon: Footprints,
    titulo: "Patrimonio vivo",
    texto:
      "El patrimonio no son solo monumentos: también son las personas, artesanos, agricultores y comunidades que mantienen vivos sus conocimientos y prácticas cotidianas.",
  },
  {
    icon: Sparkles,
    titulo: "Experiencia transformadora",
    texto:
      "Un recorrido emocional y de aprendizaje en el que el visitante no es un observador pasivo: descubre, aprende, escucha y participa.",
  },
  {
    icon: Map,
    titulo: "Integración de recursos",
    texto:
      "Patrimonio arqueológico e histórico, naturaleza, gastronomía, artesanía y cultura local se combinan para mostrar las relaciones entre paisajes, historia y formas de vida.",
  },
  {
    icon: HeartHandshake,
    titulo: "Participación comunitaria respetuosa",
    texto:
      "Colaboración con habitantes, productores y artesanos mediante acuerdos previos, capacidad de decisión y una parte justa de los beneficios de la actividad turística.",
  },
  {
    icon: Leaf,
    titulo: "Destino por descubrir y turismo sostenible",
    texto:
      "Apurímac como alternativa a los circuitos más convencionales, con experiencias de menor escala y mayor interacción local, siempre que las rutas sean viables.",
  },
  {
    icon: BookOpen,
    titulo: "Compromiso con la conservación",
    texto:
      "Educación patrimonial, respeto por las tradiciones y reducción del impacto ambiental, comunicando con claridad accesos, disponibilidad y necesidades de coordinación.",
  },
];

const RUTAS = [
  {
    nombre: "Abancay",
    identidad: "Paisaje, historia y vida cotidiana",
    duracion: "5 días / 4 noches",
    href: "/itinerarios/abancay/",
    imagen: "/img/provincias/abancay/pachachaca/03.jpg",
    alt: "Puente colonial de Pachachaca sobre el río Apurímac",
  },
  {
    nombre: "Andahuaylas",
    identidad: "Saberes y prácticas locales",
    duracion: "5 días / 4 noches",
    href: "/itinerarios/andahuaylas/",
    imagen: "/img/provincias/andahuaylas/pacucha/03.jpg",
    alt: "Laguna de Pacucha rodeada de montañas, Andahuaylas",
  },
  {
    nombre: "Circuito Norte",
    identidad: "Interpretación del paisaje y su patrimonio",
    duracion: "5 días",
    href: "/itinerarios/circuito-norte/",
    imagen: "/img/provincias/chincheros/cocharcas/01.webp",
    alt: "Santuario de la Virgen de Cocharcas, Chincheros",
  },
  {
    nombre: "Circuito Sur",
    identidad: "Historias, tradiciones y paisajes de altura",
    duracion: "5 días",
    href: "/itinerarios/circuito-sur/",
    imagen: "/img/provincias/grau/mamara/01.jpg",
    alt: "Iglesia colonial de Mamara, Grau",
  },
];

const PENDIENTES = [
  "Servicios incluidos en cada ruta",
  "Costes y precio final",
  "Horarios y condiciones de visita",
  "Acuerdos con comunidades y prestadores",
  "Colaboraciones institucionales",
];

const PIEZAS = [
  { icon: BadgeCheck, texto: "Logotipo" },
  { icon: Megaphone, texto: "Carteles" },
  { icon: BookOpen, texto: "Folleto" },
  { icon: Smartphone, texto: "Redes" },
];

function Rotulo({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white/55 px-3.5 py-2 text-[10px] uppercase tracking-[0.28em] text-emerald-900/75 backdrop-blur">
      {children}
    </span>
  );
}

export default function Proyecto() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#071b13] text-white">
        <Image
          src="/img/provincias/abancay/muralla-china/01.jpg"
          alt="Sendero de piedra sobre la cresta de la Muralla China Andina, Apurímac"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(46,139,139,0.28),transparent_38%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#04120c]/92 via-[#061b13]/80 to-[#08221a]/95" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#eef7ef]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-32 pt-36 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:pb-36 lg:pt-44">
          <div>
            <div className="condense condense-1 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/75 backdrop-blur">
              <MorphIcon icon={Sparkles} size={13} color="#e0a87c" />
              Diseño del producto turístico · COIL Galicia–Apurímac
            </div>

            <h1 className="serif condense condense-2 mt-7 text-[clamp(3.4rem,9vw,7.2rem)] leading-[.84]">
              Camiñ<span className="text-[#e0a87c]">Andes</span>
            </h1>
            <p className="serif condense condense-3 mt-3 text-[clamp(1.5rem,3vw,2.3rem)] leading-tight text-[#f0d5bf]">
              «Entre raíces y montañas»
            </p>
            <p className="condense condense-3 mt-6 max-w-xl text-lg leading-9 text-white/72">
              Una marca de turismo cultural e interpretativo que invita a
              recorrer Apurímac desde una perspectiva participativa: el paisaje,
              el patrimonio y las comunidades son partes inseparables de la
              experiencia.
            </p>

            <div className="condense condense-4 mt-8 flex flex-wrap gap-3">
              <a
                href="#origen"
                className="mist-button inline-flex items-center gap-3 px-7 py-4 text-[11px] uppercase tracking-[0.22em]"
              >
                Recorrer el diseño
                <MorphIcon icon={ArrowRight} size={15} color="white" />
              </a>
              <Link
                href="/itinerarios/"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white/75 backdrop-blur transition hover:bg-white/12 hover:text-white"
              >
                Ver itinerarios
                <MorphIcon icon={ArrowUpRight} size={15} color="currentColor" />
              </Link>
            </div>

            <dl className="condense condense-4 mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/12 pt-6">
              {[
                ["04", "rutas"],
                ["07", "provincias"],
                ["05", "momentos"],
              ].map(([valor, label]) => (
                <div key={label}>
                  <dt className="serif text-3xl leading-none text-white">
                    {valor}
                  </dt>
                  <dd className="mt-1 text-[10px] uppercase tracking-[0.26em] text-white/45">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="condense condense-4 relative hidden lg:block">
            <div className="relative ml-auto aspect-[4/5] w-[80%] overflow-hidden rounded-[3rem] border border-white/15 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <Image
                src="/img/provincias/andahuaylas/sondor/01.jpg"
                alt="Complejo arqueológico de Sóndor con el nevado al fondo, Andahuaylas"
                fill
                sizes="(max-width: 1024px) 0px, 38vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04120c]/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 right-5 flex flex-col items-end gap-2 text-right text-white">
                <MorphIcon icon={Landmark} size={18} color="white" />
                <span className="text-[10px] uppercase tracking-[0.24em] text-white/70">
                  Sóndor · Andahuaylas
                </span>
              </div>
            </div>

            <div className="absolute -bottom-7 left-0 aspect-[4/5] w-[38%] overflow-hidden rounded-[2rem] border-4 border-[#071b13] shadow-2xl">
              <Image
                src="/img/provincias/abancay/ampay/04.jpg"
                alt="Catarata entre vegetación del Santuario Nacional de Ampay, Abancay"
                fill
                sizes="(max-width: 1024px) 0px, 18vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -right-3 top-8 rounded-3xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-2xl">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/55">
                <MorphIcon icon={MapPin} size={13} color="white" />
                Apurímac
              </div>
              <p className="serif mt-1 text-2xl leading-none text-white">
                Perú
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAV INTERNA */}
      <div className="sticky top-[7.5rem] z-40 mx-auto mt-4 w-[calc(100%-2rem)] max-w-5xl lg:-mt-10">
        <nav
          aria-label="Secciones del proyecto"
          className="flex items-center gap-1.5 overflow-x-auto rounded-full border border-emerald-950/10 bg-[#f4faf5]/85 p-2 shadow-[0_18px_50px_rgba(11,40,20,0.12)] backdrop-blur-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 rounded-full px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-emerald-950/65 transition hover:bg-emerald-950 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <main>
        <FondoAura />

        {/* ORIGEN */}
        <section
          id="origen"
          className="relative scroll-mt-40 px-4 py-20 sm:px-8 sm:py-28"
        >
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-start">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_30px_90px_rgba(11,40,20,0.18)] lg:sticky lg:top-40">
                <Image
                  src="/img/provincias/abancay/muralla-china/05.jpg"
                  alt="Sendero serpenteante de la Muralla China Andina sobre la cresta, Apurímac"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04120c]/90 via-[#04120c]/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <span className="text-[10px] uppercase tracking-[0.26em] text-white/60">
                    Metodología COIL
                  </span>
                  <p className="serif mt-3 text-3xl leading-[1.02]">
                    Comparar caminos, recoger relatos y diseñar una forma de
                    descubrir Apurímac.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.18em]">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur">
                      En línea
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur">
                      En terreno
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur">
                      Producto
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <Rotulo>
                <MorphIcon icon={Footprints} size={13} color="currentColor" />
                Origen y objetivos
              </Rotulo>
              <h2 className="serif mt-5 text-[clamp(2.4rem,5vw,4.2rem)] leading-[.9] text-emerald-950">
                Un proyecto colaborativo que se vuelve producto.
              </h2>
              <p className="texto-lectura mt-5 max-w-2xl">
                CamiñAndes nace del encuentro entre la Universidade de Santiago
                de Compostela (Galicia) y la Universidad Nacional Micaela
                Bastidas de Apurímac, en el marco del programa COIL. El punto de
                partida es la comparación entre el Camino de Santiago y los
                caminos andinos; el resultado, una propuesta de turismo cultural
                e interpretativo.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.9rem] border border-white/60 bg-white/55 p-5 backdrop-blur sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-900/8 text-emerald-800">
                      <MorphIcon icon={Target} size={18} color="currentColor" />
                    </span>
                    <h3 className="serif text-2xl leading-none">Objetivos</h3>
                  </div>
                  <ul className="mt-5 space-y-4">
                    {OBJETIVOS.map((objetivo) => (
                      <li key={objetivo.texto} className="flex gap-3">
                        <MorphIcon
                          icon={objetivo.icon}
                          size={16}
                          color="var(--emerald)"
                        />
                        <span className="text-sm leading-6 text-emerald-950/75">
                          {objetivo.texto}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.9rem] border border-white/60 bg-white/55 p-5 backdrop-blur sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-900/8 text-emerald-800">
                      <MorphIcon icon={Compass} size={18} color="currentColor" />
                    </span>
                    <h3 className="serif text-2xl leading-none">
                      Ejes temáticos
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-4">
                    {EJES.map((eje, i) => (
                      <li key={eje.texto} className="flex items-center gap-3">
                        <span className="text-[10px] tabular-nums text-emerald-900/35">
                          0{i + 1}
                        </span>
                        <MorphIcon
                          icon={eje.icon}
                          size={16}
                          color="var(--emerald)"
                        />
                        <span className="text-sm leading-6 text-emerald-950/75">
                          {eje.texto}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-4 rounded-[1.9rem] border border-emerald-900/12 bg-emerald-950/[0.045] p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-950 text-white">
                  <MorphIcon icon={ScanEye} size={17} color="white" />
                </span>
                <p className="text-sm leading-7 text-emerald-950/70">
                  La metodología combina el trabajo colaborativo en línea entre
                  ambas universidades, la investigación sobre el terreno y el
                  diseño de un producto turístico cultural e interpretativo.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MARCA */}
        <section
          id="marca"
          className="relative scroll-mt-40 px-4 py-10 sm:px-8 sm:py-16"
        >
          <Reveal className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[3rem] bg-[#082018] text-white shadow-[0_40px_120px_rgba(6,28,18,0.28)]">
              <Image
                src="/img/provincias/andahuaylas/sondor/02.jpg"
                alt="Muros y andenes del complejo arqueológico de Sóndor, Andahuaylas"
                fill
                sizes="100vw"
                className="object-cover opacity-[0.13]"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(46,139,139,0.22),transparent_45%)]" />

              <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.12fr_.88fr] lg:p-14">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-2 text-[10px] uppercase tracking-[0.28em] text-white/60">
                    <MorphIcon icon={Palette} size={13} color="#e0a87c" />
                    Naming y branding
                  </span>
                  <h2 className="serif mt-6 text-[clamp(2.8rem,7vw,5.6rem)] leading-[.84]">
                    Camiñ<span className="text-[#e0a87c]">Andes</span>
                  </h2>
                  <p className="serif mt-3 text-[clamp(1.35rem,2.5vw,1.9rem)] leading-tight text-[#f0d5bf]">
                    «Entre raíces y montañas»
                  </p>
                  <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                    El nombre fusiona <em>camiño</em>, en gallego, como
                    referencia al Camino de Santiago, y <em>Andes</em>, como
                    alusión al territorio peruano. Simboliza el encuentro entre
                    Galicia y Apurímac a través de la colaboración entre ambas
                    universidades, unidas por el interés común en el patrimonio,
                    la cultura y el territorio.
                  </p>
                  <p className="mt-4 max-w-xl text-base leading-8 text-white/70">
                    El lema refleja la relación entre el entorno natural, la
                    memoria cultural y las comunidades que mantienen vivo el
                    territorio. La huella que deja el viaje refuerza una
                    experiencia transformadora: el visitante no solo conoce
                    lugares, también aprende, establece vínculos y se lleva una
                    comprensión más profunda de Apurímac.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.07] p-5 backdrop-blur">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-white/45">
                      <MorphIcon icon={Quote} size={14} color="#e0a87c" />
                      Mensaje de marca
                    </div>
                    <p className="serif mt-3 text-2xl leading-[1.2] text-white">
                      Viajar para descubrir el territorio, comprender su cultura
                      y conectar con las personas que lo habitan.
                    </p>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.04] p-5">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-white/45">
                      Personalidad
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {PERSONALIDAD.map((rasgo) => (
                        <li
                          key={rasgo}
                          className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/80"
                        >
                          {rasgo}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.04] p-5">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-white/45">
                      Se aplica a
                    </div>
                    <ul className="mt-3 grid grid-cols-2 gap-2">
                      {PIEZAS.map((pieza) => (
                        <li
                          key={pieza.texto}
                          className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-xs text-white/70"
                        >
                          <MorphIcon
                            icon={pieza.icon}
                            size={14}
                            color="#e0a87c"
                          />
                          {pieza.texto}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative grid gap-8 border-t border-white/10 p-7 sm:p-10 lg:grid-cols-[1.05fr_.95fr] lg:p-14">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.24em] text-white/45">
                    Paleta cromática
                  </div>
                  <div className="mt-4 grid grid-cols-5 gap-2">
                    {PALETA.map((tono) => (
                      <div key={tono.nombre} className="group">
                        <div
                          className="h-24 rounded-2xl transition duration-500 group-hover:-translate-y-1.5 sm:h-28"
                          style={{ backgroundColor: tono.color }}
                        />
                        <p className="mt-2 text-[10px] leading-4 text-white/75">
                          {tono.nombre}
                        </p>
                        <p className="text-[9px] leading-4 text-white/35">
                          {tono.uso}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-sm leading-7 text-white/60">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-white/45">
                    Inspiración visual
                  </div>
                  <p className="mt-4">
                    Textiles andinos, caminos, perfiles de montaña y elementos
                    gráficos del paisaje y el patrimonio de Apurímac, utilizados
                    respetando su contexto cultural y evitando la apropiación
                    descontextualizada de símbolos locales.
                  </p>
                  <p className="mt-3">
                    La identidad se aplica al logotipo, los carteles
                    promocionales, los folletos informativos y las publicaciones
                    en redes sociales, manteniendo una imagen coherente con los
                    valores del proyecto.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* PÚBLICO */}
        <section
          id="publico"
          className="relative scroll-mt-40 px-4 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <Rotulo>
                <MorphIcon icon={Users} size={13} color="currentColor" />
                Público objetivo
              </Rotulo>
              <h2 className="serif mt-5 text-[clamp(2.4rem,5vw,4.2rem)] leading-[.9] text-emerald-950">
                Viajeros que quieren comprender, no solo visitar.
              </h2>
              <p className="texto-lectura mt-5">
                CamiñAndes se dirige a turistas nacionales e internacionales
                interesados en descubrir Apurímac mediante experiencias
                culturales, gastronómicas y naturales, más allá de los circuitos
                convencionales. El segmento prioritario son adultos jóvenes y de
                mediana edad, con capacidad de gasto media o media-alta, que
                valoran el aprendizaje cultural, la autenticidad, la
                sostenibilidad y el contacto directo con el territorio.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-[.94fr_1.06fr]">
              <Reveal>
                <div className="relative min-h-[23rem] overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_rgba(11,40,20,0.18)] lg:h-full">
                  <Image
                    src="/img/provincias/andahuaylas/pacucha/04.jpg"
                    alt="Botes sobre la laguna de Pacucha, Andahuaylas"
                    fill
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04120c]/90 via-[#04120c]/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                    <span className="text-[10px] uppercase tracking-[0.26em] text-white/60">
                      Segmento prioritario
                    </span>
                    <div className="mt-2">
                      <span className="serif block text-[clamp(4rem,9vw,6.4rem)] leading-[.8]">
                        25–44
                      </span>
                      <span className="mt-2 block text-sm uppercase tracking-[0.2em] text-white/65">
                        años
                      </span>
                    </div>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
                      El 51 % de los turistas encuestados tiene entre 25 y 44
                      años. Es un perfil de referencia, no una exclusión.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {STATS.map((dato, i) => (
                  <Reveal key={dato.valor} delay={i * 0.05}>
                    <div className="flex h-full flex-col justify-between rounded-[1.9rem] border border-white/60 bg-white/55 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/80 sm:p-6">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#b4552d]/10 text-[#9a4525]">
                        <MorphIcon
                          icon={dato.icon}
                          size={18}
                          color="currentColor"
                        />
                      </span>
                      <div className="mt-6">
                        <div className="serif text-[clamp(2.4rem,4vw,3.4rem)] leading-none text-emerald-950">
                          {dato.valor}
                        </div>
                        <p className="mt-2 text-xs leading-5 text-emerald-950/65">
                          {dato.texto}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <Reveal>
                <div className="h-full rounded-[1.9rem] border border-white/60 bg-white/55 p-5 backdrop-blur sm:p-6">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-emerald-900/55">
                    <MorphIcon icon={Globe2} size={15} color="currentColor" />
                    Mercados de origen
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {MERCADOS.map((mercado) => (
                      <li
                        key={mercado.pais}
                        className="flex items-center justify-between gap-3 border-b border-emerald-950/6 pb-2 text-sm last:border-0 last:pb-0"
                      >
                        <span className="text-emerald-950/75">{mercado.pais}</span>
                        <span className="tabular-nums text-emerald-900/50">
                          {mercado.valor} %
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <div className="h-full rounded-[1.9rem] border border-white/60 bg-white/55 p-5 backdrop-blur sm:p-6">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-emerald-900/55">
                    <MorphIcon icon={Backpack} size={15} color="currentColor" />
                    Forma de viajar
                  </div>
                  <div className="mt-5 space-y-4">
                    {FORMAS.map((forma) => (
                      <div key={forma.label}>
                        <div className="flex items-baseline justify-between gap-3 text-xs">
                          <span className="leading-5 text-emerald-950/70">
                            {forma.label}
                          </span>
                          <span className="tabular-nums text-emerald-950">
                            {forma.valor} %
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-emerald-950/8">
                          <div
                            className="h-full rounded-full bg-[#b4552d]"
                            style={{ width: `${forma.valor}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-[11px] leading-5 text-emerald-950/50">
                    También el 35 % practicó trekking o senderismo.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="h-full rounded-[1.9rem] border border-white/60 bg-white/55 p-5 backdrop-blur sm:p-6">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-emerald-900/55">
                    <MorphIcon icon={Smartphone} size={15} color="currentColor" />
                    Canales
                  </div>
                  <ul className="mt-4 space-y-4">
                    {CANALES.map((canal) => (
                      <li key={canal.texto} className="flex items-start gap-3">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-900/8 text-emerald-800">
                          <MorphIcon
                            icon={canal.icon}
                            size={14}
                            color="currentColor"
                          />
                        </span>
                        <p className="text-xs leading-5 text-emerald-950/65">
                          <strong className="text-base text-emerald-950">
                            {canal.valor}
                          </strong>{" "}
                          {canal.texto}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal className="mt-6 grid gap-4 rounded-[1.9rem] border border-emerald-900/12 bg-white/40 p-5 text-sm leading-7 text-emerald-950/65 sm:p-6 lg:grid-cols-2">
              <p>
                Como referencia general, el gasto medio declarado por turista en
                Perú fue de 1.232 USD (1.097 euros), una cifra del conjunto del
                viaje que no define el presupuesto de CamiñAndes. El precio final
                deberá construirse desde los costes de transporte, alojamiento,
                alimentación, actividades y remuneración justa de los
                colaboradores locales.
              </p>
              <p>
                Solo el 11 % de los encuestados había realizado turismo
                comunitario en Perú: la propuesta busca un equilibrio entre
                atractivos reconocibles y experiencias de mayor profundidad
                cultural. La duración se ajusta a las actividades previstas, con
                una orientación de entre cuatro días y una semana.
              </p>
            </Reveal>

            <p className="mt-4 max-w-3xl text-xs leading-6 text-emerald-950/45">
              Las cifras provienen de los datos de referencia del documento de
              diseño del producto. El itinerario de Andahuaylas cita además un
              informe específico sobre el visitante de Cusco, con porcentajes
              propios; cada conjunto se mantiene en su contexto.
            </p>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section
          id="experiencia"
          className="relative scroll-mt-40 px-4 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <Rotulo>
                <MorphIcon icon={Compass} size={13} color="currentColor" />
                Estructura de la experiencia
              </Rotulo>
              <h2 className="serif mt-5 text-[clamp(2.4rem,5vw,4.2rem)] leading-[.9] text-emerald-950">
                Cinco momentos, una misma forma de caminar.
              </h2>
              <p className="texto-lectura mt-5">
                No es una secuencia cerrada, sino una estructura flexible que se
                adapta a cada itinerario, combinando el conocimiento del
                patrimonio, la interpretación del paisaje y el acercamiento a las
                comunidades locales.
              </p>
            </Reveal>

            <Reveal className="mt-10" delay={0.05}>
              <ExperienciaProyecto momentos={MOMENTOS} />
            </Reveal>

            <Reveal
              className="mt-5 flex items-start gap-4 rounded-[1.9rem] border border-emerald-900/12 bg-emerald-950/[0.045] p-5 sm:p-6"
              delay={0.08}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-950 text-white">
                <MorphIcon icon={Handshake} size={18} color="white" />
              </span>
              <p className="text-sm leading-7 text-emerald-950/70">
                <strong className="text-emerald-950">
                  La participación comunitaria es un principio transversal.
                </strong>{" "}
                Las actividades se diseñan y coordinan con las comunidades
                anfitrionas, respetando sus tiempos, decisiones y formas de
                compartir sus conocimientos. La participación es voluntaria y
                acordada previamente, para generar beneficios locales y evitar
                representaciones superficiales o descontextualizadas de la
                cultura.
              </p>
            </Reveal>
          </div>
        </section>

        {/* RELATO Y YACHAQ */}
        <section
          id="relato"
          className="relative scroll-mt-40 overflow-hidden bg-[#071b13] px-4 py-24 text-white sm:px-8 sm:py-28"
        >
          <Image
            src="/img/provincias/abancay/ampay/03.webp"
            alt="Nevado Ampay entre pastizales de altura, Abancay"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#04120c]/92 via-[#061b13]/80 to-[#0a2a1f]/90" />
          <div className="moss-grid" />

          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.12fr_.88fr] lg:items-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3.5 py-2 text-[10px] uppercase tracking-[0.28em] text-white/60">
                <MorphIcon icon={Quote} size={13} color="#e0a87c" />
                Storytelling
              </span>
              <h2 className="serif mt-6 text-[clamp(2.8rem,6vw,5.4rem)] leading-[.86]">
                El llamado de las montañas
              </h2>
              <blockquote className="mt-7 max-w-2xl border-l-2 border-[#e0a87c]/60 pl-6 text-lg leading-9 text-white/78">
                <p>
                  Hay lugares que se visitan y lugares que te reciben. Entre las
                  montañas de Apurímac, los caminos, los tejidos, los sabores y
                  las historias de sus habitantes conservan una memoria que sigue
                  viva. CamiñAndes invita a recorrer este territorio, escuchar
                  sus voces y descubrir la relación entre naturaleza, cultura y
                  comunidad. Porque conocer Apurímac es mucho más que contemplar
                  sus paisajes: es acercarse a las personas y las tradiciones que
                  le dan vida.
                </p>
              </blockquote>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/50">
                Este relato es la base de la comunicación del producto en la web,
                las redes sociales y los materiales promocionales.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[2.5rem] border border-white/15 bg-white/[0.06] p-6 backdrop-blur-2xl sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#e0a87c]/15 text-[#f0c8a8]">
                    <MorphIcon icon={Brain} size={19} color="currentColor" />
                  </span>
                  <h3 className="serif text-3xl leading-none">Yachaq</h3>
                  <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-white/55">
                    Narrador digital · IA
                  </span>
                </div>

                <div
                  className="mt-6 flex h-10 items-end gap-1.5"
                  aria-hidden="true"
                >
                  {[38, 64, 48, 82, 32, 70, 92, 54, 74, 42, 60, 88].map(
                    (altura, i) => (
                      <span
                        key={i}
                        className="w-1.5 animate-pulse rounded-full bg-gradient-to-t from-[#2e8b8b] to-[#e0a87c] motion-reduce:animate-none"
                        style={{
                          height: `${altura}%`,
                          animationDelay: `${i * 110}ms`,
                          animationDuration: "1.8s",
                        }}
                      />
                    )
                  )}
                </div>

                <p className="mt-6 text-base leading-8 text-white/72">
                  Yachaq es un narrador digital, planteado como aplicación de
                  inteligencia artificial, que acompañaría al visitante durante
                  la experiencia con relatos, audios y contenidos interpretativos
                  sobre el patrimonio cultural y natural de Apurímac. Su función
                  es despertar la curiosidad y facilitar la interpretación,
                  complementando las explicaciones de los guías y, sobre todo,
                  las voces y los testimonios de las propias comunidades.
                </p>

                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/10 bg-black/15 p-4">
                  <MorphIcon
                    icon={Languages}
                    size={16}
                    color="#e0a87c"
                  />
                  <p className="text-xs leading-6 text-white/55">
                    Su diseño y contenidos deberán desarrollarse y validarse con
                    personas conocedoras de la cultura local, prestando especial
                    atención al uso adecuado de la lengua quechua y al contexto
                    cultural de las historias compartidas.
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/35">
                  <MorphIcon icon={AudioLines} size={14} color="#e0a87c" />
                  Relatos · audios · curiosidades
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* VALOR */}
        <section
          id="valor"
          className="relative scroll-mt-40 px-4 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <Reveal className="max-w-3xl">
                <Rotulo>
                  <MorphIcon icon={Sparkles} size={13} color="currentColor" />
                  Valor diferencial
                </Rotulo>
                <h2 className="serif mt-5 text-[clamp(2.4rem,5vw,4.2rem)] leading-[.9] text-emerald-950">
                  Seis razones para caminar Apurímac.
                </h2>
                <p className="texto-lectura mt-5">
                  CamiñAndes relaciona paisaje, memoria, patrimonio, producción y
                  vida cotidiana para ofrecer experiencias que van más allá de la
                  visita convencional.
                </p>
              </Reveal>
              <Reveal
                className="hidden select-none lg:block"
                delay={0.08}
              >
                <span className="serif block text-[9rem] leading-[.7] text-emerald-950/8">
                  06
                </span>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {VALORES.map((valor, i) => (
                <Reveal key={valor.titulo} delay={Math.min(i * 0.05, 0.25)}>
                  <div className="group relative h-full overflow-hidden rounded-[1.9rem] border border-white/60 bg-white/50 p-6 backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:border-[#b4552d]/25 hover:bg-white/85">
                    <span className="absolute right-5 top-5 text-[10px] tabular-nums tracking-[0.2em] text-emerald-900/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-900/8 text-emerald-800 transition duration-500 group-hover:bg-[#b4552d] group-hover:text-white">
                      <MorphIcon
                        icon={valor.icon}
                        size={21}
                        color="currentColor"
                      />
                    </span>
                    <h3 className="serif mt-5 text-2xl leading-[1.05] text-emerald-950">
                      {valor.titulo}
                    </h3>
                    <p className="texto-lectura-sm mt-3">{valor.texto}</p>
                    <span className="mt-5 block h-px w-10 bg-[#b4552d]/40 transition-all duration-500 group-hover:w-20" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* RUTAS */}
        <section
          id="rutas"
          className="relative scroll-mt-40 px-4 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <Rotulo>
                <MorphIcon icon={Route} size={13} color="currentColor" />
                Cuatro itinerarios
              </Rotulo>
              <h2 className="serif mt-5 text-[clamp(2.4rem,5vw,4.2rem)] leading-[.9] text-emerald-950">
                Una identidad común, cuatro formas de descubrir.
              </h2>
              <p className="texto-lectura mt-5">
                Cada ruta adapta la estructura común a las particularidades de su
                territorio, su paisaje, su patrimonio y las personas que lo
                habitan.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {RUTAS.map((ruta, i) => (
                <Reveal key={ruta.nombre} delay={Math.min(i * 0.06, 0.2)}>
                  <Link
                    href={ruta.href}
                    className="group relative block aspect-[16/11] overflow-hidden rounded-[2.5rem] bg-emerald-950 shadow-[0_28px_80px_rgba(11,40,20,0.18)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_40px_100px_rgba(11,40,20,0.24)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                  >
                    <Image
                      src={ruta.imagen}
                      alt={ruta.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-[900ms] ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04120c]/92 via-[#04120c]/25 to-[#04120c]/5" />
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 p-6">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3.5 py-2 text-[10px] uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">
                        <MorphIcon icon={CalendarDays} size={13} color="white" />
                        {ruta.duracion}
                      </span>
                      <span className="text-[10px] tabular-nums tracking-[0.24em] text-white/45">
                        {String(i + 1).padStart(2, "0")} / 04
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-8">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.24em] text-white/55">
                          {ruta.identidad}
                        </p>
                        <h3 className="serif mt-2 text-[clamp(2rem,4vw,3.4rem)] leading-[.9]">
                          {ruta.nombre}
                        </h3>
                        <span className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/75">
                          Ver itinerario
                          <MorphIcon
                            icon={ArrowUpRight}
                            size={14}
                            color="white"
                          />
                        </span>
                      </div>
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition duration-500 group-hover:bg-white group-hover:text-emerald-950">
                        <MorphIcon
                          icon={ArrowRight}
                          size={18}
                          color="currentColor"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <p className="mt-5 flex items-start gap-2 text-xs leading-6 text-emerald-950/45">
              <MorphIcon
                icon={Clock}
                size={14}
                color="currentColor"
                className="mt-0.5 shrink-0"
              />
              El Circuito Sur comprende cinco días de recorrido. Los
              itinerarios son propuestas de diseño y requieren confirmación
              antes de reservar.
            </p>
          </div>
        </section>

        {/* ESTADO */}
        <section
          id="estado"
          className="relative scroll-mt-40 px-4 pb-24 sm:px-8"
        >
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/60 bg-white/55 shadow-[0_30px_90px_rgba(11,40,20,0.12)] backdrop-blur">
            <div className="grid lg:grid-cols-[1.05fr_.95fr]">
              <div className="p-7 sm:p-10">
                <Rotulo>
                  <MorphIcon icon={Mountain} size={13} color="currentColor" />
                  Estado del proyecto
                </Rotulo>
                <h2 className="serif mt-5 text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[.9] text-emerald-950">
                  Propuestas en construcción.
                </h2>
                <p className="texto-lectura mt-4">
                  Los itinerarios son propuestas de diseño, no productos listos
                  para reservar. Antes de comercializarlos deben concretarse los
                  servicios, los costes, los horarios y las condiciones de
                  participación.
                </p>
                <p className="texto-lectura mt-3">
                  La organización prioriza el respeto por el patrimonio, el
                  cumplimiento de las normas de los espacios naturales y una
                  relación justa con los colaboradores locales, procurando que la
                  actividad turística genere beneficios para el territorio.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Servicios",
                    "Costes",
                    "Horarios",
                    "Condiciones",
                    "Colaboraciones",
                  ].map((etiqueta) => (
                    <span
                      key={etiqueta}
                      className="rounded-full border border-emerald-950/10 bg-white/55 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-emerald-900/60"
                    >
                      {etiqueta}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/itinerarios/"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-950 px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                  >
                    Ver los itinerarios
                    <MorphIcon icon={ArrowRight} size={14} color="white" />
                  </Link>
                  <Link
                    href="/contacto/#contacto"
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-950/15 bg-white/60 px-6 py-3.5 text-[11px] uppercase tracking-[0.2em] text-emerald-950 transition hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                  >
                    <MorphIcon icon={Globe2} size={14} color="currentColor" />
                    Contactar
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden bg-[#082018] p-7 text-white sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(46,139,139,0.28),transparent_50%)]" />
                <div className="relative">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-white/45">
                    <MorphIcon icon={BadgeCheck} size={14} color="currentColor" />
                    Antes de comercializar
                  </div>
                  <ul className="mt-5 space-y-3">
                    {PENDIENTES.map((pendiente) => (
                      <li
                        key={pendiente}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/72"
                      >
                        <MorphIcon
                          icon={Clock}
                          size={15}
                          color="#e0a87c"
                          className="shrink-0"
                        />
                        {pendiente}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#e0a87c]/25 bg-[#e0a87c]/10 p-4">
                    <MorphIcon
                      icon={CircleCheck}
                      size={16}
                      color="#f0c8a8"
                      className="mt-0.5 shrink-0"
                    />
                    <p className="text-xs leading-6 text-white/60">
                      Las colaboraciones con municipalidades, DIRCETUR, SERNANP,
                      el Ministerio de Cultura y los agentes locales son
                      propuestas pendientes de negociación y confirmación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-6 text-emerald-950/45">
            Diseño del producto turístico CamiñAndes · Proyecto COIL
            Galicia–Apurímac · 2026
          </p>
        </section>
      </main>
    </div>
  );
}

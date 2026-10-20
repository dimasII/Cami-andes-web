import { Church, Laptop, Mountain, PartyPopper, Soup, Sprout } from "lucide";
import { MorphIcon } from "../../components/MorphIcon";
import FondoAura from "../../components/FondoAura";

const fotos = [
  { t: "Camino de Santiago", d: "Galicia, España", icon: Church },
  { t: "Valle del Apurímac", d: "Perú", icon: Mountain },
  { t: "Encuentro virtual COIL", d: "Sesiones online", icon: Laptop },
  { t: "Fiesta local", d: "Cultura viva", icon: PartyPopper },
  { t: "Gastronomía", d: "Sabores de ambos mundos", icon: Soup },
  { t: "Naturaleza", d: "Paisajes que caminan", icon: Sprout },
];

export default function Galeria() {
  return (
    <div className="relative isolate overflow-hidden px-4 pb-24 pt-32 sm:px-8 sm:pb-36 sm:pt-36">
      <FondoAura />
      <div className="relative mx-auto max-w-5xl">
        <h1 className="serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[.9] text-emerald-950">
          Galería
        </h1>
        <p className="texto-lectura mt-4 max-w-2xl">
          Imágenes de los caminos, paisajes y encuentros que unen Apurímac y
          Galicia. Las fotos definitivas se irán sumando a medida que avance el
          proyecto.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fotos.map((f) => (
            <figure
              key={f.t}
              className="vapor group overflow-hidden rounded-[2rem] border border-white/50 text-emerald-950 transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(11,40,20,0.15)]"
            >
              <div className="flex h-44 items-center justify-center bg-emerald-950/5 text-emerald-800 transition duration-500 group-hover:bg-emerald-950/10">
                <MorphIcon icon={f.icon} size={44} color="currentColor" />
              </div>
              <figcaption className="p-5">
                <p className="serif text-2xl leading-tight">{f.t}</p>
                <p className="mt-1 text-sm leading-6 text-emerald-950/70">{f.d}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

import FondoAura from "../../components/FondoAura";

const posts = [
  {
    fecha: "Oct 2026",
    titulo: "Arranca el COIL Camiñandes",
    resumen: "Presentación del proyecto, equipos y calendario de trabajo.",
  },
  {
    fecha: "Nov 2026",
    titulo: "Historias del camino",
    resumen: "Primer intercambio de relatos entre Apurímac y Galicia.",
  },
  {
    fecha: "Dic 2026",
    titulo: "Producto final colaborativo",
    resumen: "Publicación de la web y presentación de resultados.",
  },
];

export default function Blog() {
  return (
    <div className="relative isolate overflow-hidden px-4 pb-24 pt-32 sm:px-8 sm:pb-36 sm:pt-36">
      <FondoAura />
      <div className="relative mx-auto max-w-3xl">
        <h1 className="serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[.9] text-emerald-950">
          Blog del proyecto
        </h1>
        <p className="texto-lectura mt-4">
          Diario de avances del COIL: lo que vamos descubriendo, compartiendo y
          construyendo entre Apurímac y Galicia.
        </p>
        <div className="mt-10 space-y-6">
          {posts.map((p) => (
            <article
              key={p.titulo}
              className="vapor rounded-[2rem] border border-white/50 p-6 text-emerald-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(11,40,20,0.12)] sm:p-8"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-800">
                {p.fecha}
              </p>
              <h2 className="serif mt-2 text-3xl leading-tight">{p.titulo}</h2>
              <p className="texto-lectura mt-2">{p.resumen}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

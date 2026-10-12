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
    <div className="mx-auto max-w-3xl px-5 pb-16 pt-32 sm:px-6 sm:pt-36">
      <h1 className="text-3xl font-bold">Blog del proyecto</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300">
        Diario de avances del COIL.
      </p>
      <div className="mt-8 space-y-6">
        {posts.map((p) => (
          <article key={p.titulo} className="rounded-2xl border p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              {p.fecha}
            </p>
            <h2 className="mt-1 text-xl font-bold">{p.titulo}</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {p.resumen}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

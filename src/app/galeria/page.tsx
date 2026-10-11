const fotos = [
  { t: "Camino de Santiago", d: "Galicia, España", emoji: "⛪" },
  { t: "Valle del Apurímac", d: "Perú", emoji: "🏔️" },
  { t: "Encuentro virtual COIL", d: "Sesiones online", emoji: "💻" },
  { t: "Fiesta local", d: "Cultura viva", emoji: "🎉" },
  { t: "Gastronomía", d: "Sabores de ambos mundos", emoji: "🍲" },
  { t: "Naturaleza", d: "Paisajes que caminan", emoji: "🌿" },
];

export default function Galeria() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold">Galería</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300">
        Sustituye estas tarjetas por tus fotos reales en{" "}
        <code className="rounded bg-black/5 px-1">public/</code>.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fotos.map((f) => (
          <figure
            key={f.t}
            className="overflow-hidden rounded-2xl border shadow-sm"
          >
            <div className="flex h-40 items-center justify-center bg-zinc-100 text-5xl dark:bg-zinc-900">
              {f.emoji}
            </div>
            <figcaption className="p-4">
              <p className="font-semibold">{f.t}</p>
              <p className="text-sm text-zinc-500">{f.d}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

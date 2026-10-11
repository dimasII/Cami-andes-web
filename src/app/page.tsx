import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-b from-emerald-50 to-white px-6 py-20 text-center dark:from-zinc-900 dark:to-black">
        <p className="mb-4 inline-block rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700">
          Proyecto COIL · 2026
        </p>
        <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Camiñandes: caminando entre Apurímac y Galicia
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-300">
          Un intercambio cultural y académico sobre caminos, memoria,
          territorio e identidad. Del Camino de Santiago a los caminos andinos.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/proyecto/"
            className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Conoce el proyecto
          </Link>
          <Link
            href="/galeria/"
            className="rounded-full border px-6 py-3 text-sm font-semibold hover:bg-black/5"
          >
            Ver galería
          </Link>
        </div>
      </section>

      {/* 3 PILARES */}
      <section className="mx-auto grid max-w-5xl gap-6 px-6 py-16 sm:grid-cols-3">
        {[
          {
            t: "🥾 Camino",
            d: "El caminar como práctica cultural: peregrinaje jacobeo y qhapaq ñan andino.",
          },
          {
            t: "🧠 Memoria",
            d: "Historias orales, archivos y relatos que conectan Galicia y Apurímac.",
          },
          {
            t: "🤝 Comunidad",
            d: "Estudiantes y docentes creando juntos, a ambos lados del Atlántico.",
          },
        ].map((c) => (
          <article
            key={c.t}
            className="rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="mb-2 text-xl font-bold">{c.t}</h2>
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {c.d}
            </p>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-2xl bg-zinc-950 p-10 text-center text-white">
          <h2 className="text-2xl font-bold">¿Quieres participar?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-300">
            Escríbenos desde la página de contacto o explora el blog con los
            avances del proyecto.
          </p>
          <Link
            href="/contacto/"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Contactar
          </Link>
        </div>
      </section>
    </div>
  );
}

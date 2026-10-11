export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-center text-sm text-zinc-500 sm:flex-row sm:text-left">
        <p>
          <strong className="text-zinc-800 dark:text-zinc-100">Camiñandes</strong>{" "}
          — COIL Apurímac (Perú) · Galicia (España)
        </p>
        <p>Camino, memoria y comunidad · 2026</p>
      </div>
    </footer>
  );
}

export default function Proyecto() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-16 pt-32 sm:px-6 sm:pt-36">
      <h1 className="text-3xl font-bold">El proyecto</h1>
      <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
        <strong>Camiñandes</strong> nace del encuentro entre estudiantes de
        Apurímac (Perú) y Galicia (España) dentro del programa COIL
        (Collaborative Online International Learning).
      </p>
      <h2 className="mt-10 text-xl font-bold">Objetivos</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-300">
        <li>Comparar el Camino de Santiago y los caminos andinos como patrimonio vivo.</li>
        <li>Recoger testimonios, fotos y relatos de ambas regiones.</li>
        <li>Crear una web colaborativa como producto final del COIL.</li>
        <li>Fomentar la competencia intercultural y digital.</li>
      </ul>
      <h2 className="mt-10 text-xl font-bold">Ejes temáticos</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-zinc-600 dark:text-zinc-300">
        <li>Territorio y paisaje</li>
        <li>Memoria y oralidad</li>
        <li>Fiesta y ritualidad</li>
        <li>Sostenibilidad y futuro rural</li>
      </ol>
    </div>
  );
}

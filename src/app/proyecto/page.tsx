import FondoAura from "../../components/FondoAura";

export default function Proyecto() {
  return (
    <div className="relative isolate overflow-hidden px-4 pb-24 pt-32 sm:px-8 sm:pb-36 sm:pt-36">
      <FondoAura />
      <div className="relative mx-auto max-w-3xl">
        <h1 className="serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[.9] text-emerald-950">
          El proyecto
        </h1>
        <p className="texto-lectura mt-5">
          <strong>Camiñandes</strong> nace del encuentro entre estudiantes de
          Apurímac (Perú) y Galicia (España) dentro del programa COIL
          (Collaborative Online International Learning).
        </p>

        <section className="vapor mt-10 rounded-[2rem] border border-white/50 p-6 text-emerald-950 sm:p-8">
          <h2 className="serif text-3xl leading-tight">Objetivos</h2>
          <ul className="texto-lectura mt-4 list-disc space-y-2 pl-6">
            <li>Comparar el Camino de Santiago y los caminos andinos como patrimonio vivo.</li>
            <li>Recoger testimonios, fotos y relatos de ambas regiones.</li>
            <li>Crear una web colaborativa como producto final del COIL.</li>
            <li>Fomentar la competencia intercultural y digital.</li>
          </ul>
        </section>

        <section className="vapor mt-6 rounded-[2rem] border border-white/50 p-6 text-emerald-950 sm:p-8">
          <h2 className="serif text-3xl leading-tight">Ejes temáticos</h2>
          <ol className="texto-lectura mt-4 list-decimal space-y-2 pl-6">
            <li>Territorio y paisaje</li>
            <li>Memoria y oralidad</li>
            <li>Fiesta y ritualidad</li>
            <li>Sostenibilidad y futuro rural</li>
          </ol>
        </section>
      </div>
    </div>
  );
}

import { Mail } from "lucide";
import { MorphIcon } from "../../components/MorphIcon";
import FondoAura from "../../components/FondoAura";

export default function Contacto() {
  return (
    <div className="relative isolate overflow-hidden px-4 pb-24 pt-32 sm:px-8 sm:pb-36 sm:pt-36">
      <FondoAura />
      <div className="relative mx-auto max-w-xl">
        <h1 className="serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[.9] text-emerald-950">
          Contacto
        </h1>
        <p className="texto-lectura mt-4">
          Escríbenos para sumarte al proyecto, compartir una historia del camino
          o coordinar una actividad con las comunidades.
        </p>

        <div className="vapor mt-8 rounded-[2rem] border border-white/50 p-6 text-emerald-950 sm:p-8">
          <p className="flex items-center gap-3 text-base">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-900/10 text-emerald-800">
              <MorphIcon icon={Mail} size={18} color="currentColor" />
            </span>
            <span>
              Email del proyecto:{" "}
              <a
                className="font-semibold text-emerald-800 underline underline-offset-4 hover:text-emerald-950"
                href="mailto:info@caminandes.example"
              >
                info@caminandes.example
              </a>
            </span>
          </p>
          <p className="mt-4 text-sm leading-6 text-emerald-950/70">
            Cambia este email por el real en{" "}
            <code className="rounded bg-emerald-950/5 px-1.5 py-0.5">src/app/contacto/page.tsx</code>
          </p>
          <a
            href="mailto:info@caminandes.example"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-950 px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-emerald-900"
          >
            <MorphIcon icon={Mail} size={15} color="white" />
            Escribir email
          </a>
        </div>
      </div>
    </div>
  );
}

import { Mail } from "lucide";
import { MorphIcon } from "../../components/MorphIcon";

export default function Contacto() {
  return (
    <div className="mx-auto max-w-xl px-5 pb-16 pt-32 sm:px-6 sm:pt-36">
      <h1 className="text-3xl font-bold">Contacto</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-300">
        En hosting compartido no hay backend Node.js, así que usa un formulario
        externo (Formspree, Google Forms) o tu email.
      </p>
      <div className="mt-8 rounded-2xl border p-6">
        <p className="flex items-center gap-2 text-sm">
          <MorphIcon icon={Mail} size={16} color="currentColor" />
          <span>
            Email del proyecto:{" "}
            <a
              className="font-semibold text-emerald-700 underline"
              href="mailto:info@caminandes.example"
            >
              info@caminandes.example
            </a>
          </span>
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          Cambia este email por el real en{" "}
          <code>src/app/contacto/page.tsx</code>
        </p>
        <a
          href="mailto:info@caminandes.example"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          <MorphIcon icon={Mail} size={15} color="white" />
          Escribir email
        </a>
      </div>
    </div>
  );
}

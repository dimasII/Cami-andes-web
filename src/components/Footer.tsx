import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contacto-footer" className="ascend-deep earth relative overflow-hidden px-4 py-16 text-white sm:px-8 sm:py-20">
      <div className="moss-grid"></div>

      <div className="relative z-10 mx-auto max-w-[1700px]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/logo.svg"
                alt="Logotipo Camiñandes"
                width={52}
                height={52}
                className="h-13 w-13 rounded-full bg-white/10 object-contain p-1 brightness-0 invert"
              />
              <div className="text-[11px] uppercase tracking-[0.34em] text-white/40">
                Camiñandes · COIL 2026
              </div>
            </div>
            <h2 className="serif mt-6 text-[clamp(2.5rem,5vw,4.5rem)] leading-[.9]">
              Caminando entre Apurímac y Galicia.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/65">
              Del Camino de Santiago a los caminos andinos: camino, memoria y
              comunidad a ambos lados del Atlántico.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-[3rem] bg-white/6 p-6 backdrop-blur-3xl sm:p-8">
              <div className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                Territorios
              </div>
              <div className="mt-4 text-3xl font-semibold">
                Apurímac · Galicia
              </div>
            </div>
            <Link
              href="/contacto/"
              className="block rounded-[3rem] bg-white/6 p-6 backdrop-blur-3xl sm:p-8 transition hover:bg-white/10"
            >
              <div className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                Participa
              </div>
              <div className="mt-4 text-3xl font-semibold">Escríbenos →</div>
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/90">
          <div>Camiñandes — COIL Apurímac (Perú) · Galicia (España)</div>
          <div className="flex gap-5 text-[11px] uppercase tracking-[0.28em]">
            <span>Camino</span>
            <span>Memoria</span>
            <span>Comunidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

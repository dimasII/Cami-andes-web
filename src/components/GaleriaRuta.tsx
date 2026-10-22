import Image from "next/image";
import type { ImagenRuta } from "../lib/itinerarios";

/**
 * Galería visual de una ruta. La primera imagen ocupa un bloque grande y el
 * resto se reparte al costado o debajo según el ancho de pantalla.
 */
export default function GaleriaRuta({ imagenes }: { imagenes: ImagenRuta[] }) {
  if (imagenes.length === 0) return null;

  return (
    <section aria-labelledby="galeria-ruta">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-[11px] uppercase tracking-[0.32em] text-emerald-900/80">
            Galería
          </div>
          <h2
            id="galeria-ruta"
            className="serif mt-3 text-4xl leading-none sm:text-5xl"
          >
            La ruta en imágenes
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-emerald-950/65">
          Una mirada a los lugares que forman parte del recorrido.
        </p>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
        {imagenes.map((imagen, i) => (
          <figure
            key={imagen.src}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/50 bg-emerald-950 shadow-[0_24px_70px_rgba(11,40,20,0.12)] ${
              i === 0 ? "sm:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <div
              className={`relative ${
                i === 0
                  ? "aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[26rem]"
                  : "aspect-square"
              }`}
            >
              <Image
                src={imagen.src}
                alt={imagen.alt}
                fill
                sizes={
                  i === 0
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                }
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04120c]/85 via-[#04120c]/10 to-transparent" />
              {imagen.leyenda && (
                <figcaption className="absolute inset-x-0 bottom-0 p-4 text-[10px] uppercase tracking-[0.18em] text-white/85 sm:p-5">
                  {imagen.leyenda}
                </figcaption>
              )}
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

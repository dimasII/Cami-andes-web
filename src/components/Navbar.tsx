"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MorphIcon } from "./MorphIcon";
import { Menu, X } from "lucide";

const links = [
  { href: "/", label: "Inicio", desc: "Portada del proyecto" },
  { href: "/proyecto/", label: "Proyecto", desc: "Qué es Camiñandes" },
  { href: "/provincias/", label: "Provincias", desc: "Las 7 provincias en el mapa" },
  { href: "/itinerarios/", label: "Itinerarios", desc: "4 rutas culturales" },
  { href: "/galeria/", label: "Galería", desc: "Fotos del camino" },
  { href: "/blog/", label: "Blog", desc: "Avances del COIL" },
  { href: "/contacto/", label: "Contacto", desc: "Escríbenos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open ]);

  return (
    <header className="fixed top-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2">
      <div
        ref={menuRef}
        className="header-float relative flex items-center justify-between gap-6 rounded-full px-6 py-3 sm:px-8 sm:py-4"
      >
        <Link href="/" className="flex items-center gap-4">
          <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-white/10">
            <Image
              src="/logo.svg"
              alt="Logotipo Camiñandes"
              width={40}
              height={40}
              className="h-9 w-9 object-contain brightness-0 invert"
              priority
            />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-white/55">
              Camiñandes
            </div>
            <div className="hidden text-sm text-white sm:block">
              Apurímac · Galicia
            </div>
          </div>
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls="menu-principal"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex items-center gap-3 rounded-full bg-white/10 py-3 pl-6 pr-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Menú
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
            <MorphIcon icon={open ? X : Menu} size={20} color="white" spring="snappy" />
          </span>
        </button>

        {open && (
          <nav
            id="menu-principal"
            aria-label="Menú principal"
            className="absolute inset-x-0 top-[calc(100%+0.75rem)] flex flex-col gap-1 rounded-[2rem] border border-white/10 bg-[#0c231b] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between gap-4 rounded-2xl px-5 py-3 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
              >
                <span className="text-sm uppercase tracking-[0.2em] text-white">
                  {l.label}
                </span>
                <span className="text-right text-xs text-white/60">{l.desc}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { MorphIcon } from "./MorphIcon";
import { Leaf, Menu, X } from "lucide";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/proyecto/", label: "Proyecto" },
  { href: "/galeria/", label: "Galería" },
  { href: "/blog/", label: "Blog" },
  { href: "/contacto/", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2">
      <div className="header-float flex items-center justify-between gap-6 rounded-full px-6 py-3 sm:px-8 sm:py-4">
        <Link href="/" className="flex items-center gap-4">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-white/10">
            <MorphIcon icon={Leaf} size={22} color="white" />
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

        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.24em] text-white/60 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Abrir menú"
          className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white lg:hidden"
        >
          <MorphIcon icon={open ? X : Menu} size={22} color="white" spring="snappy" />
        </button>
      </div>

      {open && (
        <nav className="header-float mt-3 flex flex-col gap-1 rounded-[2rem] p-4 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-5 py-3 text-sm uppercase tracking-[0.2em] text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

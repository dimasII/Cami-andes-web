import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/proyecto/", label: "Proyecto" },
  { href: "/galeria/", label: "Galería" },
  { href: "/blog/", label: "Blog" },
  { href: "/contacto/", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur dark:bg-black/90">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          🥾 Camiñandes
          <span className="ml-2 hidden text-xs font-normal text-zinc-500 sm:inline">
            Apurímac · Galicia
          </span>
        </Link>
        <ul className="flex gap-4 text-sm font-medium sm:gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

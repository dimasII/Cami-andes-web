"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Animación de entrada de la página Nosotros.
 * Muestra el logotipo sobre fondo verde, lo revela y se retira sola.
 * Se puede saltar con un clic o toque, y respeta prefers-reduced-motion.
 */
export default function IntroLogo() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const id = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(id);
    }

    const fin = window.setTimeout(() => {
      setVisible(false);
    }, 2400);

    return () => {
      window.clearTimeout(fin);
    };
  }, []);

  const saltar = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="intro-logo"
      onClick={saltar}
      role="presentation"
      aria-hidden="true"
    >
      <span className="intro-logo__halo" />

      <div className="intro-logo__content">
        <div className="intro-logo__mark">
          <span className="intro-logo__ring" />
          <span className="intro-logo__ring intro-logo__ring--2" />
          <Image
            src="/logo.svg"
            alt=""
            width={96}
            height={96}
            priority
            className="intro-logo__logo"
          />
        </div>

        <div className="intro-logo__word">CamiñAndes</div>
        <div className="intro-logo__sub">Apurímac · Galicia · COIL 2026</div>
        <span className="intro-logo__line" />
      </div>
    </div>
  );
}

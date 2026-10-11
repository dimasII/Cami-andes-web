import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export para Hostinger compartido (public_html) */
  /* Build con Webpack: el CSS de mapbox-gl paniquea el pipeline de Turbopack */
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

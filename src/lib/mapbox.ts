// Token público de Mapbox.
// Se lee desde NEXT_PUBLIC_MAPBOX_TOKEN (ver .env.example).
// El token NO se sube al repo: cada entorno usa su propio .env.local.
// Para el build local / Hostinger, crea .env.local con tu token.
export const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

// Punto inicial: Abancay, Apurímac (COIL Apurímac - Galicia)
export const INITIAL_VIEW = {
  longitude: -72.8778,
  latitude: -13.6357,
  zoom: 6,
} as const;

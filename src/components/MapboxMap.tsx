"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { INITIAL_VIEW, MAPBOX_TOKEN } from "../lib/mapbox";

export default function MapboxMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!MAPBOX_TOKEN) {
      setError("Falta el token de Mapbox (NEXT_PUBLIC_MAPBOX_TOKEN).");
      return;
    }

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [INITIAL_VIEW.longitude, INITIAL_VIEW.latitude],
      zoom: INITIAL_VIEW.zoom,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Marcador en Abancay, Apurímac
    new mapboxgl.Marker({ color: "#e11d48" })
      .setLngLat([INITIAL_VIEW.longitude, INITIAL_VIEW.latitude])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          "<strong>CamiAndes</strong><br/>Abancay, Apurímac"
        )
      )
      .addTo(map);

    map.on("error", () => {
      setError(
        "No se pudo cargar el mapa. Revisa el token y la conexión a internet."
      );
    });

    return () => map.remove();
  }, []);

  if (error) {
    return (
      <div className="flex h-[420px] w-full items-center justify-center rounded-xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-700">
        {error}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="h-[420px] w-full overflow-hidden rounded-xl border border-zinc-200 shadow-sm"
    />
  );
}

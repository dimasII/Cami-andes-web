"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { INITIAL_VIEW, MAPBOX_TOKEN } from "../lib/mapbox";

// Calcula [minLng, minLat, maxLng, maxLat] recorriendo las coordenadas.
function bboxOf(geojson: GeoJSON.FeatureCollection): [number, number, number, number] {
  let minLng = Infinity;
  let minLat = Infinity;
  let maxLng = -Infinity;
  let maxLat = -Infinity;
  const walk = (coords: unknown): void => {
    if (Array.isArray(coords) && typeof coords[0] === "number") {
      const [lng, lat] = coords as [number, number];
      if (lng < minLng) minLng = lng;
      if (lat < minLat) minLat = lat;
      if (lng > maxLng) maxLng = lng;
      if (lat > maxLat) maxLat = lat;
      return;
    }
    if (Array.isArray(coords)) {
      coords.forEach(walk);
    }
  };
  geojson.features.forEach((f) => {
    const geom = f.geometry as
      | GeoJSON.Polygon
      | GeoJSON.MultiPolygon
      | null;
    if (geom) walk(geom.coordinates);
  });
  return [minLng, minLat, maxLng, maxLat];
}

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
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [INITIAL_VIEW.longitude, INITIAL_VIEW.latitude],
      zoom: INITIAL_VIEW.zoom,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("load", async () => {
      try {
        const [regionRes, provRes] = await Promise.all([
          fetch("/geo/apurimac-region.geojson"),
          fetch("/geo/apurimac-provincias.geojson"),
        ]);
        if (!regionRes.ok || !provRes.ok) throw new Error("geojson");
        const region = (await regionRes.json()) as GeoJSON.FeatureCollection;
        const provincias = (await provRes.json()) as GeoJSON.FeatureCollection;

        // 1 · Relleno de la región Apurímac
        map.addSource("apurimac-region", { type: "geojson", data: region });
        map.addLayer({
          id: "apurimac-fill",
          type: "fill",
          source: "apurimac-region",
          paint: {
            "fill-color": "#047857",
            "fill-opacity": 0.22,
          },
        });
        // 2 · Límite territorial de la región (trazo grueso)
        map.addLayer({
          id: "apurimac-outline",
          type: "line",
          source: "apurimac-region",
          paint: {
            "line-color": "#065f46",
            "line-width": 3.5,
          },
        });

        // 3 · Provincias: relleno sutil + límites internos
        map.addSource("apurimac-provincias", { type: "geojson", data: provincias });
        map.addLayer({
          id: "provincias-fill",
          type: "fill",
          source: "apurimac-provincias",
          paint: {
            "fill-color": "#10b981",
            "fill-opacity": 0.12,
          },
        });
        map.addLayer({
          id: "provincias-outline",
          type: "line",
          source: "apurimac-provincias",
          paint: {
            "line-color": "#ffffff",
            "line-width": 1.5,
            "line-dasharray": [2, 1.5],
          },
        });
        // 4 · Nombre de cada provincia
        map.addLayer({
          id: "provincias-labels",
          type: "symbol",
          source: "apurimac-provincias",
          layout: {
            "text-field": ["get", "name"],
            "text-size": 13,
            "text-letter-spacing": 0.08,
          },
          paint: {
            "text-color": "#064e3b",
            "text-halo-color": "#ffffff",
            "text-halo-width": 2,
          },
        });

        // 5 · Encuadre ceñido a Apurímac
        const [w, s, e, n] = bboxOf(region);
        map.fitBounds(
          [
            [w, s],
            [e, n],
          ],
          { padding: 40, duration: 1200 }
        );
      } catch {
        // Si falla el GeoJSON, el mapa base + marcador siguen visibles.
      }
    });

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

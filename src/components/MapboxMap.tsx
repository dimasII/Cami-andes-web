"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { INITIAL_VIEW, MAPBOX_TOKEN } from "../lib/mapbox";
import {
  LUGARES,
  PROVINCIAS,
  provinciaPorSlug,
  type LugarEnriquecido,
  type TipoLugar,
} from "../lib/provincias";

function lugaresFiltrados(
  provincia: string | null,
  tipos: TipoLugar[] | null
): LugarEnriquecido[] {
  return LUGARES.filter(
    (l) =>
      (!provincia || l.provinciaSlug === provincia) &&
      (!tipos || tipos.length === 0 || tipos.includes(l.tipo))
  );
}

function lugaresGeoSource(
  provincia: string | null,
  tipos: TipoLugar[] | null
): GeoJSON.FeatureCollection {
  return {
    type: "FeatureCollection",
    features: lugaresFiltrados(provincia, tipos).map((l) => ({
      type: "Feature",
      properties: {
        id: `${l.provinciaSlug}:${l.id}`,
        nombre: l.nombre,
        color: l.color,
      },
      geometry: { type: "Point", coordinates: l.coords },
    })),
  };
}

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

function bboxDeProvincia(slug: string): [[number, number], [number, number]] | null {
  const prov = provinciaPorSlug(slug);
  if (!prov || prov.lugares.length === 0) return null;
  const lngs = prov.lugares.map((l) => l.coords[0]);
  const lats = prov.lugares.map((l) => l.coords[1]);
  const pad = 0.15;
  return [
    [Math.min(...lngs) - pad, Math.min(...lats) - pad],
    [Math.max(...lngs) + pad, Math.max(...lats) + pad],
  ];
}

interface MapboxMapProps {
  /** slug de provincia para volar hacia ella (página /provincias) */
  foco?: string | null;
  /** filtra los marcadores por provincia (null = todas) */
  filtroProvincia?: string | null;
  /** filtra los marcadores por tipo de lugar (null/vacío = todos) */
  filtroTipos?: TipoLugar[] | null;
  /** se llama al tocar un marcador de lugar */
  onSelectLugar?: (lugar: LugarEnriquecido) => void;
  mostrarLeyenda?: boolean;
}

export default function MapboxMap({
  foco = null,
  filtroProvincia = null,
  filtroTipos = null,
  onSelectLugar,
  mostrarLeyenda = true,
}: MapboxMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const onSelectRef = useRef(onSelectLugar);
  onSelectRef.current = onSelectLugar;
  const [error, setError] = useState<string | null>(null);

  // Vuelo hacia la provincia enfocada (sin recrear el mapa).
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !foco) return;
    const bbox = bboxDeProvincia(foco);
    if (!bbox) return;
    const volar = () =>
      map.fitBounds(bbox, { padding: 50, duration: 1200, maxZoom: 9.5 });
    if (map.loaded()) volar();
    else map.once("load", volar);
  }, [foco]);

  // Re-filtra los marcadores sin recrear el mapa.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const aplicar = () => {
      const src = map.getSource("lugares") as mapboxgl.GeoJSONSource | undefined;
      src?.setData(lugaresGeoSource(filtroProvincia, filtroTipos));
    };
    if (map.loaded() && map.getSource("lugares")) aplicar();
    else map.once("load", aplicar);
  }, [filtroProvincia, filtroTipos]);

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
    mapRef.current = map;

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

        // 5 · Marcadores de lugares turísticos (todos, color por provincia)
        const lugaresGeo = lugaresGeoSource(filtroProvincia, filtroTipos);
        map.addSource("lugares", { type: "geojson", data: lugaresGeo });
        map.addLayer({
          id: "lugares",
          type: "circle",
          source: "lugares",
          paint: {
            "circle-color": ["get", "color"],
            "circle-radius": 7,
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": 2.5,
          },
        });

        map.on("click", "lugares", (e) => {
          const f = e.features?.[0];
          const id = f?.properties?.id as string | undefined;
          if (!id) return;
          const [provSlug, lugarId] = id.split(":");
          const prov = provinciaPorSlug(provSlug);
          const base = prov?.lugares.find((l) => l.id === lugarId);
          if (base && prov) {
            onSelectRef.current?.({
              ...base,
              provincia: prov.nombre,
              provinciaSlug: prov.slug,
              color: prov.color,
            });
          }
        });
        map.on("mouseenter", "lugares", () => {
          map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "lugares", () => {
          map.getCanvas().style.cursor = "";
        });

        // 6 · Encuadre: toda Apurímac al inicio
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

    return () => {
      mapRef.current = null;
      map.remove();
    };
  }, []);

  if (error) {
    return (
      <div className="flex h-[420px] w-full items-center justify-center rounded-xl border border-red-200 bg-red-50 p-6 text-center text-sm text-red-700">
        {error}
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="h-[420px] w-full overflow-hidden rounded-xl border border-zinc-200 shadow-sm"
      />
      {mostrarLeyenda && (
        <div className="absolute bottom-3 left-3 z-10 flex max-w-[calc(100%-1.5rem)] flex-wrap gap-x-3 gap-y-1 rounded-2xl bg-white/85 px-4 py-2.5 shadow-lg backdrop-blur sm:max-w-[70%]">
          {PROVINCIAS.map((p) => (
            <span
              key={p.slug}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-950"
            >
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: p.color }}
              />
              {p.nombre}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

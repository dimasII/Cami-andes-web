"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Map as MapIcon, Mountain, Satellite } from "lucide";
import { MorphIcon } from "./MorphIcon";
import { INITIAL_VIEW, MAPBOX_TOKEN } from "../lib/mapbox";
import {
  LUGARES,
  PROVINCIAS,
  provinciaPorSlug,
  type LugarEnriquecido,
  type TipoLugar,
} from "../lib/provincias";

type ModoBase = "mapa" | "satelite" | "relieve";

const ESTILOS: Record<ModoBase, { url: string; label: string }> = {
  mapa: { url: "mapbox://styles/mapbox/outdoors-v12", label: "Mapa" },
  satelite: {
    url: "mapbox://styles/mapbox/satellite-streets-v12",
    label: "Satélite",
  },
  // Relieve 3D: mismo estilo topográfico + terreno extruido, pitch y cielo.
  relieve: { url: "mapbox://styles/mapbox/outdoors-v12", label: "Relieve 3D" },
};

const MODOS: { id: ModoBase; icon: typeof MapIcon }[] = [
  { id: "mapa", icon: MapIcon },
  { id: "satelite", icon: Satellite },
  { id: "relieve", icon: Mountain },
];

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
  foco?: string | null;
  filtroProvincia?: string | null;
  filtroTipos?: TipoLugar[] | null;
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
  const regionRef = useRef<GeoJSON.FeatureCollection | null>(null);
  const provinciasRef = useRef<GeoJSON.FeatureCollection | null>(null);
  const filtrosRef = useRef({ filtroProvincia, filtroTipos });
  const modoRef = useRef<ModoBase>("mapa");
  const inicializadoRef = useRef(false);

  const [modo, setModo] = useState<ModoBase>("mapa");
  const [error, setError] = useState<string | null>(() =>
    !MAPBOX_TOKEN ? "Falta el token de Mapbox (NEXT_PUBLIC_MAPBOX_TOKEN)." : null
  );

  useEffect(() => {
    onSelectRef.current = onSelectLugar;
  }, [onSelectLugar]);

  useEffect(() => {
    filtrosRef.current = { filtroProvincia, filtroTipos };
  }, [filtroProvincia, filtroTipos]);

  useEffect(() => {
    modoRef.current = modo;
  }, [modo]);

  // Añade (o repone) las fuentes y capas propias del proyecto tras cada style.load.
  const agregarCapasProyecto = (map: mapboxgl.Map) => {
    const region = regionRef.current;
    const provincias = provinciasRef.current;
    const { filtroProvincia: fp, filtroTipos: ft } = filtrosRef.current;

    if (region && !map.getSource("apurimac-region")) {
      map.addSource("apurimac-region", { type: "geojson", data: region });
    }
    if (region) {
      if (!map.getLayer("apurimac-fill")) {
        map.addLayer({
          id: "apurimac-fill",
          type: "fill",
          source: "apurimac-region",
          paint: { "fill-color": "#047857", "fill-opacity": 0.22 },
        });
      }
      if (!map.getLayer("apurimac-outline")) {
        map.addLayer({
          id: "apurimac-outline",
          type: "line",
          source: "apurimac-region",
          paint: { "line-color": "#065f46", "line-width": 3.5 },
        });
      }
    }

    if (provincias && !map.getSource("apurimac-provincias")) {
      map.addSource("apurimac-provincias", { type: "geojson", data: provincias });
    }
    if (provincias) {
      if (!map.getLayer("provincias-fill")) {
        map.addLayer({
          id: "provincias-fill",
          type: "fill",
          source: "apurimac-provincias",
          paint: { "fill-color": "#10b981", "fill-opacity": 0.12 },
        });
      }
      if (!map.getLayer("provincias-outline")) {
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
      }
      if (!map.getLayer("provincias-labels")) {
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
      }
    }

    if (!map.getSource("lugares")) {
      map.addSource("lugares", {
        type: "geojson",
        data: lugaresGeoSource(fp, ft),
      });
    } else {
      (map.getSource("lugares") as mapboxgl.GeoJSONSource).setData(
        lugaresGeoSource(fp, ft)
      );
    }
    if (!map.getLayer("lugares")) {
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
    }
  };

  const aplicarRelieve = (map: mapboxgl.Map, m: ModoBase) => {
    if (m === "relieve") {
      if (!map.getSource("mapbox-dem")) {
        map.addSource("mapbox-dem", {
          type: "raster-dem",
          url: "mapbox://mapbox.mapbox-terrain-dem-v1",
          tileSize: 512,
          maxzoom: 14,
        });
      }
      map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
      if (!map.getLayer("sky")) {
        map.addLayer({
          id: "sky",
          type: "sky",
          paint: {
            "sky-type": "atmosphere",
            "sky-atmosphere-sun": [0.0, 0.0],
            "sky-atmosphere-sun-intensity": 15,
          },
        });
      }
      map.easeTo({ pitch: 60, bearing: -15, duration: 1000 });
    } else {
      map.setTerrain(null);
      try {
        if (map.getLayer("sky")) map.removeLayer("sky");
      } catch {
        /* la capa puede no existir tras un cambio de estilo */
      }
      map.easeTo({ pitch: 0, bearing: 0, duration: 800 });
    }
  };

  const engancharInteracciones = (map: mapboxgl.Map) => {
    // Evita duplicar listeners tras cada cambio de estilo.
    try {
      (map as unknown as { off: (...a: unknown[]) => void }).off("click", "lugares");
    } catch {
      /* sin listeners previos */
    }
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
  };

  // Vuelo a provincia enfocada.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !foco || !inicializadoRef.current) return;
    const bbox = bboxDeProvincia(foco);
    if (!bbox) return;
    const volar = () =>
      map.fitBounds(bbox, { padding: 50, duration: 1200, maxZoom: 9.5 });
    if (map.loaded()) volar();
    else map.once("load", volar);
  }, [foco]);

  // Refiltrado de puntos.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !inicializadoRef.current) return;
    const src = map.getSource("lugares") as mapboxgl.GeoJSONSource | undefined;
    if (src && map.isStyleLoaded()) {
      src.setData(lugaresGeoSource(filtroProvincia, filtroTipos));
    }
  }, [filtroProvincia, filtroTipos]);

  // Cambio de capa base.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !inicializadoRef.current) return;
    map.setStyle(ESTILOS[modo].url);
    map.once("styledata", () => {
      const esperar = () => {
        if (!map.isStyleLoaded()) {
          window.setTimeout(esperar, 100);
          return;
        }
        agregarCapasProyecto(map);
        engancharInteracciones(map);
        aplicarRelieve(map, modoRef.current);
      };
      esperar();
    });
  }, [modo]);

  // Creación del mapa (una sola vez).
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    if (!MAPBOX_TOKEN) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: ESTILOS.mapa.url,
      center: [INITIAL_VIEW.longitude, INITIAL_VIEW.latitude],
      zoom: INITIAL_VIEW.zoom,
      pitch: 0,
      maxPitch: 85,
      dragRotate: true,
      touchPitch: true,
    });
    mapRef.current = map;

    map.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), "top-right");

    map.on("style.load", () => {
      // Cada style.load (inicial + cada setStyle) repone terreno si toca.
      if (modoRef.current === "relieve") {
        // El DEM debe reañadirse porque setStyle lo borra.
        if (!map.getSource("mapbox-dem")) {
          try {
            map.addSource("mapbox-dem", {
              type: "raster-dem",
              url: "mapbox://mapbox.mapbox-terrain-dem-v1",
              tileSize: 512,
              maxzoom: 14,
            });
          } catch {
            /* ya existe */
          }
        }
        map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
      }
    });

    map.on("load", async () => {
      try {
        const [regionRes, provRes] = await Promise.all([
          fetch("/geo/apurimac-region.geojson"),
          fetch("/geo/apurimac-provincias.geojson"),
        ]);
        if (!regionRes.ok || !provRes.ok) throw new Error("geojson");
        regionRef.current =
          (await regionRes.json()) as GeoJSON.FeatureCollection;
        provinciasRef.current =
          (await provRes.json()) as GeoJSON.FeatureCollection;

        agregarCapasProyecto(map);
        engancharInteracciones(map);
        inicializadoRef.current = true;

        const [w, s, e, n] = bboxOf(regionRef.current);
        map.fitBounds(
          [
            [w, s],
            [e, n],
          ],
          { padding: 40, duration: 1200 }
        );
      } catch {
        setError("No se pudieron cargar los límites de Apurímac.");
      }
    });

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
      inicializadoRef.current = false;
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
      {/* Selector de capa base: Mapa · Satélite · Relieve 3D */}
      <div
        role="group"
        aria-label="Tipo de mapa"
        className="absolute left-3 top-3 z-10 flex gap-1 rounded-full bg-emerald-950/70 p-1 shadow-lg backdrop-blur"
      >
        {MODOS.map((m) => {
          const activo = modo === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setModo(m.id)}
              aria-pressed={activo}
              title={ESTILOS[m.id].label}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition ${
                activo
                  ? "bg-white text-emerald-950"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              <MorphIcon
                icon={m.icon}
                size={14}
                color={activo ? "#065f46" : "white"}
              />
              <span className="hidden sm:inline">{ESTILOS[m.id].label}</span>
            </button>
          );
        })}
      </div>
      {modo === "relieve" && (
        <div className="absolute right-3 top-3 z-10 max-w-[220px] rounded-2xl bg-emerald-950/70 px-3 py-2 text-[11px] leading-5 text-white/85 shadow-lg backdrop-blur">
          Clic derecho + arrastrar para rotar · rueda para el zoom 3D
        </div>
      )}
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

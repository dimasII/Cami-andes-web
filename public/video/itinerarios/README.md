# Videos de los itinerarios

Sube aquí **un video por ruta**. Los nombres deben ser exactos (minúsculas y guiones):

| Ruta | Nombre del archivo | URL en la web |
| --- | --- | --- |
| Abancay esencial | `abancay.mp4` | `/video/itinerarios/abancay.mp4` |
| Andahuaylas viva | `andahuaylas.mp4` | `/video/itinerarios/andahuaylas.mp4` |
| Circuito Norte | `circuito-norte.mp4` | `/video/itinerarios/circuito-norte.mp4` |
| Circuito Sur | `circuito-sur.mp4` | `/video/itinerarios/circuito-sur.mp4` |

Ruta completa en el proyecto:

```
public/video/itinerarios/abancay.mp4
public/video/itinerarios/andahuaylas.mp4
public/video/itinerarios/circuito-norte.mp4
public/video/itinerarios/circuito-sur.mp4
```

## Formato recomendado

- Contenedor: **MP4**
- Video: **H.264** (AAC para el audio)
- Resolución: **1920 × 1080** (16:9)
- Duración: **20–45 segundos**
- Peso: idealmente **menos de 25 MB**
- Sin música con copyright o con licencia libre.

Mientras el archivo no exista, la web muestra un marcador de "Video próximamente"
con la foto de portada de la ruta. Al subir el archivo con el nombre correcto,
el reproductor aparece automáticamente sin tocar código.

## Dónde se configura

En `src/lib/itinerarios.ts`, cada itinerario tiene:

```ts
video: {
  src: "/video/itinerarios/abancay.mp4",
  poster: "/img/provincias/abancay/ampay/01.jpg",
},
```

`poster` es la imagen que se ve antes de reproducir. Puedes cambiarla por
cualquier foto de `public/img/provincias/`.

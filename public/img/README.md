# Fotos de provincias y lugares

Sube aquí manualmente las fotos. El carrusel las muestra automáticamente
según lo listado en `src/lib/provincias.ts` (campo `imagenes` de cada lugar).

## Convención de carpetas

```
public/img/provincias/<provincia-slug>/<lugar-id>/1.jpg
public/img/provincias/<provincia-slug>/<lugar-id>/2.jpg
...
```

Ejemplo: las fotos del Santuario de Ampay van en
`public/img/provincias/abancay/ampay/` como `1.jpg`, `2.jpg`, etc.,
y se registran así:

```ts
imagenes: [
  "/img/provincias/abancay/ampay/1.jpg",
  "/img/provincias/abancay/ampay/2.jpg",
],
```

## Reglas

- Formatos: `.jpg` o `.webp` (más liviano para la web).
- Ancho recomendado: 1200 px (el carrusel recorta a 16:9 aprox.).
- Nombra en orden: `1.jpg`, `2.jpg`, `3.jpg`… (la primera es la portada).
- Puedes poner tantas fotos como quieras por lugar.
- Si un lugar no tiene fotos aún, el carrusel muestra un marcador temporal
  con el logo — no se rompe nada.

## Slugs válidos

Provincias: `abancay`, `andahuaylas`, `antabamba`, `aymaraes`,
`chincheros`, `cotabambas`, `grau`.

IDs de lugar: ver campo `id` de cada lugar en `src/lib/provincias.ts`
(ej. `ampay`, `saywite`, `pacucha`, `sondor`, `cocharcas`…).

## Fotos de gastronomía, agricultura y vestimenta (opcional)

Carpetas separadas por sección:

```
public/img/provincias/<provincia>/gastronomia/<nombre>.jpg
public/img/provincias/<provincia>/agricultura/<nombre>.jpg
public/img/provincias/<provincia>/vestimenta/<nombre>.jpg
```

Ej.: `public/img/provincias/abancay/gastronomia/tallarin.jpg`
y se registra en el ítem correspondiente:

```ts
{ nombre: "Tallarín de casa", descripcion: "…", imagen: "/img/provincias/abancay/gastronomia/tallarin.jpg" },
```

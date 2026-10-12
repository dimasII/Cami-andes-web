/**
 * Itinerarios culturales de Apurímac.
 *
 * Contenido redactado a partir de las propuestas de itinerarios
 * (Abancay, Andahuaylas y circuitos norte/sur). Los horarios recogidos
 * en los documentos se muestran siempre como orientativos.
 *
 * Reglas de contenido:
 * - No se inventan coordenadas, distancias, costes, horarios ni contactos.
 * - Los recuerdos y tokens son propuestas, no servicios garantizados.
 * - Los enlaces al mapa solo usan lugares que existen en `provincias.ts`
 *   con su precisión registrada (no se altera ninguna coordenada).
 */

export interface HorarioItem {
  /** Franja horaria tal como aparece en el documento (orientativa). */
  hora: string;
  actividad: string;
}

export interface DiaItinerario {
  dia: number;
  titulo: string;
  resumen: string;
  horarios: HorarioItem[];
}

export interface LugarMapaRef {
  provinciaSlug: string;
  lugarId: string;
  dia?: number;
}

export interface Itinerario {
  slug: string;
  nombre: string;
  corto: string;
  duracion: string;
  avisoDuracion?: string;
  base?: string;
  destinos: string[];
  tipoExperiencia: string[];
  publico?: string;
  resumen: string;
  imagen?: { src: string; alt: string };
  dias: DiaItinerario[];
  antesDeViajar: string[];
  recuerdo?: { titulo: string; descripcion: string };
  lugaresMapa: LugarMapaRef[];
}

const HORARIOS_ORIENTATIVOS = "Horarios orientativos, no garantizados.";

export const AVISO_HORARIOS = HORARIOS_ORIENTATIVOS;

export const ITINERARIOS: Itinerario[] = [
  {
    slug: "abancay",
    nombre: "Abancay esencial",
    corto: "Abancay",
    duracion: "5 días / 4 noches",
    base: "Alojamiento base en la ciudad de Abancay.",
    destinos: ["Abancay", "Santuario Nacional de Ampay", "Taraccasa", "Pachachaca"],
    tipoExperiencia: ["Historia y patrimonio", "Naturaleza", "Artesanía", "Gastronomía"],
    publico: "Adultos jóvenes y viajeros interesados en la cultura, la naturaleza y el patrimonio.",
    resumen:
      "Cinco días para descubrir Abancay de forma cercana y participativa: su centro histórico, el bosque de intimpas del Santuario Nacional de Ampay, el mirador de Taraccasa, un taller artesanal, el puente colonial de Pachachaca y el Museo Arqueológico y Antropológico de Apurímac en la Casa Hacienda Illanya. Grupos reducidos y turismo responsable.",
    imagen: {
      src: "/img/provincias/abancay/ampay/01.jpg",
      alt: "Bosque de intimpas en el Santuario Nacional de Ampay, Abancay",
    },
    dias: [
      {
        dia: 1,
        titulo: "Descubrir la historia de Abancay",
        resumen:
          "Plaza de Armas y Catedral de la Virgen del Rosario, almuerzo con gastronomía regional —tallarín abanquino, chicharrón o cuy relleno—, parque Micaela Bastidas y paseo por las calles céntricas (jirón Lima, Miscabamba y jirón Puno) para leer la evolución urbana. Cierre del día compartiendo lo descubierto.",
        horarios: [
          { hora: "10:00–11:00", actividad: "Llegada, traslado al alojamiento y registro." },
          { hora: "11:00–11:30", actividad: "Presentación de CamiñAndes y de la experiencia." },
          { hora: "11:30–13:00", actividad: "Visita interpretativa a la Plaza de Armas y la Catedral." },
          { hora: "13:00–14:30", actividad: "Almuerzo con gastronomía regional." },
          { hora: "14:30–15:30", actividad: "Paseo por el parque Micaela Bastidas." },
          { hora: "15:30–16:30", actividad: "Recorrido por calles céntricas y evolución urbana." },
          { hora: "16:30–17:30", actividad: "Tiempo libre." },
          { hora: "19:00–20:30", actividad: "Cena y reflexión sobre las primeras impresiones." },
        ],
      },
      {
        dia: 2,
        titulo: "Naturaleza en el Santuario Nacional de Ampay",
        resumen:
          "Caminata interpretativa por un sendero autorizado entre intimpas y chachacomos, picnic sin dejar residuos y observación de aves y biodiversidad. El avistamiento de especies depende de las condiciones del entorno y no se garantiza.",
        horarios: [
          { hora: "07:00–08:00", actividad: "Desayuno y preparación del material de caminata." },
          { hora: "08:00–08:30", actividad: "Traslado desde Abancay hacia el acceso al santuario." },
          { hora: "08:30–09:00", actividad: "Registro, seguridad y normas del área protegida." },
          { hora: "09:00–12:00", actividad: "Caminata interpretativa por sendero autorizado." },
          { hora: "12:00–13:00", actividad: "Picnic o almuerzo preparado, sin dejar residuos." },
          { hora: "13:00–14:00", actividad: "Observación de aves, fotografía y reflexión." },
          { hora: "14:00–15:00", actividad: "Regreso al acceso y traslado a Abancay." },
          { hora: "15:00–17:00", actividad: "Descanso en el alojamiento." },
          { hora: "19:00–20:30", actividad: "Cena y puesta en común sobre la jornada." },
        ],
      },
      {
        dia: 3,
        titulo: "Mirador de Taraccasa y taller de artesanía",
        resumen:
          "Vistas panorámicas de Abancay desde el Parque Ecológico de Taraccasa y, por la tarde, encuentro con un artesano local: técnicas, materiales y, si es posible, una pequeña práctica. La visita al taller requiere reserva previa.",
        horarios: [
          { hora: "08:00–09:00", actividad: "Desayuno." },
          { hora: "09:00–09:30", actividad: "Traslado al Parque Ecológico de Taraccasa." },
          { hora: "09:30–12:30", actividad: "Visita guiada, vistas panorámicas e historia del paisaje." },
          { hora: "12:30–14:00", actividad: "Almuerzo en Abancay." },
          { hora: "14:30–15:00", actividad: "Traslado al taller artesanal." },
          { hora: "15:00–16:30", actividad: "Experiencia de artesanía local con un artesano." },
          { hora: "16:30–17:30", actividad: "Espacio de exposición y piezas elaboradas localmente." },
          { hora: "17:30–18:30", actividad: "Regreso al alojamiento y descanso." },
          { hora: "19:00–20:30", actividad: "Cena y tiempo libre." },
        ],
      },
      {
        dia: 4,
        titulo: "Memoria y patrimonio: Pachachaca e Illanya",
        resumen:
          "Visita guiada al puente colonial de Pachachaca —historia, arquitectura y su papel en las comunicaciones regionales— y, por la tarde, al Museo Arqueológico y Antropológico de Apurímac en la Casa Hacienda Illanya, con colecciones de cerámica, piedra, textiles y metal de las culturas wari y chanka.",
        horarios: [
          { hora: "08:00–09:00", actividad: "Desayuno." },
          { hora: "09:00–09:45", actividad: "Traslado al puente colonial de Pachachaca." },
          { hora: "09:45–11:15", actividad: "Visita guiada al puente: historia y arquitectura." },
          { hora: "11:15–12:30", actividad: "Paseo por el entorno desde zonas seguras." },
          { hora: "12:30–13:45", actividad: "Almuerzo en un establecimiento local." },
          { hora: "13:45–14:30", actividad: "Regreso a Abancay." },
          { hora: "14:30–16:30", actividad: "Museo Arqueológico y Antropológico de Apurímac (Illanya)." },
          { hora: "16:30–17:30", actividad: "Regreso al alojamiento y descanso." },
        ],
      },
      {
        dia: 5,
        titulo: "Sabores y vida local: Mercado Central",
        resumen:
          "Mercado Central de Abancay —frutas, verduras, hierbas y productos regionales según la oferta del día—, tiempo libre para compras opcionales de procedencia comprobable y almuerzo de despedida antes del traslado al terminal.",
        horarios: [
          { hora: "08:00–09:00", actividad: "Desayuno y preparación de la salida." },
          { hora: "09:00–10:30", actividad: "Visita al Mercado Central y sus productos locales." },
          { hora: "10:30–11:15", actividad: "Puestos regionales: usos en la cocina local." },
          { hora: "11:15–12:15", actividad: "Tiempo libre para compras opcionales." },
          { hora: "12:30–14:00", actividad: "Almuerzo de despedida en Abancay." },
          { hora: "14:00–15:00", actividad: "Recogida del equipaje y preparación de la salida." },
          { hora: "15:00 en adelante", actividad: "Traslado al terminal o continuación del viaje." },
        ],
      },
    ],
    antesDeViajar: [
      "Confirmar con el SERNANP los senderos habilitados, los horarios de acceso y los tiempos reales de caminata en Ampay.",
      "Confirmar el estado de acceso al puente de Pachachaca y las condiciones de la vía.",
      "Confirmar los horarios y condiciones de visita del Museo Arqueológico y Antropológico de Apurímac.",
      "Confirmar que el Mercado Central esté operativo y sus horarios de atención.",
      "Reservar el taller artesanal con antelación: ubicación, duración, coste y posibilidad de práctica.",
      "Los tiempos de traslado pueden ajustarse según el lugar elegido.",
      "No se garantiza el avistamiento de especies concretas ni la visita a las lagunas sin comprobar la viabilidad de la ruta.",
    ],
    recuerdo: {
      titulo: "Caja de recuerdos de Abancay (propuesta)",
      descripcion:
        "Postal del puente colonial de Pachachaca, tarjeta ilustrada de la intimpa del Santuario de Ampay, una pequeña pieza de artesanía local y una tarjeta sobre los productos y la gastronomía de Apurímac, con la colaboración de artesanos y productores locales cuando sea posible.",
    },
    lugaresMapa: [
      { provinciaSlug: "abancay", lugarId: "ampay", dia: 2 },
      { provinciaSlug: "abancay", lugarId: "pachachaca", dia: 4 },
    ],
  },
  {
    slug: "andahuaylas",
    nombre: "Andahuaylas viva",
    corto: "Andahuaylas",
    duracion: "5 días / 4 noches",
    base: "Alojamiento base en la ciudad de Andahuaylas.",
    destinos: ["Andahuaylas", "Talavera", "San Jerónimo y Cupisa", "Pacucha y Sóndor"],
    tipoExperiencia: ["Agricultura", "Artesanía y bordado", "Gastronomía", "Comunidades", "Historia y patrimonio"],
    publico:
      "Turistas culturales nacionales e internacionales, preferiblemente adultos jóvenes o de mediana edad, con interés participativo por la gastronomía, la artesanía, la agricultura y la historia local.",
    resumen:
      "Cinco días para comprender cómo se relacionan la economía, las tradiciones, el paisaje y la historia con la vida andahuaylina: mercado y templo en la ciudad, agricultura y huatía en Talavera, indumentaria y bordado en Cupisa, laguna de Pacucha y complejo de Sóndor, con cierre comunitario. Grupos reducidos, transporte contratado y actividades acordadas y remuneradas.",
    imagen: {
      src: "/img/provincias/andahuaylas/pacucha/01.jpg",
      alt: "Laguna de Pacucha, Andahuaylas",
    },
    dias: [
      {
        dia: 1,
        titulo: "Ciudad de Andahuaylas: historia y mercado",
        resumen:
          "Plaza de Armas y templo de San Pedro con guía local, Mercado Modelo para interpretar los productos —papa, maíz amiláceo, quinua, habas y otros de temporada— y cena introductoria que conecta alimentación, agricultura e identidad.",
        horarios: [
          { hora: "11:00–13:00", actividad: "Llegada, traslado al alojamiento y registro." },
          { hora: "13:00–14:30", actividad: "Comida y descanso." },
          { hora: "15:00–16:15", actividad: "Visita interpretativa a la Plaza de Armas y al templo de San Pedro." },
          { hora: "16:30–17:45", actividad: "Recorrido por el Mercado Modelo." },
          { hora: "18:00–20:00", actividad: "Tiempo libre y descanso." },
          { hora: "20:00–21:30", actividad: "Cena introductoria con interpretación gastronómica." },
        ],
      },
      {
        dia: 2,
        titulo: "Talavera: agricultura y huatía",
        resumen:
          "Parcela con productores locales —variedades de papa, semillas, siembra y agua—, actividad agrícola participativa según el calendario, taller de huatía en horno tradicional de tierra y comida compartida, con conversación final sobre economía agrícola y transmisión de saberes.",
        horarios: [
          { hora: "08:30–09:00", actividad: "Desplazamiento hacia Talavera." },
          { hora: "09:10–09:30", actividad: "Recepción por productores locales." },
          { hora: "09:30–11:00", actividad: "Visita a la parcela y explicación del cultivo." },
          { hora: "11:00–12:00", actividad: "Actividad agrícola participativa." },
          { hora: "12:00–12:30", actividad: "Selección y explicación de productos." },
          { hora: "12:30–14:30", actividad: "Taller de huatía y comida compartida." },
          { hora: "14:30–15:30", actividad: "Conversación sobre economía agrícola y saberes." },
          { hora: "16:00–17:00", actividad: "Regreso previsto al alojamiento." },
        ],
      },
      {
        dia: 3,
        titulo: "San Jerónimo y Cupisa: bordado e identidad",
        resumen:
          "Templo de San Jerónimo, encuentro con conocedores de la indumentaria tradicional de Cupisa —polleras, chamarras bordadas, mantas y sombreros—, taller de bordado y conversación sobre el carnaval y la identidad. Sin representaciones artificiales fuera de su contexto.",
        horarios: [
          { hora: "09:00–09:30", actividad: "Desplazamiento a San Jerónimo." },
          { hora: "09:30–10:30", actividad: "Visita al templo de San Jerónimo." },
          { hora: "10:30–11:15", actividad: "Desplazamiento a Cupisa y recepción de la comunidad." },
          { hora: "11:15–12:00", actividad: "Presentación de la indumentaria tradicional." },
          { hora: "12:00–13:30", actividad: "Taller participativo de bordado artesanal." },
          { hora: "13:30–14:30", actividad: "Comida con los anfitriones locales." },
          { hora: "14:30–15:30", actividad: "Encuentro sobre carnaval, identidad y transmisión." },
          { hora: "15:30–16:30", actividad: "Regreso a Andahuaylas." },
        ],
      },
      {
        dia: 4,
        titulo: "Pacucha y Sóndor: paisaje y memoria chanka",
        resumen:
          "Interpretación del paisaje en la laguna de Pacucha, encuentro con un agente local y visita arqueológica a Sóndor en tres niveles: el sitio, su relación con el territorio y la memoria chanka viva. El Sóndor Raymi (19 de junio) solo se incorpora si la fecha coincide.",
        horarios: [
          { hora: "08:30–09:10", actividad: "Salida de Andahuaylas hacia Pacucha." },
          { hora: "09:10–11:15", actividad: "Interpretación del paisaje y la laguna." },
          { hora: "11:15–12:00", actividad: "Encuentro con un agente local del entorno." },
          { hora: "12:00–13:15", actividad: "Comida en Pacucha." },
          { hora: "13:15–13:45", actividad: "Traslado hacia Sóndor." },
          { hora: "13:45–16:00", actividad: "Visita arqueológica interpretativa." },
          { hora: "16:00–17:00", actividad: "Regreso a Andahuaylas." },
        ],
      },
      {
        dia: 5,
        titulo: "Encuentro de cierre en Andahuaylas",
        resumen:
          "Conversación con representantes locales, recapitulación cultural del itinerario, comida de despedida y entrega de la caja de memoria cultural, con traslado de salida desde las 14:30.",
        horarios: [
          { hora: "09:30–10:00", actividad: "Presentación del encuentro de cierre." },
          { hora: "10:00–11:30", actividad: "Conversación con representantes locales." },
          { hora: "11:30–12:30", actividad: "Recapitulación cultural del itinerario." },
          { hora: "12:30–14:00", actividad: "Comida de despedida." },
          { hora: "14:00–14:30", actividad: "Entrega del token." },
          { hora: "Desde las 14:30", actividad: "Traslado de salida." },
        ],
      },
    ],
    antesDeViajar: [
      "Los productos y las labores agrícolas dependen de la temporada; la actividad práctica se adapta al calendario sin alterar las faenas.",
      "Las actividades con comunidades requieren coordinación y acuerdo previos, con remuneración de los participantes.",
      "El Sóndor Raymi solo puede incorporarse si la fecha del viaje coincide con su celebración.",
      "No se organizan representaciones del carnaval fuera de su contexto: el encuentro es conversación e intercambio.",
      "La disponibilidad de variedades concretas en el mercado se comprueba según la temporada.",
    ],
    recuerdo: {
      titulo: "Caja de memoria cultural de Andahuaylas (propuesta)",
      descripcion:
        "Figura artesanal del puma chanka, muestra de bordado de Cupisa de artesanos locales, miniatura inspirada en una variedad de papa de la zona y postal de la laguna de Pacucha o de Sóndor.",
    },
    lugaresMapa: [
      { provinciaSlug: "andahuaylas", lugarId: "pacucha", dia: 4 },
      { provinciaSlug: "andahuaylas", lugarId: "sondor", dia: 4 },
    ],
  },
  {
    slug: "circuito-norte",
    nombre: "Circuito Norte: Aymaraes y Chincheros",
    corto: "Circuito Norte",
    duracion: "5 días",
    base: "Alojamientos locales en Chalhuanca y Cocharcas, según la etapa.",
    destinos: ["Chalhuanca", "Caraybamba", "Cañón del Apurímac", "Cocharcas", "Huaccana"],
    tipoExperiencia: ["Turismo cultural", "Comunidades", "Naturaleza y termas", "Turismo ecológico"],
    publico:
      "Jóvenes y adultos de 25 a 45 años en busca de destinos menos visitados, aventura, cultura con interacción comunitaria y turismo ecológico.",
    resumen:
      "Cinco días por Aymaraes y Chincheros: Chalhuanca histórica y gastronómica, agricultura y fortalezas en Caraybamba, cañón del Apurímac y termas de Pincahuacho, santuario de Cocharcas y cierre en lagunas altoandinas y Huaccana, de raíz chanka. Las actividades se presentan como propuesta: ninguna está confirmada.",
    imagen: {
      src: "/img/provincias/abancay/canon-miradores/01.jpg",
      alt: "Mirador sobre el cañón del Apurímac",
    },
    dias: [
      {
        dia: 1,
        titulo: "Chalhuanca: historia y sabores",
        resumen:
          "Instalación en alojamiento local, paseo con explicación histórica por la ciudad y la plaza, mercado con productos agrícolas y gastronomía —con taller opcional de cocina y hierbas—, paseo por la naturaleza y cena de bienvenida.",
        horarios: [],
      },
      {
        dia: 2,
        titulo: "Caraybamba: agricultura y fortalezas",
        resumen:
          "Agricultura de montaña, manejo del agua y saberes campesinos; taller participativo con agricultores o comuneros y almuerzo comunitario; fortaleza inca de Sachaqoto Chuquinga y sitio de Apaqsa; cuaderno de paisaje con croquis de andenes y patrimonio. Regreso a Chalhuanca.",
        horarios: [],
      },
      {
        dia: 3,
        titulo: "Cañón del Apurímac y termas de Pincahuacho",
        resumen:
          "Ruta por el cañón y sus miradores seguros, fotografía y cuadernos de dibujo, comida grupal y descanso en las termas de Pincahuacho, con cena de productos locales de temporada.",
        horarios: [],
      },
      {
        dia: 4,
        titulo: "Cocharcas: santuario y comunidad",
        resumen:
          "Instalación en el alojamiento, paisaje rural y plazas, almuerzo de platos picantes, visita guiada al santuario de Cocharcas, charlas con las comunidades y cena grupal.",
        horarios: [],
      },
      {
        dia: 5,
        titulo: "Lagunas altoandinas y Huaccana chanka",
        resumen:
          "Laguna de Yanahuarmi o Torojocha según la estación, caminata y comida grupal al aire libre (previa autorización), y Huaccana: explicación histórica chanka y talleres con la comunidad. Cena y entrega de un recuerdo final inspirado en la ruta (propuesta).",
        horarios: [],
      },
    ],
    antesDeViajar: [
      "Ninguna actividad está confirmada: todo requiere verificación y coordinación previa.",
      "La laguna del quinto día (Yanahuarmi o Torojocha) depende de la estación.",
      "La comida al aire libre necesita autorización previa del lugar.",
      "Recorrer únicamente miradores seguros y seguir las indicaciones locales.",
      "Las actividades con comunidades requieren acuerdo previo con sus representantes.",
    ],
    recuerdo: {
      titulo: "Recuerdo final de la ruta (propuesta)",
      descripcion:
        "Token de recuerdo basado en las características de la ruta realizada, elaborado con participación local cuando sea posible.",
    },
    lugaresMapa: [
      { provinciaSlug: "aymaraes", lugarId: "chuquinga", dia: 2 },
      { provinciaSlug: "aymaraes", lugarId: "pincahuacho", dia: 3 },
      { provinciaSlug: "chincheros", lugarId: "cocharcas", dia: 4 },
      { provinciaSlug: "chincheros", lugarId: "yanahuarmi", dia: 5 },
      { provinciaSlug: "chincheros", lugarId: "toroccocha", dia: 5 },
    ],
  },
  {
    slug: "circuito-sur",
    nombre: "Circuito Sur: Grau, Cotabambas y Antabamba",
    corto: "Circuito Sur",
    duracion: "5 días descritos",
    avisoDuracion: "5 días descritos; duración propuesta: 6 días por confirmar.",
    destinos: ["Chuquibambilla", "Mamara", "Tambobamba", "Antabamba", "Hayllaripa"],
    tipoExperiencia: ["Turismo cultural", "Comunidades", "Patrimonio religioso", "Naturaleza altoandina"],
    publico:
      "Jóvenes y adultos de 25 a 45 años en busca de destinos menos visitados, aventura, cultura con interacción comunitaria y turismo ecológico.",
    resumen:
      "Ruta por Grau, Cotabambas y Antabamba: Chuquibambilla y el sistema Vilcanota-Apurímac, iglesia colonial de Mamara, Tambobamba y Qaqa cárcel, Antabamba y el templo de Hayllaripa con caminata e interpretación ambiental. El documento propone 6 días pero desarrolla actividades solo hasta el quinto: no se inventa el día 6.",
    dias: [
      {
        dia: 1,
        titulo: "Chuquibambilla: historia y geografía viva",
        resumen:
          "Instalación en alojamiento local, presentación del itinerario, tour histórico a pie con juego de pistas, comida grupal de gastronomía local, visita al sistema Vilcanota-Apurímac y taller interactivo de geografía e historia agrícola. Cena degustación.",
        horarios: [],
      },
      {
        dia: 2,
        titulo: "Mamara: iglesia colonial y comunidad",
        resumen:
          "Visita guiada a la iglesia colonial de Mamara —lectura religiosa, histórica y patrimonial—, comida, talleres y mercado con comunidades locales, demostración de técnicas artesanales y música. Cena y regreso a Chuquibambilla.",
        horarios: [],
      },
      {
        dia: 3,
        titulo: "Cotabambas: Tambobamba y Qaqa cárcel",
        resumen:
          "Traslado a Cotabambas, paseo por la capital, comida comunal y visita guiada a Tambobamba-Qaqa cárcel con sus relatos locales y significados. Cena.",
        horarios: [],
      },
      {
        dia: 4,
        titulo: "Llegada a Antabamba",
        resumen:
          "Paseo guiado por la ciudad —plaza de Armas y mercado—, ruta gastronómica con explicación de los productos de altura y actividades culturales. Cena.",
        horarios: [],
      },
      {
        dia: 5,
        titulo: "Hayllaripa: templo, caminata y cierre",
        resumen:
          "Templo colonial de Hayllaripa —valores históricos, religiosos, artísticos y comunitarios—, caminata ajustada al grupo y al clima, interpretación ambiental (agua, vegetación de altura, pastoreo y degradación), almuerzo comunitario o picnic sostenible en lugar permitido, taller con la comunidad y cierre con entrega del token (propuesta).",
        horarios: [],
      },
    ],
    antesDeViajar: [
      "El día 6 no está desarrollado en el documento: queda pendiente de definir.",
      "La caminata se ajusta al estado físico del grupo y a las condiciones meteorológicas.",
      "El picnic solo puede hacerse en un lugar permitido.",
      "Las actividades con comunidades requieren coordinación y acuerdo previos.",
      "Prever traslados largos entre provincias y confirmar accesos, horarios y alojamientos.",
    ],
    recuerdo: {
      titulo: "Token de cierre de la ruta (propuesta)",
      descripcion:
        "Regalo basado en la ruta, entregado en el cierre del quinto día según el documento.",
    },
    lugaresMapa: [
      { provinciaSlug: "grau", lugarId: "mamara", dia: 2 },
      { provinciaSlug: "cotabambas", lugarId: "ccacca-carcel", dia: 3 },
    ],
  },
];

export function itinerarioPorSlug(slug: string): Itinerario | undefined {
  return ITINERARIOS.find((i) => i.slug === slug);
}

export const ITINERARIO_SLUGS = ITINERARIOS.map((i) => i.slug);

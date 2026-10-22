export interface MomentoDia {
  /** Bloque del día tal como se describe en el documento; no implica una hora exacta. */
  momento: string;
  actividad: string;
}
export interface DiaItinerario {
  dia: number;
  titulo: string;
  resumen: string;
  momentos: MomentoDia[];
}
export interface LugarMapaRef {
  provinciaSlug: string;
  lugarId: string;
  dia?: number;
}
export interface ImagenRuta {
  src: string;
  alt: string;
  leyenda?: string;
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
  imagen?: ImagenRuta;
  galeria?: ImagenRuta[];
  /** Video de la ruta. Archivo en /public/video/itinerarios/<slug>.mp4 */
  video?: { src: string; poster?: string };
  dias: DiaItinerario[];
  antesDeViajar: string[];
  recuerdo?: { titulo: string; descripcion: string };
  lugaresMapa: LugarMapaRef[];
}
const AVISO_SECUENCIA =
  "Secuencia orientativa del día: no implica horarios exactos. Los tiempos se confirman con los prestadores locales.";
export const AVISO_SECUENCIA_DIA = AVISO_SECUENCIA;
export const ITINERARIOS: Itinerario[] = [
  {
    slug: "abancay",
    nombre: "Abancay esencial",
    corto: "Abancay",
    duracion: "5 días / 4 noches",
    base: "Alojamiento en la ciudad de Abancay durante las cuatro noches.",
    destinos: [
      "Abancay",
      "Santuario Nacional de Ampay (Tamburco)",
      "Taraccasa",
      "Pachachaca",
      "Casa Hacienda Illanya",
    ],
    tipoExperiencia: ["Historia y patrimonio", "Naturaleza", "Artesanía", "Gastronomía"],
    publico:
      "Turistas nacionales e internacionales de entre 25 y 44 años interesados en la cultura, la gastronomía y la naturaleza, que buscan destinos menos conocidos mediante experiencias auténticas. Viajeros solos, en pareja o en pequeños grupos, con capacidad de gasto media o media-alta. Como referencia, el 51 % de los turistas encuestados tiene entre 25 y 44 años, el 96 % realizó actividades culturales y el 98 % gastronómicas. La captación se plantea mediante Instagram y TikTok, recomendaciones personales y posibles colaboraciones con agencias de viajes.",
    resumen:
      "Cinco días y cuatro noches para descubrir Abancay desde el patrimonio histórico, la naturaleza, la gastronomía y las tradiciones locales. La ruta combina el centro histórico, el Santuario Nacional de Ampay en Tamburco, el mirador de Taraccasa, un encuentro con artesanos, el puente colonial de Pachachaca y el Museo Arqueológico y Antropológico de Apurímac en la Casa Hacienda Illanya. Grupos reducidos, alojamiento en la ciudad y turismo responsable.",
    imagen: {
      src: "/img/provincias/abancay/ampay/01.jpg",
      alt: "Bosque de intimpas en el Santuario Nacional de Ampay, Abancay",
    },
    video: {
      src: "/video/itinerarios/abancay.mp4",
      poster: "/img/provincias/abancay/ampay/01.jpg",
    },
    dias: [
      {
        dia: 1,
        titulo: "Centro histórico e identidad de Abancay",
        resumen:
          "Plaza de Armas —glorieta central y palmeras—, Catedral de la Virgen del Rosario y almuerzo de gastronomía regional con tallarín abanquino, chicharrón o cuy relleno según disponibilidad. Por la tarde, el parque Micaela Bastidas, dedicado a la figura histórica vinculada a la lucha contra el dominio colonial junto a Túpac Amaru II, con su monumento y murales. La jornada concluye con un paseo por las calles del centro, tiempo libre y cena.",
        momentos: [
          {
            momento: "Llegada",
            actividad:
              "Llegada, traslado al alojamiento y registro (horario a coordinar).",
          },
          {
            momento: "Mañana",
            actividad:
              "Visita interpretativa a la Plaza de Armas: importancia urbana y social, glorieta central y palmeras.",
          },
          {
            momento: "Mañana",
            actividad:
              "Visita a la Catedral de la Virgen del Rosario y explicación de su historia religiosa y sus tradiciones.",
          },
          {
            momento: "Mediodía",
            actividad:
              "Almuerzo de gastronomía regional: tallarín abanquino, chicharrón o cuy relleno, según disponibilidad de los establecimientos.",
          },
          {
            momento: "Tarde",
            actividad:
              "Visita al parque Micaela Bastidas: su vinculación con la lucha contra el dominio colonial junto a Túpac Amaru II, el monumento y los murales.",
          },
          {
            momento: "Tarde",
            actividad: "Paseo por las calles del centro y tiempo libre.",
          },
          {
            momento: "Noche",
            actividad: "Cena.",
          },
        ],
      },
      {
        dia: 2,
        titulo: "Naturaleza en el Santuario Nacional de Ampay",
        resumen:
          "Visita al área natural protegida situada en el distrito de Tamburco: desplazamiento al acceso autorizado, explicación de las normas de seguridad y conservación y caminata interpretativa por un sendero autorizado, adaptada a las condiciones del grupo y al tiempo disponible. Bosques de intimpa, biodiversidad andina y aves cuyo avistamiento depende de las condiciones del día. Pausa para comer en un lugar permitido y regreso a Abancay.",
        momentos: [
          {
            momento: "Mañana",
            actividad:
              "Desplazamiento desde Abancay hasta el acceso autorizado del santuario, en el distrito de Tamburco.",
          },
          {
            momento: "Mañana",
            actividad:
              "Explicación de las normas de seguridad y conservación que deben respetarse durante el recorrido.",
          },
          {
            momento: "Mañana",
            actividad:
              "Caminata interpretativa por un sendero autorizado, adaptada a las condiciones del grupo y al tiempo disponible.",
          },
          {
            momento: "Mañana",
            actividad:
              "Interpretación de la vegetación, los bosques de intimpa y la importancia de conservar los ecosistemas andinos.",
          },
          {
            momento: "Mediodía",
            actividad:
              "Observación de la fauna del entorno, especialmente las aves; los avistamientos dependen de las condiciones del día.",
          },
          {
            momento: "Mediodía",
            actividad: "Pausa para comer en un lugar permitido y descansar.",
          },
          {
            momento: "Tarde",
            actividad: "Regreso a Abancay.",
          },
          {
            momento: "Noche",
            actividad: "Cena y breve intercambio sobre la experiencia.",
          },
        ],
      },
      {
        dia: 3,
        titulo: "Mirador de Taraccasa y artesanía local",
        resumen:
          "Por la mañana, el mirador de Taraccasa y sus vistas panorámicas de Abancay, Tamburco y el valle que rodea la ciudad, con explicación del paisaje y de su relación con el desarrollo urbano. Después del almuerzo, encuentro con artesanos locales para conocer materiales, técnicas y conocimientos; taller práctico solo si existe disponibilidad y se acuerda previamente. Compras voluntarias y remuneración adecuada por la participación de los artesanos.",
        momentos: [
          {
            momento: "Mañana",
            actividad:
              "Visita al mirador de Taraccasa: vistas panorámicas de Abancay, Tamburco y el valle.",
          },
          {
            momento: "Mañana",
            actividad:
              "Explicación de las características del paisaje y de la relación entre el entorno montañoso y el desarrollo urbano.",
          },
          {
            momento: "Mediodía",
            actividad: "Almuerzo.",
          },
          {
            momento: "Tarde",
            actividad:
              "Encuentro con artesanos locales: materiales, técnicas y conocimientos que intervienen en sus creaciones.",
          },
          {
            momento: "Tarde",
            actividad:
              "Pequeño taller práctico para experimentar una técnica artesanal, solo si hay disponibilidad y se acuerda previamente con los participantes.",
          },
          {
            momento: "Tarde",
            actividad:
              "Tiempo para adquirir piezas de forma voluntaria, contribuyendo a la actividad económica local.",
          },
        ],
      },
      {
        dia: 4,
        titulo: "Puente colonial de Pachachaca y patrimonio arqueológico",
        resumen:
          "Por la mañana, el puente colonial de Pachachaca sobre el río del mismo nombre: arco de medio punto, materiales tradicionales de piedra y ladrillo, su importancia en las antiguas comunicaciones de la región y su valor arquitectónico, con paisaje y fotografías desde puntos seguros. Después del almuerzo, el Museo Arqueológico y Antropológico de Apurímac en la antigua Casa Hacienda Illanya: cerámica, piedra y textiles que permiten aproximarse a las culturas Wari y Chanka.",
        momentos: [
          {
            momento: "Mañana",
            actividad:
              "Traslado al puente colonial de Pachachaca, sobre el río del mismo nombre.",
          },
          {
            momento: "Mañana",
            actividad:
              "Visita guiada: arco de medio punto, uso de piedra y ladrillo, importancia en las antiguas comunicaciones de la región y valor arquitectónico.",
          },
          {
            momento: "Mañana",
            actividad:
              "Contemplación del paisaje del río y fotografías desde puntos seguros, respetando las condiciones de acceso.",
          },
          {
            momento: "Mediodía",
            actividad: "Almuerzo.",
          },
          {
            momento: "Tarde",
            actividad:
              "Visita al Museo Arqueológico y Antropológico de Apurímac, situado en la antigua Casa Hacienda Illanya.",
          },
          {
            momento: "Tarde",
            actividad:
              "Colecciones de cerámica, piedra y textiles; aproximación a las culturas Wari y Chanka y a las etapas históricas del territorio.",
          },
          {
            momento: "Tarde",
            actividad: "Regreso a Abancay.",
          },
        ],
      },
      {
        dia: 5,
        titulo: "Mercado Central y despedida gastronómica",
        resumen:
          "Por la mañana, el Mercado Central: productos regionales, tubérculos, hierbas e ingredientes de la cocina local, y prácticas comerciales de la ciudad, respetando la actividad de vendedores y compradores y pidiendo permiso antes de fotografiar. Almuerzo de despedida, entrega de la caja de recuerdos y traslado de salida tras recoger el equipaje.",
        momentos: [
          {
            momento: "Mañana",
            actividad:
              "Visita al Mercado Central: productos regionales, tubérculos, hierbas e ingredientes de la cocina local.",
          },
          {
            momento: "Mañana",
            actividad:
              "Interpretación de las prácticas comerciales de la ciudad, respetando la actividad de vendedores y compradores.",
          },
          {
            momento: "Mañana",
            actividad:
              "Compras locales voluntarias y solicitud de permiso antes de tomar fotografías.",
          },
          {
            momento: "Mediodía",
            actividad: "Almuerzo de despedida.",
          },
          {
            momento: "Tarde",
            actividad:
              "Entrega de la caja de recuerdos: postal del puente de Pachachaca, ilustración de la intimpa de Ampay, pieza artesanal y tarjeta informativa sobre la gastronomía y los productos de Apurímac.",
          },
          {
            momento: "Tarde",
            actividad: "Recogida del equipaje y traslado de salida.",
          },
        ],
      },
    ],
    antesDeViajar: [
      "Confirmar con el SERNANP las condiciones de acceso y las actividades autorizadas en el Santuario Nacional de Ampay.",
      "La caminata se adapta a las condiciones del grupo y al tiempo disponible; el avistamiento de aves depende de las condiciones del día.",
      "Confirmar los horarios y las condiciones de visita del Museo Arqueológico y Antropológico de Apurímac.",
      "Acordar previamente la participación de los artesanos y prever una remuneración adecuada; el taller práctico depende de su disponibilidad.",
      "Coordinar alojamientos, restaurantes, transporte y responsables de los espacios visitados.",
      "Las compras en el mercado y en el encuentro artesanal son voluntarias.",
      "Confirmar accesos, servicios, costes y horarios antes de comercializar el itinerario: las colaboraciones con la Municipalidad Provincial de Abancay, la DIRCETUR de Apurímac y el SERNANP son propuestas pendientes de negociación.",
      "El itinerario se plantea en grupos reducidos, con alojamiento en Abancay durante las cuatro noches.",
      "La propuesta contempla desplazamientos para las excursiones, acompañamiento de guía o coordinador y las comidas previstas en el itinerario.",
    ],
    recuerdo: {
      titulo: "Caja de recuerdos de Abancay (propuesta)",
      descripcion:
        "Caja con una postal del puente de Pachachaca, una ilustración de la intimpa de Ampay, una pieza artesanal y una tarjeta informativa sobre la gastronomía y los productos de Apurímac.",
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
    base: "Alojamiento principal en la ciudad de Andahuaylas, que concentra parte importante de los servicios de alojamiento, restauración y transporte de la provincia, con desplazamientos organizados hacia distintas localidades.",
    destinos: ["Andahuaylas", "Talavera", "San Jerónimo y Cupisa", "Pacucha y Sóndor"],
    tipoExperiencia: ["Agricultura", "Artesanía y bordado", "Gastronomía", "Comunidades", "Historia y patrimonio"],
    publico:
      "Turistas internacionales que ya tienen previsto visitar Cusco y buscan ampliar su recorrido por otro territorio andino, especialmente adultos jóvenes y de mediana edad (25 a 44 años) interesados en la cultura, la gastronomía y las experiencias participativas, con tiempo disponible y capacidad de gasto media o media-alta. Como referencia, el 56 % de los visitantes de Cusco tiene entre 25 y 44 años; el 97 % visitó sitios arqueológicos, el 98 % establecimientos de gastronomía regional o local y el 78 % mercados de alimentos; el principal país de residencia citado es Estados Unidos (31 %), seguido de España y Brasil (8 % cada uno). La estrategia combina la web de CamiñAndes, con información y, una vez confirmado el producto, posibilidad de reserva, además de Instagram y acuerdos con agencias y operadores de Cusco.",
    resumen:
      "Cinco días y cuatro noches para conocer la diversidad cultural de Andahuaylas a través de la agricultura, la artesanía, la gastronomía, el contacto con las comunidades y el patrimonio histórico y natural. La ruta combina la ciudad y su mercado, el cultivo de la papa y la huatía en Talavera, la indumentaria y el bordado de Cupisa, la laguna de Pacucha y el complejo arqueológico de Sóndor. Grupos de ocho a doce personas, transporte contratado, acompañamiento local y actividades acordadas y remuneradas.",
    imagen: {
      src: "/img/provincias/andahuaylas/pacucha/01.jpg",
      alt: "Laguna de Pacucha, Andahuaylas",
    },
    video: {
      src: "/video/itinerarios/andahuaylas.mp4",
      poster: "/img/provincias/andahuaylas/pacucha/01.jpg",
    },
    dias: [
      {
        dia: 1,
        titulo: "Andahuaylas: historia, mercado y gastronomía",
        resumen:
          "Llegada y registro en el alojamiento; por la tarde, visita interpretativa a la Plaza de Armas y al templo de San Pedro con un guía local, que sitúa la memoria de la cultura Chanka y las transformaciones colonial y republicana. Después, el Mercado Modelo con una persona conocedora: variedades de papa, maíz amiláceo, quinua y habas, sus características y usos culinarios. Cena introductoria en un restaurante local con preparaciones elaboradas a partir de esos productos. La jornada conecta los alimentos del mercado con la agricultura que se conocerá al día siguiente.",
        momentos: [
          {
            momento: "Llegada",
            actividad: "Llegada y registro en el alojamiento.",
          },
          {
            momento: "Tarde",
            actividad:
              "Visita interpretativa a la Plaza de Armas con un guía local: evolución histórica, memoria de la cultura Chanka y transformaciones de los períodos colonial y republicano.",
          },
          {
            momento: "Tarde",
            actividad:
              "Visita al templo de San Pedro: patrimonio religioso y arquitectónico y su lugar en la historia de la ciudad.",
          },
          {
            momento: "Tarde",
            actividad:
              "Recorrido por el Mercado Modelo con una persona conocedora: variedades de papa, maíz amiláceo, quinua y habas, características y usos culinarios.",
          },
          {
            momento: "Noche",
            actividad:
              "Cena introductoria en un restaurante local, con preparaciones elaboradas a partir de los productos identificados durante la visita.",
          },
        ],
      },
      {
        dia: 2,
        titulo: "Talavera: agricultura y huatía",
        resumen:
          "Encuentro con agricultores locales que hayan aceptado participar y visita a una parcela: variedades de papa, selección de semillas, momento de siembra e influencia de las condiciones del territorio. La agricultura se presenta como actividad económica y social fundamental, relacionada con la gastronomía y los conocimientos tradicionales. Actividad agrícola participativa según el calendario —selección y clasificación de tubérculos en cosecha o demostraciones sobre semillas y variedades en otras épocas—. Taller de huatía en un horno de tierra, comida compartida con los productores y conversación sobre costes de producción, precio de venta e intermediarios. La actividad busca mostrar las condiciones económicas y sociales del trabajo agrícola, no una escenificación pintoresca.",
        momentos: [
          {
            momento: "Mañana",
            actividad: "Desplazamiento a Talavera.",
          },
          {
            momento: "Mañana",
            actividad:
              "Encuentro con agricultores locales que hayan aceptado participar en la actividad.",
          },
          {
            momento: "Mañana",
            actividad:
              "Visita a una parcela: variedades cultivadas, selección de semillas, momento de la siembra y condiciones del territorio.",
          },
          {
            momento: "Mañana",
            actividad:
              "Actividad agrícola participativa según el calendario de cultivo: selección y clasificación de tubérculos en cosecha o demostraciones sobre semillas y variedades.",
          },
          {
            momento: "Mediodía",
            actividad:
              "Taller de huatía: preparación y calentamiento del horno de tierra explicados por los agricultores, aprovechando el calor acumulado para cocinar los tubérculos, con colaboración de los visitantes solo en tareas que no impliquen riesgos.",
          },
          {
            momento: "Mediodía",
            actividad:
              "Comida compartida con los productores: papas de la huatía acompañadas de otros alimentos locales.",
          },
          {
            momento: "Tarde",
            actividad:
              "Conversación sobre la economía agrícola: costes de producción, precio de venta de los productos y papel de los intermediarios.",
          },
          {
            momento: "Tarde",
            actividad: "Regreso a Andahuaylas.",
          },
        ],
      },
      {
        dia: 3,
        titulo: "San Jerónimo y Cupisa: patrimonio y artesanía",
        resumen:
          "Templo de San Jerónimo —arquitectura, historia colonial y significado religioso y patrimonial— y comunidad de Cupisa, cuyo carnaval fue declarado Patrimonio Cultural de la Nación en 2019. Encuentro con artesanos o conocedores de las prendas tradicionales: materiales, técnicas y significado dentro de la celebración, en la que la música, la danza y la indumentaria son centrales. Taller participativo de bordado con una pequeña muestra textil; no se busca confeccionar una prenda completa, sino comprender el trabajo y los conocimientos que requiere. Comida compartida y conversación sobre el Carnaval de Cupisa y la transmisión de las tradiciones entre generaciones.",
        momentos: [
          {
            momento: "Mañana",
            actividad: "Desplazamiento a San Jerónimo.",
          },
          {
            momento: "Mañana",
            actividad:
              "Visita al templo de San Jerónimo: características arquitectónicas, relación con la historia colonial e importancia como espacio religioso y patrimonial.",
          },
          {
            momento: "Mañana",
            actividad: "Desplazamiento a la comunidad de Cupisa.",
          },
          {
            momento: "Mañana",
            actividad:
              "Encuentro con artesanos o personas conocedoras de las prendas tradicionales del carnaval: materiales, técnicas de elaboración y significado dentro de la celebración.",
          },
          {
            momento: "Mediodía",
            actividad:
              "Taller participativo de bordado: observación del trabajo de los anfitriones y elaboración de una pequeña muestra textil.",
          },
          {
            momento: "Mediodía",
            actividad: "Comida compartida con los participantes locales.",
          },
          {
            momento: "Tarde",
            actividad:
              "Conversación sobre el significado del Carnaval de Cupisa, declarado Patrimonio Cultural de la Nación en 2019, y la transmisión de estas tradiciones entre generaciones.",
          },
          {
            momento: "Tarde",
            actividad: "Regreso a Andahuaylas.",
          },
        ],
      },
      {
        dia: 4,
        titulo: "Pacucha y Sóndor: paisaje y memoria Chanka",
        resumen:
          "Recorrido por el entorno de la laguna de Pacucha: paisaje, importancia ambiental y relación con las actividades de la población, entendiendo el paisaje como un espacio con funciones ambientales, económicas y culturales. Comida en Pacucha y visita al complejo arqueológico de Sóndor, uno de los principales recursos patrimoniales de Andahuaylas, con guía especializado: elementos arquitectónicos y ocupaciones, emplazamiento y relación con el paisaje, y vigencia de la memoria Chanka. Referencia al Sóndor Raymi, escenificación de la epopeya Chanka que se celebra tradicionalmente en junio y utiliza como escenarios la laguna y el conjunto arqueológico.",
        momentos: [
          {
            momento: "Mañana",
            actividad: "Salida de Andahuaylas hacia el distrito de Pacucha.",
          },
          {
            momento: "Mañana",
            actividad:
              "Recorrido por el entorno de la laguna de Pacucha: características del paisaje, importancia ambiental y relación con las actividades de la población.",
          },
          {
            momento: "Mañana",
            actividad:
              "Interpretación del paisaje como espacio con funciones ambientales, económicas y culturales, no solo como escenario para fotografiar.",
          },
          {
            momento: "Mediodía",
            actividad: "Comida en Pacucha.",
          },
          {
            momento: "Tarde",
            actividad:
              "Traslado al complejo arqueológico de Sóndor y visita acompañada por un guía especializado.",
          },
          {
            momento: "Tarde",
            actividad:
              "Elementos arquitectónicos del conjunto y distintas ocupaciones históricas del lugar.",
          },
          {
            momento: "Tarde",
            actividad: "Emplazamiento y relación con el paisaje circundante.",
          },
          {
            momento: "Tarde",
            actividad:
              "Memoria Chanka y su importancia en la identidad cultural de Andahuaylas; referencia al Sóndor Raymi, celebrado tradicionalmente en junio.",
          },
          {
            momento: "Tarde",
            actividad: "Regreso a Andahuaylas.",
          },
        ],
      },
      {
        dia: 5,
        titulo: "Encuentro final y memoria de la experiencia",
        resumen:
          "Encuentro de cierre entre visitantes y representantes de las actividades agrícolas, artesanales y culturales del itinerario, para compartir lo vivido y relacionar la agricultura y la gastronomía, las técnicas de Cupisa y el patrimonio natural e histórico de Pacucha y Sóndor. Comida de despedida y entrega de la «Caja de la memoria cultural de Andahuaylas».",
        momentos: [
          {
            momento: "Mañana",
            actividad:
              "Encuentro de cierre con representantes de las actividades agrícolas, artesanales y culturales.",
          },
          {
            momento: "Mañana",
            actividad:
              "Intercambio de experiencias y relación entre la agricultura y la gastronomía, las técnicas artesanales de Cupisa y el patrimonio natural e histórico de Pacucha y Sóndor.",
          },
          {
            momento: "Mediodía",
            actividad: "Comida de despedida.",
          },
          {
            momento: "Tarde",
            actividad:
              "Entrega de la «Caja de la memoria cultural de Andahuaylas»: figura artesanal vinculada a la memoria Chanka, muestra de bordado de participantes de Cupisa, miniatura inspirada en una variedad de papa cultivada en la zona y postal de la laguna de Pacucha o del complejo arqueológico de Sóndor.",
          },
          {
            momento: "Tarde",
            actividad: "Fin de la experiencia y salida (horario a coordinar).",
          },
        ],
      },
    ],
    antesDeViajar: [
      "La ruta se plantea para grupos de ocho a doce personas, con transporte contratado y acompañamiento local.",
      "El recorrido cuenta con guía o coordinador; en las actividades agrícolas y artesanales, los protagonistas son los propios productores y artesanos.",
      "Las actividades con agricultores, artesanos y comunidades requieren acuerdo previo y remuneración de los participantes.",
      "La actividad agrícola participativa depende del calendario de cultivo: en cosecha puede consistir en selección y clasificación de tubérculos; en otras épocas, en demostraciones sobre semillas y variedades.",
      "El Sóndor Raymi se celebra tradicionalmente en junio; no se fija una fecha concreta y su coincidencia con el viaje debe confirmarse.",
      "Coordinar con el Ministerio de Cultura las visitas al patrimonio arqueológico y con las municipalidades de Talavera, San Jerónimo y Pacucha.",
      "Coordinar con la Municipalidad Provincial de Andahuaylas, que puede articular a los distritos, y con la DIRCETUR de Apurímac para identificar prestadores de servicios y comprobar su situación administrativa.",
      "Confirmar servicios, costes y horarios antes de comercializar el itinerario: las colaboraciones institucionales son propuestas pendientes de negociación.",
      "No se organizan representaciones del carnaval fuera de su contexto: el encuentro es conversación e intercambio.",
      "La disponibilidad de variedades concretas en el mercado se comprueba según la temporada.",
    ],
    recuerdo: {
      titulo: "Caja de la memoria cultural de Andahuaylas (propuesta)",
      descripcion:
        "Figura artesanal vinculada a la memoria Chanka, muestra de bordado elaborada por participantes de Cupisa, miniatura inspirada en una variedad de papa cultivada en la zona y postal de la laguna de Pacucha o del complejo arqueológico de Sóndor.",
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
    video: {
      src: "/video/itinerarios/circuito-norte.mp4",
      poster: "/img/provincias/abancay/canon-miradores/01.jpg",
    },
    dias: [
      {
        dia: 1,
        titulo: "Chalhuanca: historia y sabores",
        resumen:
          "Instalación en alojamiento local, paseo con explicación histórica por la ciudad y la plaza, mercado con productos agrícolas y gastronomía —con taller opcional de cocina y hierbas—, paseo por la naturaleza y cena de bienvenida.",
        momentos: [],
      },
      {
        dia: 2,
        titulo: "Caraybamba: agricultura y fortalezas",
        resumen:
          "Agricultura de montaña, manejo del agua y saberes campesinos; taller participativo con agricultores o comuneros y almuerzo comunitario; fortaleza inca de Sachaqoto Chuquinga y sitio de Apaqsa; cuaderno de paisaje con croquis de andenes y patrimonio. Regreso a Chalhuanca.",
        momentos: [],
      },
      {
        dia: 3,
        titulo: "Cañón del Apurímac y termas de Pincahuacho",
        resumen:
          "Ruta por el cañón y sus miradores seguros, fotografía y cuadernos de dibujo, comida grupal y descanso en las termas de Pincahuacho, con cena de productos locales de temporada.",
        momentos: [],
      },
      {
        dia: 4,
        titulo: "Cocharcas: santuario y comunidad",
        resumen:
          "Instalación en el alojamiento, paisaje rural y plazas, almuerzo de platos picantes, visita guiada al santuario de Cocharcas, charlas con las comunidades y cena grupal.",
        momentos: [],
      },
      {
        dia: 5,
        titulo: "Lagunas altoandinas y Huaccana chanka",
        resumen:
          "Laguna de Yanahuarmi o Torojocha según la estación, caminata y comida grupal al aire libre (previa autorización), y Huaccana: explicación histórica chanka y talleres con la comunidad. Cena y entrega de un recuerdo final inspirado en la ruta (propuesta).",
        momentos: [],
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
    duracion: "5 días",
    destinos: ["Chuquibambilla", "Mamara", "Tambobamba", "Antabamba", "Hayllaripa"],
    tipoExperiencia: ["Turismo cultural", "Comunidades", "Patrimonio religioso", "Naturaleza altoandina"],
    publico:
      "Jóvenes y adultos de 25 a 45 años en busca de destinos menos visitados, aventura, cultura con interacción comunitaria y turismo ecológico.",
    resumen:
      "Ruta por Grau, Cotabambas y Antabamba: Chuquibambilla y el sistema Vilcanota-Apurímac, iglesia colonial de Mamara, Tambobamba y Qaqa cárcel, Antabamba y el templo de Hayllaripa con caminata e interpretación ambiental.",
    imagen: {
      src: "/img/provincias/grau/mamara/01.jpg",
      alt: "Arco de piedra tallado y fachada de la iglesia colonial de Mamara, Grau",
    },
    galeria: [
      {
        src: "/img/provincias/cotabambas/ccacca-carcel/04.jpg",
        alt: "Camino de piedra hacia la cárcel de piedra, Cotabambas",
        leyenda: "Cárcel de piedra · Día 3",
      },
      {
        src: "/img/provincias/grau/mamara/03.jpg",
        alt: "Fachada lateral y campanario de la iglesia colonial de Mamara, Grau",
        leyenda: "Iglesia colonial de Mamara · Día 2",
      },
      {
        src: "/img/provincias/cotabambas/ccacca-carcel/03.jpg",
        alt: "Fachada tallada en la roca de la cárcel de piedra, Cotabambas",
        leyenda: "Detalle de la roca · Día 3",
      },
    ],
    video: {
      src: "/video/itinerarios/circuito-sur.mp4",
      poster: "/img/provincias/antabamba/ccocho/01.jpg",
    },
    dias: [
      {
        dia: 1,
        titulo: "Chuquibambilla: historia y geografía viva",
        resumen:
          "Instalación en alojamiento local, presentación del itinerario, tour histórico a pie con juego de pistas, comida grupal de gastronomía local, visita al sistema Vilcanota-Apurímac y taller interactivo de geografía e historia agrícola. Cena degustación.",
        momentos: [],
      },
      {
        dia: 2,
        titulo: "Mamara: iglesia colonial y comunidad",
        resumen:
          "Visita guiada a la iglesia colonial de Mamara —lectura religiosa, histórica y patrimonial—, comida, talleres y mercado con comunidades locales, demostración de técnicas artesanales y música. Cena y regreso a Chuquibambilla.",
        momentos: [],
      },
      {
        dia: 3,
        titulo: "Cotabambas: Tambobamba y Qaqa cárcel",
        resumen:
          "Traslado a Cotabambas, paseo por la capital, comida comunal y visita guiada a Tambobamba-Qaqa cárcel con sus relatos locales y significados. Cena.",
        momentos: [],
      },
      {
        dia: 4,
        titulo: "Llegada a Antabamba",
        resumen:
          "Paseo guiado por la ciudad —plaza de Armas y mercado—, ruta gastronómica con explicación de los productos de altura y actividades culturales. Cena.",
        momentos: [],
      },
      {
        dia: 5,
        titulo: "Hayllaripa: templo, caminata y cierre",
        resumen:
          "Templo colonial de Hayllaripa —valores históricos, religiosos, artísticos y comunitarios—, caminata ajustada al grupo y al clima, interpretación ambiental (agua, vegetación de altura, pastoreo y degradación), almuerzo comunitario o picnic sostenible en lugar permitido, taller con la comunidad y cierre con entrega del token (propuesta).",
        momentos: [],
      },
    ],
    antesDeViajar: [
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

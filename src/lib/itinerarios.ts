export interface MomentoDia {
  /** Bloque del día tal como se describe en el documento; no implica una hora exacta. */
  momento: string;
  actividad: string;
}
export interface HorarioDia {
  /** Franja horaria tal como aparece en el documento de la ruta. */
  hora: string;
  actividad: string;
  lugar?: string;
  /** Indicaciones operativas o de seguridad asociadas a la actividad. */
  notas?: string;
}
export interface DiaItinerario {
  dia: number;
  titulo: string;
  resumen: string;
  momentos: MomentoDia[];
  /** Horario detallado cuando el documento de la ruta lo especifica. */
  horario?: HorarioDia[];
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
    duracion: "6 días",
    base: "Alojamientos locales en Chalhuanca, Pincahuacho o Cocharcas, según la etapa y disponibilidad.",
    destinos: [
      "Chalhuanca",
      "Caraybamba",
      "Sachaqoto Chuquinga y Apaqsa",
      "Cañón del Apurímac",
      "Pincahuacho",
      "Cocharcas",
      "Yanahuarmi",
      "Huaccana",
    ],
    tipoExperiencia: ["Turismo cultural", "Comunidades", "Patrimonio religioso", "Naturaleza y termas", "Turismo ecológico"],
    publico:
      "Jóvenes y adultos de 25 a 45 años en busca de destinos menos visitados, aventura, cultura con interacción comunitaria y turismo ecológico.",
    resumen:
      "Seis días por Aymaraes y Chincheros: Chalhuanca histórica y gastronómica, agricultura y fortalezas en Caraybamba, cañón del Apurímac, termas de Pincahuacho, santuario de Cocharcas y cierre en la laguna de Yanahuarmi y Huaccana, de raíz chanka. Las actividades se presentan como propuesta: ninguna está confirmada.",
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
          "Llegada y recepción en Chalhuanca, instalación y descanso, paseo histórico por el centro y la plaza, mercado y degustación de productos locales, taller opcional de cocina y hierbas, paseo de naturaleza y cena de bienvenida con espectáculo cultural.",
        momentos: [],
        horario: [
          {
            hora: "08:00–11:00",
            actividad: "Llegada, recepción y presentación del itinerario",
            lugar: "Chalhuanca",
            notas:
              "Bienvenida en el alojamiento conveniado; entrega de información, normas de seguridad y contacto del guía.",
          },
          {
            hora: "11:00–12:00",
            actividad: "Instalación y descanso inicial",
            lugar: "Alojamiento local",
            notas: "Check-in y acomodación.",
          },
          {
            hora: "12:00–13:30",
            actividad: "Paseo histórico por Chalhuanca y plaza principal",
            lugar: "Centro histórico",
            notas:
              "Visita guiada tipo free tour incluida: patrimonio colonial, historia local y presentación del paisaje urbano. Chalhuanca conserva iglesias coloniales con tallados en madera y pan de oro.",
          },
          {
            hora: "13:30–15:00",
            actividad: "Mercado y degustación",
            lugar: "Mercado de Chalhuanca",
            notas: "Papa nativa, huactay, huatía, moraya y picante de trigo.",
          },
          {
            hora: "15:00–16:30",
            actividad: "Taller opcional de cocina y hierbas locales",
            lugar: "Local gastronómico o mercado",
            notas:
              "Actividad opcional; requiere reserva previa y coordinación con una familia o cocinera local.",
          },
          {
            hora: "16:30–18:00",
            actividad: "Paseo de naturaleza y observación de flora y fauna",
            lugar: "Entorno inmediato de Chalhuanca",
            notas: "Ruta suave, con paradas interpretativas.",
          },
          {
            hora: "19:30–21:30",
            actividad: "Cena de bienvenida y espectáculo cultural",
            lugar: "Restaurante o espacio comunitario",
            notas:
              "Música tradicional, artistas locales, pequeña representación teatral y dinámica grupal.",
          },
        ],
      },
      {
        dia: 2,
        titulo: "Caraybamba: agricultura y fortalezas",
        resumen:
          "Traslado a Caraybamba para agricultura de montaña y manejo del agua; taller participativo con agricultores o comuneros y almuerzo comunitario; traslado y visita guiada a Sachaqoto Chuquinga y Apaqsa; interpretación histórica y regreso a Chalhuanca.",
        momentos: [],
        horario: [
          {
            hora: "07:30–08:15",
            actividad: "Desayuno y salida hacia Caraybamba",
            lugar: "Chalhuanca → Caraybamba",
            notas: "Trayecto estimado: 30–45 minutos.",
          },
          {
            hora: "08:15–09:30",
            actividad: "Agricultura de montaña y manejo del agua",
            lugar: "Andenerías de Caraybamba",
            notas:
              "Explicación sobre cultivos locales, semillas nativas, guano, rotación de tierras y relación con la Pachamama. Las andenerías son un recurso reconocido del paisaje agrario de Aymaraes.",
          },
          {
            hora: "09:30–12:00",
            actividad: "Taller participativo con agricultores o comuneros",
            lugar: "Comunidad de Caraybamba",
            notas:
              "Siembra, selección de semillas, compost, labores tradicionales o preparación de alimentos estacionales.",
          },
          {
            hora: "12:00–13:30",
            actividad: "Almuerzo comunitario",
            lugar: "Comunidad de Caraybamba",
            notas:
              "Menú basado en productos de temporada; conviene variarlo según la época de visita.",
          },
          {
            hora: "13:30–15:30",
            actividad: "Traslado hacia Sachaqoto Chuquinga y Apaqsa",
            lugar: "Caraybamba → Chalhuanca",
            notas: "Tiempo de bus estimado: 1 h 30–2 h.",
          },
          {
            hora: "15:30–17:30",
            actividad: "Visita guiada a Sachaqoto Chuquinga y Apaqsa",
            lugar: "Distrito de Chalhuanca",
            notas:
              "Sachaqoto Chuquinga es una fortaleza inca con piedras trabajadas; Apaqsa presenta restos preincas, chullpas y muros.",
          },
          {
            hora: "17:30–18:00",
            actividad: "Interpretación histórica y patrimonial",
            lugar: "Sitios visitados",
            notas:
              "Historia chanka, inca y colonial; valor material e inmaterial del territorio.",
          },
          {
            hora: "18:00–19:00",
            actividad: "Regreso a Chalhuanca",
            lugar: "Chalhuanca",
            notas: "Traslado corto.",
          },
          {
            hora: "19:30–21:00",
            actividad: "Cena libre o coordinada",
            lugar: "Chalhuanca",
            notas: "Recomendación de establecimientos locales.",
          },
        ],
      },
      {
        dia: 3,
        titulo: "Cañón del Apurímac: miradores y paisaje",
        resumen:
          "Salida temprana hacia el cañón del Apurímac; ruta por miradores seguros, comida grupal, descanso, exploración, fotografía y dibujo/interpretación del paisaje; regreso a Chalhuanca y cena de temporada.",
        momentos: [],
        horario: [
          {
            hora: "06:30–07:30",
            actividad: "Desayuno y salida temprana hacia el Cañón del Apurímac",
            lugar: "Chalhuanca → miradores",
            notas:
              "La salida temprana permite aprovechar la luz y evitar el calor de mediodía.",
          },
          {
            hora: "07:30–10:30",
            actividad: "Ruta por los alrededores y miradores seguros",
            lugar: "Cañón del Apurímac",
            notas:
              "La ruta puede tener variantes según condición física, clima y accesos.",
          },
          {
            hora: "10:30–12:00",
            actividad: "Comida grupal",
            lugar: "Área habilitada junto a la ruta",
            notas:
              "Picnic o almuerzo en espacio autorizado, con gestión de residuos.",
          },
          {
            hora: "12:00–13:00",
            actividad: "Descanso",
            lugar: "Zona de comida",
            notas: "Tiempo libre supervisado.",
          },
          {
            hora: "13:00–16:00",
            actividad: "Exploración, fotografía y dibujo/interpretación del paisaje",
            lugar: "Cañón del Apurímac",
            notas:
              "Actividad de educación ambiental y reflexión sobre biodiversidad.",
          },
          {
            hora: "16:00–17:30",
            actividad: "Regreso a Chalhuanca",
            lugar: "Chalhuanca",
            notas: "Tiempo flexible según la ruta elegida.",
          },
          {
            hora: "19:30–21:00",
            actividad: "Cena con productos locales de temporada",
            lugar: "Chalhuanca",
            notas: "Menú diferenciado por estación.",
          },
        ],
      },
      {
        dia: 4,
        titulo: "Pincahuacho: termas y descanso",
        resumen:
          "Jornada de menor exigencia: traslado a los baños termales de Pincahuacho, uso por turnos, comida ligera, tiempo libre y regreso o instalación en Chalhuanca —con alternativa de pernoctar en Pincahuacho—, paseo rural y cena.",
        momentos: [],
        horario: [
          {
            hora: "08:00–09:00",
            actividad: "Desayuno y preparación para el día de descanso",
            lugar: "Chalhuanca",
            notas: "Jornada de menor exigencia física.",
          },
          {
            hora: "09:00–10:00",
            actividad: "Traslado a los baños termales de Pincahuacho",
            lugar: "Chalhuanca → Pincahuacho",
            notas:
              "Aproximadamente 7 km; las fuentes recogen entre 15 y 30 minutos de recorrido.",
          },
          {
            hora: "10:00–12:00",
            actividad: "Baños termales",
            lugar: "Pincahuacho",
            notas:
              "Uso por turnos, hidratación y recomendaciones médicas para personas con hipertensión, embarazo o afecciones cardíacas.",
          },
          {
            hora: "12:30–14:00",
            actividad: "Comida con productos locales",
            lugar: "Pincahuacho o alrededores",
            notas: "Menú ligero, adecuado tras la actividad térmica.",
          },
          {
            hora: "14:00–16:00",
            actividad: "Tiempo libre y descanso",
            lugar: "Pincahuacho",
            notas: "Opción de segunda sesión termal o paseo tranquilo.",
          },
          {
            hora: "16:00–17:30",
            actividad: "Traslado e instalación en alojamiento",
            lugar: "Pincahuacho → Chalhuanca",
            notas:
              "Alternativa: pernoctar en Pincahuacho si existe alojamiento adecuado.",
          },
          {
            hora: "17:30–18:30",
            actividad: "Paseo por el entorno rural y las plazas",
            lugar: "Chalhuanca",
            notas: "Caminata suave y observación del paisaje.",
          },
          {
            hora: "19:30–21:00",
            actividad: "Cena con platos característicos",
            lugar: "Chalhuanca",
            notas: "Cierre tranquilo de la jornada.",
          },
        ],
      },
      {
        dia: 5,
        titulo: "Cocharcas: santuario y comunidad",
        resumen:
          "Traslado a Cocharcas con parada técnica; visita guiada al santuario, almuerzo de platos picantes, charlas comunitarias y artesanías, tiempo libre y cena.",
        momentos: [],
        horario: [
          {
            hora: "07:00–08:00",
            actividad: "Desayuno y salida hacia Cocharcas",
            lugar: "Chalhuanca → Cocharcas",
            notas: "Traslado estimado: 3–4 horas, con parada técnica.",
          },
          {
            hora: "11:00–12:30",
            actividad: "Visita guiada al Santuario de Cocharcas",
            lugar: "Cocharcas",
            notas:
              "Explicación histórica, devocional, arquitectónica y patrimonial.",
          },
          {
            hora: "12:30–14:00",
            actividad: "Almuerzo con platos picantes característicos",
            lugar: "Cocharcas",
            notas: "Gastronomía local como eje de identidad.",
          },
          {
            hora: "14:00–16:30",
            actividad: "Charlas comunitarias y artesanías",
            lugar: "Cocharcas",
            notas:
              "Encuentro con comunidades locales, transmisión de costumbres y exposición/venta de artesanía.",
          },
          {
            hora: "16:30–18:00",
            actividad: "Tiempo libre",
            lugar: "Cocharcas",
            notas: "Descanso o paseo por el pueblo.",
          },
          {
            hora: "19:30–21:00",
            actividad: "Cena libre con recomendaciones",
            lugar: "Cocharcas",
            notas: "Los guías deben indicar lugares seguros y de calidad.",
          },
        ],
      },
      {
        dia: 6,
        titulo: "Yanahuarmi y Huaccana: laguna y memoria chanka",
        resumen:
          "Salida a la laguna de Yanahuarmi; caminata interpretativa y comida grupal; traslado a Huaccana para explicación histórica chanka, talleres e interacción comunitaria, tiempo libre, cena de cierre y entrega del recuerdo.",
        momentos: [],
        horario: [
          {
            hora: "07:00–08:00",
            actividad: "Desayuno y salida hacia la laguna de Yanahuarmi",
            lugar: "Cocharcas → Yanahuarmi",
            notas: "Traslado estimado: 45 minutos–1 h 15.",
          },
          {
            hora: "08:00–10:30",
            actividad: "Caminata interpretativa por la laguna",
            lugar: "Laguna de Yanahuarmi",
            notas:
              "Observación de paisaje y biodiversidad; ritmo accesible.",
          },
          {
            hora: "10:30–12:00",
            actividad: "Comida grupal",
            lugar: "Zona habilitada cerca de la laguna",
            notas: "Menú ligero y producto local.",
          },
          {
            hora: "12:00–12:45",
            actividad: "Traslado a Huaccana",
            lugar: "Yanahuarmi → Huaccana",
            notas: "Trayecto estimado: 20–30 minutos.",
          },
          {
            hora: "12:45–14:00",
            actividad: "Explicación histórica sobre los chankas",
            lugar: "Huaccana",
            notas:
              "Contexto precolombino, territorio y memoria cultural.",
          },
          {
            hora: "14:00–16:30",
            actividad: "Talleres e interacción comunitaria",
            lugar: "Huaccana",
            notas:
              "Relación de la comunidad con la herencia chanka, artesanía, relatos y prácticas locales.",
          },
          {
            hora: "16:30–17:30",
            actividad: "Tiempo libre y preparación del cierre",
            lugar: "Huaccana",
            notas:
              "Espacio para compras responsables y despedidas.",
          },
          {
            hora: "18:00–19:30",
            actividad: "Cena de cierre",
            lugar: "Huaccana",
            notas: "Cena comunitaria o en restaurante local.",
          },
          {
            hora: "19:30–20:15",
            actividad: "Fin del recorrido y entrega del recuerdo",
            lugar: "Huaccana",
            notas:
              "Entrega del token conmemorativo, evaluación de satisfacción y despedida.",
          },
        ],
      },
    ],
    antesDeViajar: [
      "Ninguna actividad está confirmada: todo requiere verificación y coordinación previa.",
      "La laguna del sexto día (Yanahuarmi o Torojocha) depende de la estación.",
      "La comida al aire libre necesita autorización previa del lugar.",
      "El taller de cocina y hierbas del día 1 es opcional y requiere reserva previa.",
      "Las termas de Pincahuacho se usan por turnos; considerar las recomendaciones médicas para hipertensión, embarazo o afecciones cardíacas.",
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
      { provinciaSlug: "aymaraes", lugarId: "pincahuacho", dia: 4 },
      { provinciaSlug: "chincheros", lugarId: "cocharcas", dia: 5 },
      { provinciaSlug: "chincheros", lugarId: "yanahuarmi", dia: 6 },
      { provinciaSlug: "chincheros", lugarId: "toroccocha", dia: 6 },
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

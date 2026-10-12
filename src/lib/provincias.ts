export type TipoLugar =
  | "arqueologico"
  | "natural"
  | "termal"
  | "religioso"
  | "mirador"
  | "historico";

export const TIPO_LABEL: Record<TipoLugar, string> = {
  arqueologico: "Arqueológico",
  natural: "Natural",
  termal: "Termal",
  religioso: "Religioso",
  mirador: "Mirador",
  historico: "Histórico",
};

export interface Lugar {
  id: string;
  nombre: string;
  distrito: string;
  tipo: TipoLugar;
  descripcion: string;
  coords: [number, number];
  precision: "exacta" | "aproximada";
  imagenes: string[];
}

export interface FichaItem {
  nombre: string;
  descripcion: string;
  imagen?: string;
}

export interface Provincia {
  slug: string;
  nombre: string;
  capital: string;
  color: string;
  resumen: string;
  lugares: Lugar[];
  gastronomia: FichaItem[];
  agricultura: FichaItem[];
  vestimenta: FichaItem[];
}

export interface LugarEnriquecido extends Lugar {
  provincia: string;
  provinciaSlug: string;
  color: string;
}

export const PROVINCIAS: Provincia[] = [
  {
    slug: "abancay",
    nombre: "Abancay",
    capital: "Abancay",
    color: "#047857",
    resumen:
      "Capital regional y puerta de entrada a Apurímac. Ciudad de la eterna primavera al pie del nevado Ampay.",
    lugares: [
      {
        id: "ampay",
        nombre: "Santuario Nacional de Ampay",
        distrito: "Tamburco",
        tipo: "natural",
        descripcion:
          "Única área natural protegida de Apurímac. Bosque de intimpas, lagunas Angasq'ocha, Uspaq'ocha y Huillcaq'ocha, catarata Faccha y el nevado Ampay (5 235 m).",
        coords: [-72.89, -13.579],
        precision: "exacta",
        imagenes: [
          "/img/provincias/abancay/ampay/01.jpg",
          "/img/provincias/abancay/ampay/02.jpg",
          "/img/provincias/abancay/ampay/03.webp",
          "/img/provincias/abancay/ampay/04.jpg",
        ],
      },
      {
        id: "saywite",
        nombre: "Conjunto arqueológico de Saywite",
        distrito: "Curahuasi",
        tipo: "arqueologico",
        descripcion:
          "Famoso monolito inca tallado con más de 200 figuras: canales, andenes y animales. Posible maqueta ritual del sistema hidráulico.",
        coords: [-72.80303, -13.5472],
        precision: "exacta",
        imagenes: [
          "/img/provincias/abancay/saywite/01.jpg",
          "/img/provincias/abancay/saywite/02.jpg",
          "/img/provincias/abancay/saywite/03.jpg",
          "/img/provincias/abancay/saywite/04.jpg",
          "/img/provincias/abancay/saywite/05.jpg",
          "/img/provincias/abancay/saywite/06.jpg",
        ],
      },
      {
        id: "cconoc",
        nombre: "Baños termales de Cconoc",
        distrito: "Curahuasi",
        tipo: "termal",
        descripcion:
          "Aguas termomedicinales a orillas del río Apurímac, famosas contra la artritis, el reumatismo y dolores musculares.",
        coords: [-72.74, -13.515],
        precision: "aproximada",
        imagenes: [
          "/img/provincias/abancay/cconoc/01.jpg",
          "/img/provincias/abancay/cconoc/02.jpg",
          "/img/provincias/abancay/cconoc/03.jpg",
          "/img/provincias/abancay/cconoc/04.jpg",
          "/img/provincias/abancay/cconoc/05.jpg",
        ],
      },
      {
        id: "canon-miradores",
        nombre: "Miradores del Cañón del Apurímac",
        distrito: "Curahuasi · Cachora · Huanipaca",
        tipo: "mirador",
        descripcion:
          "Capitán Rumi, San Cristóbal y Capuliyoc: atalayas sobre uno de los cañones más profundos del planeta (4 691 m). Vuelo de cóndores y puerta a Choquequirao.",
        coords: [-72.805, -13.495],
        precision: "aproximada",
        imagenes: [
          "/img/provincias/abancay/canon-miradores/01.jpg",
          "/img/provincias/abancay/canon-miradores/02.jpg",
          "/img/provincias/abancay/canon-miradores/03.jpg",
          "/img/provincias/abancay/canon-miradores/04.jpg",
        ],
      },
      {
        id: "choquequirao",
        nombre: "Choquequirao (acceso por Cachora)",
        distrito: "San Pedro de Cachora",
        tipo: "arqueologico",
        descripcion:
          "La 'cuna de oro', ciudadela inca entre los Andes y la ceja de selva. Se llega en trek de 2 días cruzando el cañón desde Capuliyoc.",
        coords: [-72.8747, -13.3936],
        precision: "exacta",
        imagenes: [],
      },
      {
        id: "muralla-china",
        nombre: "Mirador Huayhuacalle 'Muralla China Andina'",
        distrito: "San Pedro de Cachora",
        tipo: "mirador",
        descripcion:
          "Mirador de muros de piedra serpenteantes inspirado en la Gran Muralla China, frente al Cañón del Apurímac, en la ruta a Choquequirao.",
        coords: [-72.815, -13.485],
        precision: "aproximada",
        imagenes: [],
      },
      {
        id: "pachachaca",
        nombre: "Puente colonial de Pachachaca",
        distrito: "Abancay",
        tipo: "historico",
        descripcion:
          "Puente colonial de piedra sobre el río Pachachaca, joya de la arquitectura virreinal en el valle agrícola de Abancay.",
        coords: [-72.9, -13.625],
        precision: "aproximada",
        imagenes: [],
      },
    ],
    gastronomia: [
      { nombre: "Tallarín de casa", descripcion: "Plato emblema abanquino: fideos artesanales de harina, huevo y mantequilla con estofado de gallina, kapchi o pepián de cuy." },
      { nombre: "Pepián y cuy relleno", descripcion: "Cuy frito en salsa espesa de ají colorado, huacatay y maní tostado; o entero relleno de hierbas aromáticas." },
      { nombre: "Kapchi y uchullachua", descripcion: "Salsas de quesillo con rocoto y huacatay que acompañan papas, chuño y tallarines." },
      { nombre: "Chicharrón y caña de Pachachaca", descripcion: "Cerdo jugoso con mote y papa dorada, acompañado del destilado de caña del valle." },
    ],
    agricultura: [
      { nombre: "Caña de azúcar", descripcion: "Valles de Pachachaca y Curahuasi: chancaca, azúcar y aguardiente desde la colonia." },
      { nombre: "Maíz y papa", descripcion: "Panllevar de los valles templados que abastece a la ciudad." },
      { nombre: "Frutales", descripcion: "Paltos y frutales de clima templado en el valle." },
    ],
    vestimenta: [
      { nombre: "Traje de carnaval abanquino", descripcion: "Polleras y chalecos de colores vivos con bordados, sombrero adornado con serpentinas." },
      { nombre: "Montera y lliclla", descripcion: "Montera bordada y lliclla tejida a mano de uso diario y festivo." },
    ],
  },
  {
    slug: "andahuaylas",
    nombre: "Andahuaylas",
    capital: "Andahuaylas",
    color: "#2563eb",
    resumen:
      "Tierra de los chankas: lagunas, ceremonias ancestrales y el bosque de piedras que parece de otro planeta.",
    lugares: [
      {
        id: "pacucha",
        nombre: "Laguna de Pacucha",
        distrito: "Pacucha",
        tipo: "natural",
        descripcion:
          "Una de las lagunas más grandes y bellas del Perú (728 ha, 3 200 m). Paseos en bote, pesca de trucha y pejerrey, avistamiento de aves y la 'pradera de los celajes' al atardecer.",
        coords: [-73.325, -13.6075],
        precision: "exacta",
        imagenes: [],
      },
      {
        id: "sondor",
        nombre: "Complejo arqueológico de Sóndor",
        distrito: "Pacucha",
        tipo: "arqueologico",
        descripcion:
          "Centro ceremonial chanka e inca con la colina aterrazada de Muyumuyu. Cada 19 de junio escenifica el Sóndor Raymi.",
        coords: [-73.268884, -13.606301],
        precision: "exacta",
        imagenes: [],
      },
      {
        id: "pampachiri",
        nombre: "Bosque de piedras de Pampachiri",
        distrito: "Pampachiri",
        tipo: "natural",
        descripcion:
          "Columnas volcánicas de hasta 20 m ('casas de los pitufos'), cerro Páncula y el géiser de Ronroxa. Origen: volcanes Sotaya y Jaruarazu.",
        coords: [-73.594, -14.178],
        precision: "aproximada",
        imagenes: [],
      },
      {
        id: "curamba",
        nombre: "Curamba o Inca Monte",
        distrito: "Kishuará",
        tipo: "arqueologico",
        descripcion:
          "Conjunto de andenerías y recintos asociados a la metalurgia y administración inca en la cuenca del Pampas.",
        coords: [-73.09, -13.69],
        precision: "aproximada",
        imagenes: [],
      },
      {
        id: "huascatay",
        nombre: "Mirador de Huascatay",
        distrito: "Pacobamba",
        tipo: "mirador",
        descripcion:
          "El 'mirador de miradores' del cañón: desde los 3 500 m se ve la unión de los ríos Pampas y Apurímac y la 'Oreja de Perro'.",
        coords: [-73.31, -13.52],
        precision: "aproximada",
        imagenes: [],
      },
    ],
    gastronomia: [
      { nombre: "Chairo", descripcion: "Sopa contundente de chinchulín de cordero o res con papas, trigo y hierbas." },
      { nombre: "Picante de quinua", descripcion: "Guiso nutritivo de quinua con ají y especias, con papas, carne o queso." },
      { nombre: "Trucha y pejerrey de Pacucha", descripcion: "Pescados frescos de la laguna, fritos o en sudado, en los restaurantes de la orilla." },
      { nombre: "Cuy chactado", descripcion: "Cuy frito crocante con papas doradas y ají molido." },
    ],
    agricultura: [
      { nombre: "Cebada, trigo y arveja", descripcion: "Cultivos de las chacras que rodean la laguna de Pacucha." },
      { nombre: "Tarwi y quinua", descripcion: "Granos andinos de alto valor nutritivo, base del picante de quinua." },
      { nombre: "Papa", descripcion: "Variedades nativas y comerciales en las comunidades altas." },
    ],
    vestimenta: [
      { nombre: "Traje chanka", descripcion: "Vestido bordado de fiesta con montera, usado en el Sóndor Raymi y carnavales." },
      { nombre: "Poncho y sombrero de faena", descripcion: "Poncho de lana y sombrero para el trabajo agrícola." },
    ],
  },
  {
    slug: "antabamba",
    nombre: "Antabamba",
    capital: "Antabamba",
    color: "#ea580c",
    resumen:
      "Puna brava de aguas termales, bosques de piedra y ciudadelas preincas entre los 3 500 y 4 600 m.",
    lugares: [
      {
        id: "huayllas",
        nombre: "Bosque de piedras Huayllas–Waylilayoc",
        distrito: "Antabamba",
        tipo: "natural",
        descripcion:
          "Misteriosas formaciones rocosas de la puna antabambina, recurso turístico emergente de la provincia.",
        coords: [-72.8, -14.35],
        precision: "aproximada",
        imagenes: [],
      },
      {
        id: "ccocho",
        nombre: "Baños termales de Ccocho",
        distrito: "Antabamba",
        tipo: "termal",
        descripcion:
          "Ojos de agua cristalina a 3 500 m a orillas del río Ccocho (45 °C), con propiedades contra dolores articulares y reumatismo.",
        coords: [-72.76, -14.36],
        precision: "aproximada",
        imagenes: [],
      },
      {
        id: "kilkata",
        nombre: "Baños termales de Kilkata",
        distrito: "Oropesa",
        tipo: "termal",
        descripcion:
          "A 3 800 m en la cuenca del río Totora: pozas comunitarias y un géiser natural de hasta 70 °C donde los visitantes cocinan huevos y carne.",
        coords: [-72.9, -14.28],
        precision: "aproximada",
        imagenes: [],
      },
      {
        id: "maucallacta-antabamba",
        nombre: "Maucallacta y restos preincas",
        distrito: "Mollebamba",
        tipo: "arqueologico",
        descripcion:
          "Ciudadelas, muros y andenerías preincas e incas: Maucallacta, Arcopunco, Calvario y la andenería Huanca.",
        coords: [-72.95, -14.4],
        precision: "aproximada",
        imagenes: [],
      },
    ],
    gastronomia: [
      { nombre: "Huatia", descripcion: "Papas cocidas bajo tierra sobre piedras calientes, plato prehispánico de siembra y cosecha." },
      { nombre: "Kapchi de chuño", descripcion: "Salsa de quesillo y rocoto con chuño remojado y picado." },
      { nombre: "Charqui con mote", descripcion: "Carne seca de res o alpaca salteada con mote de maíz blanco." },
    ],
    agricultura: [
      { nombre: "Papa nativa, oca y olluco", descripcion: "Tubérculos de altura adaptados a la puna." },
      { nombre: "Camélidos y ovinos", descripcion: "Alpacas, llamas y ovejas: fibra, carne y abono para las chacras." },
    ],
    vestimenta: [
      { nombre: "Poncho grueso de puna", descripcion: "Poncho pesado de lana contra el frío altoandino." },
      { nombre: "Montera bordada de fiesta", descripcion: "Montera con bordados de colores para danzas y aniversarios." },
    ],
  },
  {
    slug: "aymaraes",
    nombre: "Aymaraes",
    capital: "Chalhuanca",
    color: "#9333ea",
    resumen:
      "Provincia más extensa de Apurímac: termas, puyas Raimondi y fortalezas preincas en el corredor Abancay–Cusco.",
    lugares: [
      {
        id: "pincahuacho",
        nombre: "Baños termales de Pincahuacho",
        distrito: "Chalhuanca",
        tipo: "termal",
        descripcion:
          "Aguas medicinales a 3 160 m, a quince minutos de Chalhuanca, con piscinas, vestidores y duchas. Alivian estrés, artritis y reumatismo.",
        coords: [-73.22, -14.27],
        precision: "aproximada",
        imagenes: [],
      },
      {
        id: "puyas",
        nombre: "Bosques de puya Raimondi y queuña",
        distrito: "Chapimarca",
        tipo: "natural",
        descripcion:
          "Rodales de titankas (puyas de hasta 10 m que florecen una vez en un siglo) asociados a bosques de queuña altoandina.",
        coords: [-73.1, -14.2],
        precision: "aproximada",
        imagenes: [],
      },
      {
        id: "chuquinga",
        nombre: "Fortaleza de Chuquinga",
        distrito: "Chalhuanca",
        tipo: "arqueologico",
        descripcion:
          "Fortaleza inca de piedras trabajadas (Sachaqoto Chuquinga), parte de la red defensiva del Chinchaysuyo junto a Huitec y Pucahuasi.",
        coords: [-73.3, -14.35],
        precision: "aproximada",
        imagenes: [],
      },
    ],
    gastronomia: [
      { nombre: "Chairo aymarino", descripcion: "Sopa de menudencias con trigo, papa y chuño, plato de faenas y fiestas." },
      { nombre: "Charqui con mote", descripcion: "Clásico andino de carne seca y maíz pelado." },
      { nombre: "Trucha", descripcion: "De los ríos de altura, frita con papas doradas." },
    ],
    agricultura: [
      { nombre: "Maíz y papa en valles", descripcion: "Valles interandinos de clima templado." },
      { nombre: "Trigo", descripcion: "Cultivo tradicional de las laderas." },
      { nombre: "Ganadería vacuna y ovina", descripcion: "Base económica junto a la agricultura." },
    ],
    vestimenta: [
      { nombre: "Traje de fiesta aymarino", descripcion: "Vestidos bordados y chalecos con iconografía local." },
      { nombre: "Lliclla y montera", descripcion: "Manta tejida y montera de uso cotidiano." },
    ],
  },
  {
    slug: "chincheros",
    nombre: "Chincheros",
    capital: "Chincheros",
    color: "#e11d48",
    resumen:
      "Tierra de lagunas, del santuario barroco de Cocharcas y de los valles más fértiles de Apurímac.",
    lugares: [
      {
        id: "cocharcas",
        nombre: "Santuario de la Virgen de Cocharcas",
        distrito: "Cocharcas",
        tipo: "religioso",
        descripcion:
          "Templo barroco de sillar (1598–1623) con cúpula de azulejos, altar de pan de oro y lienzos de la escuela cusqueña. Peregrinación cada setiembre.",
        coords: [-73.705, -13.605],
        precision: "aproximada",
        imagenes: [],
      },
      {
        id: "yanahuarmi",
        nombre: "Laguna Yanahuarmi y cascada",
        distrito: "Chincheros",
        tipo: "natural",
        descripcion:
          "'Mujer negra' en quechua: laguna a 3 900 m con totorales y una cascada de más de 100 m que baja de Toroccocha.",
        coords: [-73.76, -13.52],
        precision: "aproximada",
        imagenes: [],
      },
      {
        id: "toroccocha",
        nombre: "Laguna Toroccocha",
        distrito: "Chincheros",
        tipo: "natural",
        descripcion:
          "Espejo de agua a 4 200 m, a cuarenta minutos de Yanahuarmi. Pesca deportiva y pastoreo altoandino en estado casi virgen.",
        coords: [-73.77, -13.5],
        precision: "aproximada",
        imagenes: [],
      },
      {
        id: "bombon",
        nombre: "Meseta del Bombón",
        distrito: "Tejahuasi",
        tipo: "arqueologico",
        descripcion:
          "Ruinas chankas en la meseta del centro poblado de Tejahuasi, con andenerías y recintos de piedra.",
        coords: [-73.68, -13.55],
        precision: "aproximada",
        imagenes: [],
      },
    ],
    gastronomia: [
      { nombre: "Cuy chincherino", descripcion: "Cuy al horno o frito con tallarines de casa y llatan." },
      { nombre: "Chicharrón con mote", descripcion: "Cerdo crocante de fiesta dominical." },
      { nombre: "Chicha de jora", descripcion: "Aqha fermentada de maíz, bebida ritual y festiva." },
    ],
    agricultura: [
      { nombre: "Valles fértiles multi-piso", descripcion: "De los 1 000 a los 4 500 m: cada piso ecológico con su cultivo." },
      { nombre: "Caña y frutales", descripcion: "Caña de azúcar y frutales en el valle del Pampas." },
      { nombre: "Papa y maíz", descripcion: "Base alimentaria de la campiña chincherina." },
    ],
    vestimenta: [
      { nombre: "Traje chincherino de fiesta", descripcion: "Bordados dedicados a la Virgen del Carmen, patrona local." },
      { nombre: "Vestido de pastora", descripcion: "Pollera, lliclla y sombrero de las zonas altas." },
    ],
  },
  {
    slug: "cotabambas",
    nombre: "Cotabambas",
    capital: "Tambobamba",
    color: "#0891b2",
    resumen:
      "Historia colonial tallada en piedra y templos virreinales entre el cañón y las punas del sur apurimeño.",
    lugares: [
      {
        id: "ccacca-carcel",
        nombre: "Ccacca cárcel de piedra",
        distrito: "Haquira",
        tipo: "historico",
        descripcion:
          "Peña de 12 × 15 m usada como cárcel colonial a 200 m de la plaza de Haquira, con tribunal y carceletas separadas para hombres y mujeres.",
        coords: [-72.652, -14.222],
        precision: "aproximada",
        imagenes: [],
      },
      {
        id: "templo-mara",
        nombre: "Templo colonial de Mara",
        distrito: "Mara",
        tipo: "religioso",
        descripcion:
          "Templo virreinal de adobe y piedra con plaza de toros (Plaza Pata) al lado, centro festivo del distrito.",
        coords: [-72.71, -13.99],
        precision: "aproximada",
        imagenes: [],
      },
      {
        id: "huallpachaca",
        nombre: "Puente Huallpachaca y el cañón",
        distrito: "Tambobamba",
        tipo: "mirador",
        descripcion:
          "Puente sobre el Apurímac donde inicia la ruta de canotaje Huallpachaca–Cconoc, entre rápidos clase III a V.",
        coords: [-72.63, -13.62],
        precision: "aproximada",
        imagenes: [],
      },
    ],
    gastronomia: [
      { nombre: "Cuy al horno", descripcion: "Cuy de corral al horno de leña con papas nativas." },
      { nombre: "Huatia cotabambina", descripcion: "Papas y ocas bajo tierra en época de cosecha." },
      { nombre: "Mondongo", descripcion: "Caldo de panza de res con mote y hierbabuena." },
    ],
    agricultura: [
      { nombre: "Papa y habas", descripcion: "Cultivos de altura de las comunidades." },
      { nombre: "Maíz", descripcion: "Maíz de valle para mote y chicha." },
      { nombre: "Ganado ovino y vacuno", descripcion: "Ganadería extensiva de puna." },
    ],
    vestimenta: [
      { nombre: "Poncho cotabambino", descripcion: "Poncho listado de lana teñida con tintes naturales." },
      { nombre: "Montera de lana", descripcion: "Montera abrigada para la puna fría." },
    ],
  },
  {
    slug: "grau",
    nombre: "Grau",
    capital: "Chuquibambilla",
    color: "#65a30d",
    resumen:
      "Punas de vicuñas y cóndores, iglesias coloniales y arte rupestre en el sur de Apurímac.",
    lugares: [
      {
        id: "mamara",
        nombre: "Iglesia colonial de Mamara",
        distrito: "Mamara",
        tipo: "religioso",
        descripcion:
          "Iglesia virreinal de piedra con el molino incaico de Molino Huaycco en sus alrededores.",
        coords: [-72.6, -14.13],
        precision: "aproximada",
        imagenes: [],
      },
      {
        id: "occocco",
        nombre: "Lagunas Occocco y Lliullita",
        distrito: "Chuquibambilla",
        tipo: "natural",
        descripcion:
          "Lagunas altoandinas donde se observan vicuñas, cóndores, huallatas y patos silvestres.",
        coords: [-72.55, -14.2],
        precision: "aproximada",
        imagenes: [],
      },
      {
        id: "pintasca",
        nombre: "Pinturas rupestres de Pintasca",
        distrito: "Chuquibambilla",
        tipo: "arqueologico",
        descripcion:
          "Abrigos con pintura rupestre junto a las fortalezas incas de Paya Paya y Pukara.",
        coords: [-72.63, -14.1],
        precision: "aproximada",
        imagenes: [],
      },
    ],
    gastronomia: [
      { nombre: "Kapchi grauino", descripcion: "Salsa de quesillo, rocoto y huacatay con papas nativas." },
      { nombre: "Cuy relleno", descripcion: "Receta festiva con hierbas de la puna." },
      { nombre: "Tortilla de olluco", descripcion: "Tortilla de olluco picado con queso." },
    ],
    agricultura: [
      { nombre: "Papa nativa y quinua", descripcion: "Diversidad de papas amargas y dulces de altura." },
      { nombre: "Tarwi", descripcion: "Lupino andino fijador de nitrógeno." },
      { nombre: "Camélidos", descripcion: "Alpacas y llamas de las punas comunales." },
    ],
    vestimenta: [
      { nombre: "Traje grauino de lana", descripcion: "Tejidos gruesos de lana de oveja y alpaca." },
      { nombre: "Chullo y poncho", descripcion: "Abrigo diario contra el frío de la puna." },
    ],
  },
];

/** Todos los lugares con su provincia y color, listos para el mapa. */
export const LUGARES: LugarEnriquecido[] = PROVINCIAS.flatMap((p) =>
  p.lugares.map((l) => ({
    ...l,
    provincia: p.nombre,
    provinciaSlug: p.slug,
    color: p.color,
  }))
);

export function provinciaPorSlug(slug: string): Provincia | undefined {
  return PROVINCIAS.find((p) => p.slug === slug);
}

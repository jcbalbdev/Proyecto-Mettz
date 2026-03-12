// Tipos para las ediciones
export interface EditionImage {
  src: string;
  alt: string;
  caption: string;
}

export interface FeaturedArticle {
  title: string;
  description: string;
  href: string;
}

export interface EditionDetail {
  slug: string;
  issueNumber: string;
  title: string;
  month: string;
  year: string;
  tagline: string;
  coverImage: string;
  heroImage: EditionImage;
  featuredImage: EditionImage;
  gridImages: {
    large: EditionImage;
    small1: EditionImage;
    small2: EditionImage;
  };
  fullWidthImage: EditionImage;
  closingImage: EditionImage;
  intro: { heading: string; paragraph: string };
  story: { heading: string; paragraph: string };
  darkSection: { heading: string; paragraph: string };
  quote: { text: string; cite: string };
  featuredArticles: FeaturedArticle[];
  ctaDescription: string;
  pdfPath: string;
}

// Helper para crear ediciones placeholder con portada como hero
function createPlaceholderEdition(
  slug: string,
  issueNumber: string,
  title: string,
  month: string,
  year: string,
  coverImage: string,
): EditionDetail {
  return {
    slug,
    issueNumber,
    title,
    month,
    year,
    coverImage,
    tagline: `Descubre la edición ${title} de METTZ — Moda, cine y cultura en una exploración visual única`,
    heroImage: { src: coverImage, alt: `Portada METTZ ${issueNumber} - ${title}`, caption: '' },
    featuredImage: { src: coverImage, alt: `Editorial ${title}`, caption: `Editorial exclusivo: ${title}` },
    gridImages: {
      large: { src: coverImage, alt: `${title} - Imagen principal`, caption: `Edición ${title} - Una mirada exclusiva` },
      small1: { src: coverImage, alt: `${title} - Detalle`, caption: `Portada oficial: ${issueNumber}` },
      small2: { src: coverImage, alt: `${title} - Retrato`, caption: `${title} - Detrás de cámaras` },
    },
    fullWidthImage: { src: coverImage, alt: `Behind the scenes - ${title}`, caption: `Behind the scenes: Sesión editorial "${title}"` },
    closingImage: { src: coverImage, alt: `Cierre visual - ${title}`, caption: `Epílogo visual: ${title}` },
    intro: {
      heading: `Bienvenidos a ${title}`,
      paragraph: `En esta edición de ${month.toLowerCase()}, METTZ explora la intersección entre moda y cine a través de la lente de ${title}. Una experiencia visual que celebra la creatividad, la identidad y el poder transformador del estilo.`,
    },
    story: {
      heading: `La Visión de ${title}`,
      paragraph: `Cada edición de METTZ es un viaje visual único. En ${title}, nuestro equipo editorial captura la esencia de una época, una estética y una narrativa que trasciende las páginas. Desde las pasarelas hasta la pantalla grande, exploramos cómo la moda y el cine se entrelazan para crear momentos inolvidables.`,
    },
    darkSection: {
      heading: 'El Cine como Inspiración',
      paragraph: `La película que inspira esta edición nos recuerda que el cine y la moda son lenguajes universales. Cada fotograma es una declaración de estilo, cada vestuario una obra de arte. En esta edición, conversamos con creativos que continúan redefiniendo la relación entre la pantalla y la pasarela.`,
    },
    quote: {
      text: '"La moda es la armadura para sobrevivir la realidad de la vida cotidiana."',
      cite: '— Bill Cunningham',
    },
    featuredArticles: [
      { title: `PhotoMettz: ${title}`, description: 'Un editorial fotográfico exclusivo que captura la esencia de esta edición', href: '/photomettz' },
      { title: 'Cine y Moda: Una Relación Eterna', description: 'Cómo el séptimo arte sigue inspirando las tendencias de hoy', href: '/video' },
      { title: 'Tendencias del Momento', description: 'Las claves de estilo que definen esta temporada', href: '/noticias' },
      { title: 'Podcast: Conversaciones de Moda', description: 'Entrevistas exclusivas con los protagonistas de la industria', href: '/podcast' },
    ],
    ctaDescription: `Descubre todas las historias, editoriales fotográficos y contenido exclusivo de ${title} en formato digital.`,
    pdfPath: `/PDF/${slug}.pdf`,
  };
}

// ── Datos de las 16 ediciones (más reciente primero) ──
export const editionsDetail: EditionDetail[] = [
  // Issue 16 — María Antonieta (contenido completo)
  {
    slug: 'maria-antonieta-feb-2026',
    issueNumber: 'Issue 16',
    title: 'María Antonieta',
    month: 'Febrero',
    year: '2026',
    coverImage: '/Portadas/2602_FEB26_MARIA ANTONIETA.png',
    tagline: 'Opulencia, rebeldía y la reinvención de la feminidad a través del lente de la moda contemporánea',
    heroImage: { src: '/ediciones/maria-antonieta/hero.png', alt: 'Editorial María Antonieta - METTZ Issue 16', caption: '' },
    featuredImage: { src: '/ediciones/maria-antonieta/fashion.png', alt: 'Editorial de moda rococó - Detalles de alta costura', caption: 'Editorial exclusivo: "Versailles Reimaginado" — Detalles de alta costura con inspiración rococó' },
    gridImages: {
      large: { src: '/ediciones/maria-antonieta/interior.png', alt: 'Escena inspirada en Versalles - Pasteles y opulencia', caption: '"Que coman pasteles": una mesa desbordante en los salones de Versalles' },
      small1: { src: '/Portadas/2602_FEB26_MARIA ANTONIETA.png', alt: 'Portada METTZ Issue 16 - María Antonieta', caption: 'Portada oficial: Issue 16' },
      small2: { src: '/ediciones/maria-antonieta/portrait.png', alt: 'Retrato editorial con estética rococó', caption: 'Retrato: La melancolía del poder' },
    },
    fullWidthImage: { src: '/ediciones/maria-antonieta/hero.png', alt: 'Behind the scenes - Editorial María Antonieta', caption: 'Behind the scenes: Sesión editorial "Versailles Reimaginado" en locación' },
    closingImage: { src: '/ediciones/maria-antonieta/portrait.png', alt: 'Imagen final - Retrato editorial', caption: 'Epílogo visual: La belleza permanece cuando el poder se desvanece' },
    intro: {
      heading: 'El Exceso como Poesía',
      paragraph: 'En esta edición de febrero, METTZ rinde homenaje a una de las figuras más fascinantes y malinterpretadas de la historia. María Antonieta no fue solo una reina: fue una declaración de estilo, una provocación cultural y un símbolo de cómo la moda puede ser un acto de identidad. Inspirados por la visión cinematográfica de Sofia Coppola, exploramos la estética rococó desde una perspectiva contemporánea.',
    },
    story: {
      heading: 'Rococó Contemporáneo',
      paragraph: 'Las pasarelas de Dior, Chanel y Valentino han demostrado que la extravagancia del siglo XVIII no solo sigue vigente, sino que se ha convertido en un lenguaje de empoderamiento. Los bordados a mano que antes adornaban los salones de Versalles ahora recorren las alfombras rojas. Las perlas, los encajes y los tonos pastel ya no son símbolo de fragilidad: son armadura. Nuestra portada celebra a Luisa Sciolli envuelta en creaciones que dialogan entre lo clásico y lo irreverente.',
    },
    darkSection: {
      heading: 'El Cine como Espejo',
      paragraph: 'La película de Sofia Coppola transformó para siempre nuestra percepción de María Antonieta. Con su banda sonora de post-punk y new wave, sus Converse entre los mármoles de Versalles y una Kirsten Dunst que capturó la soledad detrás del glamour, Coppola demostró que el cine de época puede ser profundamente contemporáneo. En esta edición, conversamos con diseñadores de vestuario y directores de arte que continúan su legado visual.',
    },
    quote: {
      text: '"La moda de María Antonieta no era vanidad, era resistencia. Cada vestido era un manifiesto, cada peinado era una declaración de guerra contra lo ordinario."',
      cite: '— Milena Canonero, diseñadora de vestuario',
    },
    featuredArticles: [
      { title: 'PhotoMettz: Versailles Reimaginado', description: 'Un editorial fotográfico que fusiona la opulencia del siglo XVIII con la estética urbana contemporánea', href: '/photomettz' },
      { title: 'La Herencia de Coppola: Cine de Época Reinventado', description: 'Cómo una generación de cineastas transformó el género histórico con irreverencia y autenticidad', href: '/video' },
      { title: 'Tendencia Rococó: De las Pasarelas a las Calles', description: 'Las casas de moda que están reviviendo los bordados, encajes y volúmenes del siglo XVIII', href: '/noticias' },
      { title: 'Podcast: Moda, Poder y Revolución', description: 'Una conversación sobre cómo el vestir ha sido siempre un acto político y de identidad', href: '/podcast' },
      { title: 'METTZ Global: París, la Ciudad del Exceso Elegante', description: 'Recorremos los rincones de París que inspiraron la estética de esta edición', href: '/mettzglobal' },
    ],
    ctaDescription: 'Descubre todas las historias, editoriales fotográficos y contenido exclusivo de María Antonieta en formato digital.',
    pdfPath: '/PDF/maria-antonieta-feb-2026.pdf',
  },

  // Issue 15–01: Ediciones con contenido placeholder
  createPlaceholderEdition('call-me-by-your-name-ene-2026', 'Issue 15', 'Call Me by Your Name', 'Enero', '2026', '/Portadas/2601_ENE26_CALL-ME-BY-YOUR-NAME-1.png'),
  createPlaceholderEdition('el-grinch-dic-2025', 'Issue 14', 'El Grinch', 'Diciembre', '2025', '/Portadas/2512_DIC25_EL-GRINCH-1.png'),
  createPlaceholderEdition('dune-nov-2025', 'Issue 13', 'Dune', 'Noviembre', '2025', '/Portadas/2511_NOV25_DUNE-1.png'),
  createPlaceholderEdition('the-last-of-us-oct-2025', 'Issue 12', 'The Last of Us', 'Octubre', '2025', '/Portadas/2510_OCT25_THE-LAST-OF-US-1.png'),
  createPlaceholderEdition('the-age-of-adaline-sep-2025', 'Issue 11', 'The Age of Adaline', 'Septiembre', '2025', '/Portadas/2509_SEPT25_THE-AGE-OF-ADALINE-1.png'),
  createPlaceholderEdition('the-neon-demon-ago-2025', 'Issue 10', 'The Neon Demon', 'Agosto', '2025', '/Portadas/2508_AGO25_THE-NEON-DEMON-1.png'),
  createPlaceholderEdition('gladiator-jul-2025', 'Issue 09', 'Gladiator', 'Julio', '2025', '/Portadas/2507_JUL25_GLADIATOR-1.png'),
  createPlaceholderEdition('the-devil-wears-prada-jun-2025', 'Issue 08', 'The Devil Wears Prada', 'Junio', '2025', '/Portadas/2506_JUN25_THE-DEVIL-WEARS-PRADA-1.png'),
  createPlaceholderEdition('joker-may-2025', 'Issue 07', 'Joker', 'Mayo', '2025', '/Portadas/2505_MAY25_JOKER-1.png'),
  createPlaceholderEdition('la-la-land-abr-2025', 'Issue 06', 'La La Land', 'Abril', '2025', '/Portadas/2504_ABR25_LA-LA-LAND-1.png'),
  createPlaceholderEdition('13-going-on-30-mar-2025', 'Issue 05', '13 Going on 30', 'Marzo', '2025', '/Portadas/2503_MAR25_13-GOING-ON-30-1.png'),
  createPlaceholderEdition('the-little-mermaid-feb-2025', 'Issue 04', 'The Little Mermaid', 'Febrero', '2025', '/Portadas/2502_FEB25_THE-LITTLE-MERMAID-1.png'),
  createPlaceholderEdition('requiem-for-a-dream-ene-2025', 'Issue 03', 'Requiem for a Dream', 'Enero', '2025', '/Portadas/2501_ENE25_REQUIEM-FOR-A-DREAM-1.png'),
  createPlaceholderEdition('home-alone-dic-2024', 'Issue 02', 'Home Alone', 'Diciembre', '2024', '/Portadas/2412_DIC24_HOME-ALONE-1.png'),
  createPlaceholderEdition('the-great-gatsby-nov-2024', 'Issue 01', 'The Great Gatsby', 'Noviembre', '2024', '/Portadas/2411_NOV24_THE-GREAT-GATSBY-1.png'),
];

// Datos simplificados para la página de listado
export const editionsListing = editionsDetail.map((e) => ({
  issueNumber: e.issueNumber,
  title: e.title,
  month: e.month,
  year: e.year,
  slug: e.slug,
  coverImage: e.coverImage,
}));

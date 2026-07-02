// Videos mensuales asociados a cada edición (más reciente primero)
export interface VideoEntry {
  title: string;
  month: string;
  year: string;
  coverImage: string | null;
  youtubeUrl: string | null; // null → Próximamente
}

export const fashionFilms: VideoEntry[] = [
  {
    title: 'Portrait of a Lady on Fire',
    month: 'Marzo',
    year: '2026',
    coverImage: null,
    youtubeUrl: 'https://youtu.be/6qz-RHIRLAo?si=PSTuMWBumRTey6LV',
  },
  {
    title: 'María Antonieta',
    month: 'Febrero',
    year: '2026',
    coverImage: '/Portadas/2602_FEB26_MARIA ANTONIETA.png',
    youtubeUrl: 'https://youtu.be/T0bALix5NWk?si=d1fQJBtupjF1kSUz',
  },
  {
    title: 'Call Me by Your Name',
    month: 'Enero',
    year: '2026',
    coverImage: '/Portadas/2601_ENE26_CALL-ME-BY-YOUR-NAME-1.png',
    youtubeUrl: 'https://youtu.be/vlm1a4_9LFA?si=al4L1qWdy4qPQLjv',
  },
  {
    title: 'El Grinch',
    month: 'Diciembre',
    year: '2025',
    coverImage: '/Portadas/2512_DIC25_EL-GRINCH-1.png',
    youtubeUrl: null,
  },
  {
    title: 'Dune',
    month: 'Noviembre',
    year: '2025',
    coverImage: '/Portadas/2511_NOV25_DUNE-1.png',
    youtubeUrl: 'https://youtu.be/VJ1Ql7Z9JPc?si=ed4K2xQNRL2_0c8s',
  },
  {
    title: 'The Last of Us',
    month: 'Octubre',
    year: '2025',
    coverImage: '/Portadas/2510_OCT25_THE-LAST-OF-US-1.png',
    youtubeUrl: 'https://youtu.be/NOzPArBe9ds?si=YrsjaO3R-lYdpp9e',
  },
  {
    title: 'The Age of Adaline',
    month: 'Septiembre',
    year: '2025',
    coverImage: '/Portadas/2509_SEPT25_THE-AGE-OF-ADALINE-1.png',
    youtubeUrl: 'https://youtu.be/nVvr0hy6j0U?si=dZyekLPzw9avwPsU',
  },
  {
    title: 'The Neon Demon',
    month: 'Agosto',
    year: '2025',
    coverImage: '/Portadas/2508_AGO25_THE-NEON-DEMON-1.png',
    youtubeUrl: 'https://youtu.be/Z98ERa5ZPWs?si=b-Cbknmb0gDCI-Gx',
  },
  {
    title: 'Gladiator',
    month: 'Julio',
    year: '2025',
    coverImage: '/Portadas/2507_JUL25_GLADIATOR-1.png',
    youtubeUrl: 'https://youtu.be/B6HVr-_Iqzw?si=1GhoGN8o52iqk7x2',
  },
  {
    title: 'The Devil Wears Prada',
    month: 'Junio',
    year: '2025',
    coverImage: '/Portadas/2506_JUN25_THE-DEVIL-WEARS-PRADA-1.png',
    youtubeUrl: 'https://youtu.be/b0s62oijsM4?si=0s-kCbsQcbXApQtv',
  },
  {
    title: 'Joker',
    month: 'Mayo',
    year: '2025',
    coverImage: '/Portadas/2505_MAY25_JOKER-1.png',
    youtubeUrl: 'https://youtu.be/ZJqRn9s_8gQ?si=snfqaDYo31rckRUd',
  },
  {
    title: 'La La Land',
    month: 'Abril',
    year: '2025',
    coverImage: '/Portadas/2504_ABR25_LA-LA-LAND-1.png',
    youtubeUrl: 'https://youtu.be/QgAISJsP_z4?si=ZqbmrCuACVH0XllW',
  },
  {
    title: '13 Going on 30',
    month: 'Marzo',
    year: '2025',
    coverImage: '/Portadas/2503_MAR25_13-GOING-ON-30-1.png',
    youtubeUrl: 'https://youtu.be/QAn-s440smA?si=PKlSw4K-pK1UPJ0B',
  },
  {
    title: 'The Little Mermaid',
    month: 'Febrero',
    year: '2025',
    coverImage: '/Portadas/2502_FEB25_THE-LITTLE-MERMAID-1.png',
    youtubeUrl: 'https://youtu.be/Aw-K-L-AFP8?si=TVpJY3zROMLCS97s',
  },
  {
    title: 'Requiem for a Dream',
    month: 'Enero',
    year: '2025',
    coverImage: '/Portadas/2501_ENE25_REQUIEM-FOR-A-DREAM-1.png',
    youtubeUrl: 'https://youtu.be/9qfU-7H9mPc?si=Zd0s2mxQALGGG_dN',
  },
  {
    title: 'Home Alone',
    month: 'Diciembre',
    year: '2024',
    coverImage: '/Portadas/2412_DIC24_HOME-ALONE-1.png',
    youtubeUrl: 'https://youtu.be/tJku1Mqd3FI?si=yqBBuiRzicv2bk2Q',
  },
  {
    title: 'The Great Gatsby',
    month: 'Noviembre',
    year: '2024',
    coverImage: '/Portadas/2411_NOV24_THE-GREAT-GATSBY-1.png',
    youtubeUrl: 'https://www.youtube.com/watch?v=GbR1z-dpOvo',
  },
];

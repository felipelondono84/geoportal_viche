const paths = {
  backgrounds: {
    headers: "/images/backgrounds/headers/",
    sections: "/images/backgrounds/sections/",
  },
  banners: "/images/banners/",
  featured: "/images/featured/",
  illustrations: "/images/illustrations/",
  partners: "/images/partners/",
  ui: {
    elements: "/images/ui/elements/",
    icons: "/images/ui/icons/",
  },
};

// Illustrations
export const illustrations = {
  viche: {
    src: paths.illustrations + "viche-illustration.svg",
    alt: "",
  },
  trapiche: {
    src: paths.illustrations + "trapiche-illustration.png",
    alt: "",
  },
  bgRight: {
    src: paths.illustrations + "bg-illustration-r.png",
    alt: "",
  },
  bgLeft: {
    src: paths.illustrations + "bg-illustration-l.png",
    alt: "",
  },
};

// Backgrounds
export const backgrounds = {
  img1: {
    src: paths.backgrounds.sections + "image1.png",
    alt: "",
  },
  img2: {
    src: paths.backgrounds.sections + "image2.png",
    alt: "",
  },
};

// Banners
export const banner = {
  bg: {
    src: paths.banners + "banner.png",
    alt: "River landscape",
  },
  bannerCurveTop: {
    src: paths.banners + "banner-curve-top.svg",
    alt: "Banner Curve Top",
  },
  bannerHillsBottom: {
    src: paths.banners + "banner-hills-bottom.svg",
    alt: "Banner Hills Bottom",
  },
};

// Icons
export const icons = {
  vicheIcon: {
    src: paths.ui.icons + "viche-icon.png",
    alt: "Icono del Viche",
  },
  igIcon: {
    src: paths.ui.icons + "ig-icon.png",
    alt: "Icono de Instagram",
  },
  mapIcon: {
    src: paths.ui.icons + "map-icon.png",
    alt: "Icono de mapa",
  },
  whatsappIcon: {
    src: paths.ui.icons + "whatsapp-icon.png",
    alt: "Icono de Whatsapp",
  },
  xIcon: {
    src: paths.ui.icons + "x-icon.png",
    alt: "Icono de X",
  },
  youtubeIcon: {
    src: paths.ui.icons + "youtube-icon.png",
    alt: "Icono de Youtube",
  },
};

export const elements = {
  leavesL:{
    src: paths.ui.elements + "leaves-l.png",
    alt: ""
  },
  leavesR:{
    src: paths.ui.elements + "leaves-r.png",
    alt: ""
  }
}

// Partners
export const partners = [
  {
    src: paths.partners + "vicepresidencia-white.webp",
    srcAlt: paths.partners + "vicepresidencia.webp",
    alt: "Logo de la Vicepresidencia de Colombia",
  },
  {
    src: paths.partners + "sepro-white.webp",
    srcAlt: paths.partners + "sepro.webp",
    alt: "Logo del programa Sepro",
  },
  {
    src: paths.partners + "unal-white.webp",
    srcAlt: paths.partners + "unal.webp",
    alt: "Logo de la Universidad Nacional de Colombia",
  },
];

// Cards
export const cards = [
  {
    title: "Geovisor - Principales producciones de Viche",
    img: {
      src: paths.featured + "featured1.png",
      alt: "Maquinaria antigua",
    },
  },
  {
    title: "Storymap - Paisaje Biocultural Vichero",
    img: {
      src: paths.featured + "featured2.png",
      alt: "Animal pequeño",
    },
  },
  {
    title: "Geovisor - Cadenas de valor Litoral Chocoano",
    img: {
      src: paths.featured + "featured3.png",
      alt: "Mapa",
    },
  },
];

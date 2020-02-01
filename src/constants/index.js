const imgDir =
  process.env.NODE_ENV === "development"
    ? "/assets/images/"
    : "/belorussian-symbols/assets/images/";

export const SYMBOL_OPTIONS = [
  {
    label: "Spring and youth",
    path: "symbol-of-spring",
    title: "spring and youth",
    img: `${imgDir}/symbol-of-spring.png`
  },
  {
    label: "Wealth",
    path: "symbol-of-wealth",
    title: "wealth",
    img: `${imgDir}/symbol-of-wealth.png`
  },
  {
    label: "The sun and the earth",
    path: "symbol-of-harvest",
    title: "harvest",
    img: `${imgDir}/symbol-of-harvest.png`
  },
  {
    label: "Ancestors",
    path: "symbol-of-ancestors",
    title: "ancestors",
    img: `${imgDir}/symbol-of-ancestors.png`
  },
  {
    label: "Love",
    path: "symbol-of-love",
    title: "symbol of love",
    img: `${imgDir}/symbol-of-love.png`
  }
];

export const COMPOSITIONS = [
  {
    label: "Love",
    path: "symbol-of-love",
    title: "symbol of love",
    img: `${imgDir}/symbol-of-love.png`
  }
];

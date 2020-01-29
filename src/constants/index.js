const imgDir =
  process.env.NODE_ENV === "development"
    ? "/assets/img/"
    : "/belorussian-symbols/assets/img/";

export const SYMBOL_OPTIONS = [
  {
    label: "Symbol of spring and youth",
    path: "symbol-of-spring",
    title: "spring and youth",
    img: `${imgDir}/symbol-of-spring.png`
  },
  {
    label: "Symbol of wealth",
    path: "symbol-of-wealth",
    title: "wealth",
    img: `${imgDir}/symbol-of-wealth.png`
  },
  {
    label: "Union of the sun and the earth. Symbol of harvest",
    path: "symbol-of-harvest",
    title: "harvest",
    img: `${imgDir}/symbol-of-harvest.png`
  },
  {
    label: "Symbol of ancestors",
    path: "symbol-of-ancestors",
    title: "ancestors",
    img: `${imgDir}/symbol-of-ancestors.png`
  }
];

export const COMPOSITIONS = [
  {
    label: "Symbol of love",
    path: "symbol-of-love",
    title: "symbol of love",
    img: `${imgDir}/symbol-of-love.png`
  }
];

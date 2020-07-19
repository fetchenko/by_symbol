const imgDir = "/assets/images";

export const SYMBOL_OPTIONS = [
  {
    path: "spring",
    title: "title.spring",
    img: `${imgDir}/symbol-of-spring.webp`,
  },
  {
    path: "belarus",
    title: "title.belarus",
    img: `${imgDir}/symbol-of-belarus.webp`
  },
  {
    path: "wealth",
    title: "title.wealth",
    img: `${imgDir}/symbol-of-wealth.webp`,
  },
  // {
  //   path: "harvest",
  //   img: `${imgDir}/symbol-of-harvest.webp`,
  // },
  {
    path: "ancestors",
    title: "title.ancestors",
    img: `${imgDir}/symbol-of-ancestors.webp`,
  },
  {
    path: "love",
    title: "title.love",
    img: `${imgDir}/symbol-of-love.webp`,
  },
  {
    path: "woman",
    title: "title.woman",
    img: `${imgDir}/symbol-of-women.webp`,
  },
  {
    path: "source",
    title: "title.source",
    img: `${imgDir}/symbol-of-sources.webp`,
  },
  {
    path: "mother",
    title: "title.mother",
    img: `${imgDir}/symbol-of-mother.webp`,
  },
  {
    path: "earth",
    title: "title.earth",
    img: `${imgDir}/symbol-of-earth.webp`,
  },
  {
    path: "sun",
    title: "title.sun",
    img: `${imgDir}/symbol-of-sun.webp`,
  },
  {
    path: "mermaid",
    title: "title.mermaid",
    img: `${imgDir}/symbol-of-mermaid.webp`,
  },
  {
    path: "life",
    title: "title.life",
    img: `${imgDir}/symbol-of-life.webp`
  },
  {
    path: "family",
    title: "title.family",
    img: `${imgDir}/symbol-of-strong-family.webp`,
  },
  {
    path: "talisman",
    title: "title.talisman",
    img: `${imgDir}/symbol-of-talisman.webp`,
  },
  {
    path: "song",
    title: "title.song",
    img: `${imgDir}/symbol-of-song.webp`,
  },
  {
    path: "bereginia",
    title: "title.bereginia",
    img: `${imgDir}/symbol-of-bereginia.webp`,
  },
  {
    path: "rye-woman",
    title: "title.rye-woman",
    img: `${imgDir}/symbol-of-crop-yield.webp`,
  },
  {
    path: "kupala",
    title: "title.kupala",
    img: `${imgDir}/symbol-of-bathing-fire.webp`,
  },
  {
    path: "sparysh",
    title: "title.sparysh",
    img: `${imgDir}/sparysh.webp`,
  },
  {
    path: "love-battle-win",
    title: "title.love-battle-win",
    img: `${imgDir}/love-win-battle.webp`,
  }
  // {
  //   path: "crown",
  //   img: `${imgDir}/symbol-of-crown.webp`,
  //   hints: ["hints.symbol-of-crown"]
  // }
];

export const blockMenuOptions = SYMBOL_OPTIONS.reduce((acc, item, index, items) => {
  return {
    ...acc,
    [item.path]: {
      ...item,
      prevEl: (index === 0) ? null : items[index - 1].path,
      nextEl: ((index + 1) === items.length) ? null : items[index + 1].path,
    }
  }
}, {});

export const CUSTOM_SYMBOL_OPTIONS = [
  {
    path: "symbol-of-ant",
    img: `${imgDir}/symbol-of-mother.webp`
  }
];

export const author = {
  name: "Tanya Fedchenko",
  link: "https://twitter.com/tn_fedchenko",
}

export const Address = {
  country: "Belarus",
  city: "Vitebsk",
  year: 2020
};

export const KeyCodes = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

export const NEXT_CODES = [KeyCodes.RIGHT, KeyCodes.UP];
export const PREV_CODES = [KeyCodes.LEFT, KeyCodes.DOWN];

export const DEFAULT_SYMBOL = 'spring';
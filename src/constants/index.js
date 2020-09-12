const imgDir = "/assets/images";

export const SHORT_TITLE_PREFIX = "short";

export const LANGUAGES = ["be", "en", "ru"];

export const SYMBOL_OPTIONS = [
  {
    id: "harvest",
    title: "title.harvest",
    items: [
      {
        id: "bread",
        title: "title.bread",
      },
      {
        id: "grain",
        title: "title.grain",
      },
      {
        id: "wealth",
        title: "title.wealth",
      },
    ],
  },
  {
    id: "characters",
    title: "title.characters",
    items: [
      {
        id: "mermaid",
        title: "title.mermaid",
      },
      {
        id: "bereginia",
        title: "title.bereginia",
      },
      {
        id: "rye-woman",
        title: "title.rye-woman",
      },
      {
        id: "sparysh",
        title: "title.sparysh",
      },
      {
        id: "zhiten",
        title: "title.zhiten",
      },
      {
        id: "yarila",
        title: "title.yarila",
      },
      {
        id: "riche",
        title: "title.riche",
      },
    ],
  },
  {
    id: "holidays",
    title: "title.holidays",
    items: [
      {
        id: "kupala",
        title: "title.kupala",
      },
    ],
  },
  {
    id: "song",
    title: "title.song",
  },
  {
    id: "talisman",
    title: "title.talisman",
  },
  {
    id: "life",
    title: "title.life",
  },
  {
    id: "ancestors",
    title: "title.ancestors",
  },
  {
    id: "love",
    title: "title.love",
  },
  {
    id: "spring",
    title: "title.spring",
  },
  {
    id: "belarus",
    title: "title.belarus",
  },
  {
    id: "people",
    title: "title.people",
    items: [
      {
        id: "mother",
        title: "title.mother",
      },
      {
        id: "woman",
        title: "title.woman",
      },
      {
        id: "family",
        title: "title.family",
      },
    ],
  },
  {
    id: "nature",
    title: "title.nature",
    items: [
      {
        id: "earth",
        title: "title.earth",
      },
      {
        id: "sun",
        title: "title.sun",
      },
      {
        id: "source",
        title: "title.source",
      },
    ],
  },
];

export const __SYMBOL_OPTIONS = [
  {
    path: "spring",
    title: "title.spring",
  },
  {
    path: "belarus",
    title: "title.belarus",
  },
  {
    path: "wealth",
    title: "title.wealth",
  },
  // {
  //   path: "harvest",
  //   img: `${imgDir}/symbol-of-harvest.webp`,
  // },
  {
    path: "ancestors",
    title: "title.ancestors",
  },
  {
    path: "love",
    title: "title.love",
  },
  {
    path: "woman",
    title: "title.woman",
  },
  {
    path: "source",
    title: "title.source",
  },
  {
    path: "mother",
    title: "title.mother",
  },
  {
    path: "earth",
    title: "title.earth",
  },
  {
    path: "sun",
    title: "title.sun",
  },
  {
    path: "mermaid",
    title: "title.mermaid",
  },
  {
    path: "life",
    title: "title.life",
  },
  {
    path: "family",
    title: "title.family",
  },
  {
    path: "talisman",
    title: "title.talisman",
  },
  {
    path: "song",
    title: "title.song",
  },
  {
    path: "bereginia",
    title: "title.bereginia",
  },
  {
    path: "rye-woman",
    title: "title.rye-woman",
  },
  {
    path: "kupala",
    title: "title.kupala",
  },
  {
    path: "sparysh",
    title: "title.sparysh",
  },
  // {
  //   path: "love-battle-win",
  //   title: "title.love-battle-win",
  // },
  {
    path: "zhiten",
    title: "title.zhiten",
  },
  {
    path: "yarila",
    title: "title.yarila",
  },
  {
    path: "riche",
    title: "title.riche",
  },
  {
    path: "bread",
    title: "title.bread",
  },
  {
    path: "grain",
    title: "title.grain",
  },
  // {
  //   path: "crown",
  //   img: `${imgDir}/symbol-of-crown.webp`,
  //   hints: ["hints.symbol-of-crown"]
  // }
];

export const CUSTOM_SYMBOL_OPTIONS = [
  {
    path: "symbol-of-ant",
    img: `${imgDir}/symbol-of-mother.webp`,
  },
];

export const author = {
  name: "Tanya Fedchenko",
  link: "https://twitter.com/tn_fedchenko",
};

export const Address = {
  country: "Belarus",
  city: "Vitebsk",
  year: 2020,
};

export const KeyCodes = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

export const NEXT_CODES = [KeyCodes.RIGHT, KeyCodes.UP];
export const PREV_CODES = [KeyCodes.LEFT, KeyCodes.DOWN];

export const DEFAULT_SYMBOL = "ancestors";

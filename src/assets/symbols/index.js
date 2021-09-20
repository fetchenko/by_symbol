import { mother } from "./mother/mother";
import { mother2 } from "./mother/mother2";
import { wealth } from "./wealth/wealth";
import { wealth2 } from "./wealth/wealth2";
import { wealth3 } from "./wealth/wealth3";
import { springAndYouth } from "./spring/springAndYouth";
import { spring } from "./spring/spring";
import { sunAndEarth } from "./spring/sunAndEarth";
import { belarus2 } from "./belarus/belarus2";
import { ancestors } from "./ancestors/ancestors";
import { ancestors2 } from "./ancestors/ancestors2";
import { ancestors4 } from "./ancestors/ancestors4";
import { pigeonInLove } from "./love/pigeonInLove";
import { woman } from "./woman/woman";
import { womanShare } from "./woman/womanShare";
import { source } from "./source/source";
import { earth2 } from "./earth/earth2";
import { sun } from "./sun/sun";
import { sun2 } from "./sun/sun2";
import { sun4 } from "./sun/sun4";
import { mermaid } from "./characters/mermaid/mermaid";
import { song } from "./song/song";
import { loveSong } from "./song/loveSong";
import { life } from "./life/life";
import { lifeTree } from "./life/lifeTree";
import { strongFamily } from "./family/strongFamily";
import { talisman } from "./talisman/talisman";
import { bereginia } from "./characters/bereginia/bereginia";
import { ryeWoman } from "./characters/ryeWoman/ryeWoman";
import { ryeWoman2 } from "./characters/ryeWoman/ryeWoman2";
import { kupalaFire } from "./holidays/kupala/kupalaFire";
import { crown } from "./custom/crown";
import { sparysh } from "./sparysh/sparysh";
import { sparysh2 } from "./sparysh/sparysh2";
import { sparysh3 } from "./sparysh/sparysh3";
import { sparysh4 } from "./sparysh/sparysh4";
import { love } from "./love-win-battle/love";
import { battle } from "./love-win-battle/battle";
import { win } from "./love-win-battle/win";
import { zhiten } from "./characters/zhiten/zhiten";
import { zhiten2 } from "./characters/zhiten/zhiten2";
import { yarila } from "./characters/yarila/yarila";
import { riche } from "./characters/riche/riche";
import { riche2 } from "./characters/riche/riche2";
import { bread } from "./bread/bread";
import { bread2 } from "./bread/bread2";
import { bread3 } from "./bread/bread3";
import { grain } from "./grain/grain";
import { bigSun2 } from "./sun/bigSun2";
import { bigSun4 } from "./sun/bigSun4";
import { bigSun6 } from "./sun/bigSun6";
import { rain } from "./rain/rain";

export const symbols = {
  spring: {
    id: "spring",
    title: "title.spring-and-youth",
    description: "meaning.spring",
    symbols: [springAndYouth, sunAndEarth, spring],
  },
  belarus: {
    id: "belarus",
    title: "title.belarus",
    description: "meaning.belarus",
    symbols: [
      // belarus,
      belarus2,
    ],
  },
  wealth: {
    id: "wealth",
    title: "title.wealth",
    description: "meaning.wealth",
    symbols: [wealth, wealth2, wealth3],
  },
  ancestors: {
    id: "ancestors",
    title: "title.ancestors",
    description: "meaning.ancestors",
    symbols: [ancestors, ancestors2, ancestors4],
  },
  love: {
    id: "love",
    title: "title.love",
    description: "meaning.love",
    symbols: [pigeonInLove],
  },
  woman: {
    id: "woman",
    title: "title.woman",
    description: "meaning.woman",
    symbols: [woman, womanShare],
  },
  source: {
    id: "source",
    title: "title.source",
    description: "meaning.source",
    symbols: [source],
  },
  mother: {
    id: "mother",
    title: "title.mother",
    description: "meaning.mother",
    symbols: [mother, mother2],
  },
  earth: {
    id: "earth",
    title: "title.earth",
    description: "meaning.earth",
    symbols: [earth2],
  },
  sun: {
    id: "sun",
    title: "title.sun",
    description: "meaning.sun",
    symbols: [sun, sun2, sun4],
  },
  mermaid: {
    id: "mermaid",
    title: "title.mermaid",
    description: "meaning.mermaid",
    symbols: [mermaid],
  },
  song: {
    id: "song",
    title: "title.song",
    description: "meaning.song",
    symbols: [song, loveSong],
  },
  life: {
    id: "life",
    title: "title.life",
    description: "meaning.life",
    symbols: [life, lifeTree],
  },
  family: {
    id: "family",
    title: "title.family",
    description: "meaning.family",
    symbols: [strongFamily],
  },
  talisman: {
    id: "talisman",
    title: "title.talisman",
    description: "meaning.talisman",
    symbols: [talisman],
  },
  bereginia: {
    id: "bereginia",
    title: "title.bereginia",
    description: "meaning.bereginia",
    symbols: [bereginia],
  },
  "rye-woman": {
    id: "ryeWoman",
    title: "title.rye-woman",
    description: "meaning.rye-woman",
    symbols: [ryeWoman, ryeWoman2],
  },
  kupala: {
    id: "kupala",
    title: "title.kupala",
    description: "meaning.kupala",
    symbols: [kupalaFire],
  },
  crown: {
    id: "custom",
    title: "title.crown",
    description: "meaning.crown",
    symbols: [crown],
  },
  sparysh: {
    id: "sparysh",
    title: "title.sparysh",
    description: "meaning.sparysh",
    symbols: [sparysh, sparysh2, sparysh3, sparysh4],
  },
  "love-battle-win": {
    id: "love-battle-win",
    // title: 'title.love-battle-win',
    description: "meaning.love-battle-win",
    symbols: [love, battle, win],
  },
  zhiten: {
    id: "zhiten",
    title: "title.zhiten",
    description: "meaning.zhiten",
    symbols: [zhiten, zhiten2],
  },
  yarila: {
    id: "yarila",
    title: "title.yarila",
    description: "meaning.yarila",
    symbols: [yarila],
  },
  riche: {
    id: "riche",
    title: "title.riche",
    description: "meaning.riche",
    symbols: [riche, riche2],
  },
  bread: {
    id: "bread",
    title: "title.bread",
    description: "meaning.bread",
    symbols: [bread, bread2, bread3],
  },
  grain: {
    id: "grain",
    title: "title.grain",
    description: "meaning.grain",
    symbols: [grain],
  },
  bigSun: {
    id: "bigSun",
    title: "title.big-sun",
    description: "meaning.big-sun",
    symbols: [bigSun2, bigSun4, bigSun6],
  },
  rain: {
    id: "rain",
    title: "title.rain",
    description: "meaning.rain",
    symbols: [rain],
  },
};

export const getSymbolData = (symbolId) => {
  return symbols[symbolId];
};

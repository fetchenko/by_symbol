import { mother } from './mother/mother'
import { mother2 } from './mother/mother2'
import { wealth } from './wealth/wealth'
import { springAndYouth } from './spring/springAndYouth'
import { sunAndEarth } from './spring/sunAndEarth';
import { belarus } from './belarus/index'
import { ancestors } from './ancestors/ancestors';
import { pigeonInLove } from './love/pigeonInLove';
import { woman } from './woman/woman';
import { womanShare } from './woman/womanShare';
import { source } from './source/source';
import { earth } from './earth/earth';
import { sun } from './sun/sun';
import { mermaid } from './mermaid/mermaid';
import { song } from './song/song';
import { loveSong } from './song/loveSong';
import { life } from './life/life';
import { lifeTree } from './life/lifeTree'
import { strongFamily } from './family/strongFamily';
import { talisman } from './talisman/talisman';
import { bereginia } from './characters/bereginia/bereginia'
import { ryeWoman } from './characters/ryeWoman/ryeWoman';
import { kupalaFire } from './holidays/kupala/kupalaFire';
import { crown } from './custom/crown';

export const symbols = {
    spring: {
        id: 'spring',
        title: 'title.spring',
        description: 'meaning.spring',
        symbols: [
            springAndYouth,
            sunAndEarth,
        ]
    },
    belarus: {
        id: 'belarus',
        title: 'title.belarus',
        description: 'meaning.belarus',
        symbols: [
            belarus,
        ]
    },
    wealth: {
        id: 'wealth',
        title: 'title.wealth',
        description: 'meaning.wealth',
        symbols: [
            wealth
        ]
    },
    harvest: {
        id: 'harvest',
        title: 'title.harvest',
        description: 'meaning.harvest',
        symbols: [
        ]
    },
    ancestors: {
        id: 'ancestors',
        title: 'title.ancestors',
        description: 'meaning.ancestors',
        symbols: [
            ancestors,
        ],
    },
    love: {
        id: 'love',
        title: 'title.love',
        description: 'meaning.love',
        symbols: [
            pigeonInLove,
        ]
    },
    woman: {
        id: 'woman',
        title: 'title.woman',
        description: 'meaning.woman',
        symbols: [
            woman,
            womanShare,
        ]
    },
    source: {
        id: 'source',
        title: 'title.source',
        description: 'meaning.source',
        symbols: [
            source,
        ]
    },
    mother: {
        id: 'mother',
        title: 'title.mother',
        description: 'meaning.mother',
        symbols: [
            mother,
            mother2,
        ]
    },
    earth: {
        id: 'earth',
        title: 'title.earth',
        description: 'meaning.earth',
        symbols: [
            earth,
        ],
    },
    sun: {
        id: 'sun',
        title: 'title.sun',
        description: 'meaning.sun',
        symbols: [
            sun,
        ]
    },
    mermaid: {
        id: 'mermaid',
        title: 'title.mermaid',
        description: 'meaning.mermaid',
        symbols: [
            mermaid,
        ]
    },
    song: {
        id: 'song',
        title: 'title.song',
        description: 'meaning.song',
        symbols: [
            song,
            loveSong,
        ]
    },
    life: {
        id: 'life',
        title: 'title.life',
        description: 'meaning.life',
        symbols: [
            life,
            lifeTree,
        ],
    },
    family: {
        id: 'family',
        title: 'title.family',
        description: 'meaning.family',
        symbols: [
            strongFamily,
        ]
    },
    talisman: {
        id: 'talisman',
        title: 'title.talisman',
        description: 'meaning.talisman',
        symbols: [
            talisman,
        ]
    },
    bereginia: {
        id: 'bereginia',
        title: 'title.bereginia',
        description: 'meaning.bereginia',
        symbols: [
            bereginia,
        ]
    },
    "rye-woman": {
        id: 'ryeWoman',
        title: 'title.rye-woman',
        description: 'meaning.rye-woman',
        symbols: [
            ryeWoman,
        ]
    },
    kupala: {
        id: 'kupala',
        title: 'title.kupala',
        description: 'meaning.kupala',
        symbols: [
            kupalaFire,
        ]
    },
    crown: {
        id: 'custom',
        title: 'title.crown',
        description: 'meaning.crown',
        symbols: [
            crown,
        ]
    }
};

export const getSymbolData = (symbolId) => {
    return symbols[symbolId];
}
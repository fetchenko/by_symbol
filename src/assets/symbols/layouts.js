import { layouts } from 'constants/layouts';

export const symbolsLayouts = {
    'love-battle-win': {
        align: layouts.flex.end,
    }
}

export function getSymbolsLayouts(symbolId) {
    return symbolsLayouts[symbolId];
}
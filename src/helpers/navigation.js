import { DEFAULT_SYMBOL } from 'constants/index'

export function getSymbolIdFromRoute(location) {
    return location.hash
        ? location.hash.replace('#', '')
        : DEFAULT_SYMBOL
};
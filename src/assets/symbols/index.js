import { pigeon } from './birds/pigeon'
import { harvest } from './harvest/harvest'

export const symbols = {
    pigeon,
    harvest,
};

export const getSymbolData = (symbolId) => {
    return symbols[symbolId];
}
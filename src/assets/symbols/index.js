import { pigeon } from './birds/pigeon'
import { harvest } from './harvest/harvest'
import { life } from './life/life'
import { mother } from './mother/mother'
import { birthMother } from './mother/birthMother'
import { motherNurse } from './mother/motherNurse'
import { motherOranta } from './mother/motherOranta'
import { motherStar } from './mother/motherStar'
import { wealth } from './wealth/wealth'
import { welfare } from './wealth/welfare'
import { richMan } from './wealth/richMan'
// import {} from ''

export const symbols = {
    pigeon: {
        id: 'pigeon',
        title: 'pigeon',
        description: 'pigeon',
        symbols: [pigeon],
    },
    harvest: {
        id: 'harvest',
        title: 'harvest',
        description: 'harvest',
        symbols: [harvest],
    },
    life: {
        id: 'life',
        title: 'life',
        description: 'life',
        symbols: [life],
    },
    mother: {
        id: 'mother',
        title: 'mother',
        description: 'mother',
        symbols: [mother]
    },
    birthMother: {
        id: 'birthMother',
        title: 'birthMother',
        description: 'birthMother',
        symbols: [birthMother],
    },
    motherStar: {
        id: 'motherStar',
        title: '',
        description: '',
        symbols: [motherStar]
    },
    motherOranta: {
        id: 'motherOranta',
        title: '',
        description: '',
        symbols: [motherOranta],
    },
    wealth: {
        id: 'wealth',
        symbols: [wealth]
    },
    welfare: {
        id: 'welfare',
        symbols: [welfare]
    },
    richMan: {
        id: 'richMan',
        symbols: [richMan],
    }
};

export const getSymbolData = (symbolId) => {
    return symbols[symbolId];
}
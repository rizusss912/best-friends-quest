import { textsMap } from './constants/texts-map';

export function createContext(lang) {
    return {
        texts: textsMap[lang],
    };
}
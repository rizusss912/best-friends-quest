import ru from './texts/ru.json';

const textsMap = {
    ru: ru,
}

export function createContext(lang = 'ru') {
    return {
        texts: textsMap[lang],
    };
}
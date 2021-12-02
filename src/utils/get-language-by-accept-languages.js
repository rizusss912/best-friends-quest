const defaultLanguage = 'en';

export function getLanguageByAcceptLanguages(languages) {
    return languages.includes('ru') ? 'ru' : defaultLanguage;
}
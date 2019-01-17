import i18next from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';

import en from './locale/en'
import es from './locale/es'
console.log(LngDetector)
const options = {
    // order and from where user language should be detected
    order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ['localStorage', 'cookie'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

    // optional expire and domain for set cookie
    cookieMinutes: 10,
    cookieDomain: 'myDomain',

    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement
}
i18next.use(LngDetector)
    .init({
        // detection: options,
        interpolation: { escapeValue: false },  // React already does escaping
        //lng: 'en',   
        fallbackLng: 'en',                           // language to use
    resources: {
        en: {    "translation": en},
        es: {    "translation": es}
    },
    });

export default i18next;
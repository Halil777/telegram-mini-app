import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./eng/translation.json";
import translationRU from "./ru/translation.json";
import translationTM from "./tm/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  tm: {
    translation: translationTM,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

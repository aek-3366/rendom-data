import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import engLang from "@/lang/en/en.json";
import thLang from "@/lang/th/th.json";

type ResourcesType = {
  [key: string]: {
    translation: Record<string, string>;
  };
};

const resources: ResourcesType = {
  en: { translation: engLang },
  th: { translation: thLang },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "th",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

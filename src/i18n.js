import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About us",
      contact: "Contact us",
      products: "Products",
      certifications: "Certifications",
      infrastructure: "Infrastructure",
    },
  },
  fr: {
    translation: {
      home: "Accueil",
      about: "À Propos",
      contact: "Contactez-Nous",
      products: "Produits",
      certifications: "Certifications",
      infrastructure: "Infrastructure",
    },
  },
  de: {
    translation: {
      home: "Startseite",
      about: "Über Uns",
      contact: "Kontaktieren Sie Uns",
      products: "Produkte",
      certifications: "Zertifizierungen",
      infrastructure: "Infrastruktur",
    },
  },
};

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Initializes react-i18next
  .init({
    resources,
    fallbackLng: "en", // Default language if none is detected
    debug: true, // Enable debugging (remove in production)
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ["localStorage", "cookie", "navigator"], // Prioritize localStorage, then cookie, then browser settings
      caches: ["localStorage", "cookie"], // Save language preference
    },
  });

export default i18n;

import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locale/en.json";
import translationAR from "./locale/ar.json";
import useLocalStorage from 'use-local-storage'; // Import the useLocalStorage hook

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

const I18nInitializer = () => {
  // Move the hook call inside the functional component
  const [language, setLanguage] = useLocalStorage('language', 'en');
  
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      lng: language,
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false
      }
    });
  
  return null; // You can return null since this component doesn't render anything
};

export default I18nInitializer;

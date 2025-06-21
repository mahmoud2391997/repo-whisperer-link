import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translation files
import enTranslation from '@/locales/en/translation.json'
import arTranslation from '@/locales/ar/translation.json'

const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // Default language is Arabic
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    // Add RTL support detection
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n

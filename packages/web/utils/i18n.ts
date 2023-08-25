export const locales = ['es', 'en']

export function isValidLocale(lang: string) {
  return locales.includes(lang)
}

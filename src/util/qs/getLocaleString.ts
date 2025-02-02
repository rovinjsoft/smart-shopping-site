export function getLocaleString(locale?: null | string | string[]) {
  if (locale === 'en' || locale === 'ko') {
    return locale;
  }

  return 'en';
}

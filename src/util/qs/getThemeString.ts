export function getThemeString(theme?: null | string | string[]) {
  if (theme === 'dark' || theme === 'light') {
    return theme;
  }

  return 'light';
}

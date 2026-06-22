import type { Theme } from '../context/ThemeContext';

const STORAGE_KEY = 'calcTheme';

export const loadThemeFromStorage = (): Theme | null => {
  if (typeof window === 'undefined') return null;

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;

    const parsed = JSON.parse(data);

    if (parsed === 'theme1' || parsed === 'theme2' || parsed === 'theme3') {
      return parsed;
    }

    return null;
  } catch (error) {
    return null;
  }
};

export const saveThemeToStorage = (theme: Theme): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
  } catch (error) {}
};

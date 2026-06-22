import { useEffect, useState } from 'react';
import { ThemeContext, type Theme } from './ThemeContext';
import { loadThemeFromStorage, saveThemeToStorage } from '../utils/storage';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    return loadThemeFromStorage() ?? 'theme1';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    saveThemeToStorage(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

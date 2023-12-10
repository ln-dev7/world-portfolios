import { createContext, ReactNode, useEffect, useRef, useState } from 'react';

const localStorageThemeKey = 'world-portfolio-app-theme';
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {
  }
});

export const ThemeProvider = ({ children }: {
  children: ReactNode;
}) => {
  const savedTheme = localStorage.getItem(localStorageThemeKey);
  const initialTheme = savedTheme ? savedTheme : 'light';
  const [theme, setTheme] = useState(initialTheme);
  const bodyElement = useRef<HTMLElement>(null!);

  useEffect(() => {
    bodyElement.current = document.body;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      bodyElement.current.classList.remove('dark');
      bodyElement.current.classList.add('light');
    } else {
      bodyElement.current.classList.remove('light');
      bodyElement.current.classList.add('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem(localStorageThemeKey, theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
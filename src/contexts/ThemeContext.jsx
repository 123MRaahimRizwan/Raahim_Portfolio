import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      setIsDark(saved === 'dark');
    }
    setIsLoaded(true);
  }, []);

  // Save preference to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    }
  }, [isDark, isLoaded]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, isLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

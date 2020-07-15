import { useEffect, useState } from 'react';

/**
 * A hook that handles toggling the colour theme from dark mode
 * and light mode
 */
export const useColourTheme = () => {
  const [theme, setTheme] = useState('light');

  /** 
   * Set the theme mode we're in and store in localstorage
   * so we can keep the same theme on refresh
   */
  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  }

  /** Toggle the theme from light mode to dark mode */
  const themeToggle = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  }

  /**
   * Load the theme from the local storage if there is one
   */
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, themeToggle];
}
import React, { useState, createContext, useMemo } from "react"
import { ThemeProvider } from 'styled-components'
import themes from '../styles/themes'

export const SelectedThemeContext = createContext();

export function SelectedThemeProvider(props) {
  const [selectedTheme, setTheme] = useState("dark");

  function handleToogleTheme() {
    setTheme((prevState) => (
      prevState === "dark"
        ? "light"
        : "dark"
    ));
  }

  const currentTheme = useMemo(() => {
    return themes[selectedTheme] || themes.dark;
  }, [selectedTheme]);

  return (
    <SelectedThemeContext.Provider
      value={{
        selectedTheme,
        onToogleTheme: handleToogleTheme
      }}>
      <ThemeProvider theme={currentTheme}>
        {props.children}
      </ThemeProvider>
    </SelectedThemeContext.Provider>
  );
}


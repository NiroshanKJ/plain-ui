import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeContextProps, ThemeProviderProps } from "./types";
import DefaultTheme from "./DefaultTheme.json";
import { getTheme, updateTheme } from "./helper";

export const ThemeContext = createContext<ThemeContextProps>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  debugger;
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(DefaultTheme);

  useEffect(() => {
    debugger;
    // const themeData = updateTheme(theme, darkMode);
    const themeData = getTheme(DefaultTheme);
    console.log(themeData, "themeData");
    updateTheme(themeData.theme, themeData.darkMode);
    setTheme(themeData.theme);
    setDarkMode(themeData.darkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode: boolean) => {
      const darkMode = !prevDarkMode;
      updateTheme(theme, darkMode);
      return darkMode;
    });
  };

  const themeContextValue = {
    darkMode,
    toggleDarkMode,
    theme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

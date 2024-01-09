import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { PlainUIContextProps, PlainUIProviderProps } from "./types";
import { ThemeProvider } from "styled-components";

const PlainUIContext = createContext<PlainUIContextProps>(undefined);

export const PlainUIProvider: React.FC<PlainUIProviderProps> = ({
  children,
  theme,
}) => {
  const [dark, setDark] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(theme.light);

  const setDarkMode = (dark: boolean) => setDark(dark);

  useEffect(() => {
    setSelectedTheme(dark ? theme.dark : theme.light);
  }, [dark]);

  return (
    <PlainUIContext.Provider value={{ dark, theme: selectedTheme, setDarkMode }}>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </PlainUIContext.Provider>
  );
};

export const usePlainUIContext: () => PlainUIContextProps = () => {
  const context = useContext(PlainUIContext);
  if (!context) {
    throw new Error("usePlainUIContext must be used within a PlainUIProvider");
  }
  return context;
};

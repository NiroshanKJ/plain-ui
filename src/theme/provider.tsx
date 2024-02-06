import React, { FC, createContext, useContext, useState } from "react";
import { PlainUIContextProps, PlainUIProviderProps, ThemeState } from "./types";
import { getFirstKeyInObject, prepareTheme } from "../helpers";

const PlainUIContext = createContext<PlainUIContextProps>(undefined);

export const PlainUIProvider: FC<PlainUIProviderProps> = ({
  children,
  themes,
}) => {
  console.log("renders");

  const themeState: ThemeState = prepareTheme(
    themes,
    getFirstKeyInObject(themes)
  );
  const [theme, setTheme] = useState<ThemeState>(themeState);

  const setCurrentTheme = (themeName: string) => {
    const themeState: ThemeState = prepareTheme(themes, themeName);
    setTheme(themeState);
  };

  return (
    <PlainUIContext.Provider
      value={{
        theme: theme.theme,
        setTheme: setCurrentTheme,
      }}
    >
      <div style={theme.themeStyle}>{children}</div>
    </PlainUIContext.Provider>
  );
};

export const usePlainUI = () => {
  const context = useContext(PlainUIContext);
  if (!context)
    throw new Error(
      "usePlainUI must be used within a PlainUIProvider to access the Plain UI context."
    );
  return context;
};

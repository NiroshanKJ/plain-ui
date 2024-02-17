import { ReactNode } from "react";

export type ThemeProviderProps = {
  children: ReactNode;
};

export type ThemeContextProps =
  | {
      darkMode: boolean;
      toggleDarkMode: () => void;
    }
  | undefined;

export type Theme = any;

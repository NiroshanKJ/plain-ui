import React from "react";
import { ThemeProviderProps } from "./types";
export declare const ThemeContext: React.Context<{
    darkMode: boolean;
    toggleDarkMode: () => void;
}>;
export declare const useTheme: () => {
    darkMode: boolean;
    toggleDarkMode: () => void;
};
export declare const ThemeProvider: ({ children }: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;

import { ReactNode } from "react";
export type UIVariant = "primary" | "secondary" | "info" | "warning" | "danger";
export interface PlainUIContextProps {
    dark: boolean;
    setDarkMode: (dark: boolean) => void;
    theme: PlainUITheme;
}
export type PlainUIProviderProps = {
    children: ReactNode;
    theme: PlainUIThemeConfig | undefined;
};
export interface PlainUITheme {
    color: {
        primary: string;
        secondary: string;
        info: string;
        warning: string;
        danger: string;
    };
}
export interface PlainUIThemeConfig {
    dark: PlainUITheme;
    light: PlainUITheme;
}

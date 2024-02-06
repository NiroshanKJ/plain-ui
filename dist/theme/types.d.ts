import { ReactNode } from "react";
export interface PlainUITheme {
    name: string;
    theme: {
        primary: string;
        secondary: string;
        info: string;
        success: string;
        warning: string;
        danger: string;
    };
    button: {
        padding: string;
        border: string;
        borderRadius: string;
        boxShadow: string;
        fontSize: string;
        fontWeight: string;
        fontWhite: boolean;
    };
    column: {
        textAlign: string;
        background: string;
        padding: string;
        border: string;
        borderRadius: string;
        boxShadow: string;
        fontSize: string;
        fontWeight: string;
        fontWhite: boolean;
    };
    row: {
        padding: string;
    };
    input: {
        backgroundColor: string;
        labelColor: string;
        padding: string;
        border: string;
        borderRadius: string;
        boxShadow: string;
        fontSize: string;
        fontWeight: string;
        fontWhite: boolean;
    };
}
export type ThemeName = keyof PlainUITheme | string;
export type PlainUIContextProps = {
    theme: PlainUITheme;
    setTheme: (theme: ThemeName | string) => void;
} | undefined;
export type PlainUIThemes = {
    [key: string]: PlainUITheme;
};
export type PlainUIProviderProps = {
    children: ReactNode;
    themes: PlainUIThemes;
};
export type ThemeState = {
    theme: PlainUITheme;
    themeStyle: any;
};
export type UITypes = "primary" | "secondary" | "info" | "warning" | "danger" | "success";

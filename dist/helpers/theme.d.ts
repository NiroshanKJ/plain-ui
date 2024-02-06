import { PlainUIThemes, ThemeName, UITypes } from "../theme";
import { Percentage, RemSize } from "../ui/types";
export declare const getMeasurement: (value: Percentage | RemSize) => "1rem" | "2rem" | "4rem" | "16rem" | "32rem" | "64rem" | "128rem" | "256rem" | "512rem" | "1024rem" | "2048rem" | "4096rem" | "100%" | "50%" | "25%" | "10%" | "5%" | "1%" | "rem";
export declare const getColorByVariant: (variant?: UITypes) => "var(--btn-primary-bg-color)" | "var(--btn-secondary-bg-color)" | "var(--btn-info-bg-color)" | "var(--btn-warning-bg-color)" | "var(--btn-danger-bg-color)" | "var(--btn-success-bg-color)" | "#ddd";
export declare const prepareTheme: (themes: PlainUIThemes, themeName: ThemeName) => {
    theme: import("../theme").PlainUITheme;
    themeStyle: {
        "--btn-primary-bg-color": string;
        "--btn-secondary-bg-color": string;
        "--btn-info-bg-color": string;
        "--btn-warning-bg-color": string;
        "--btn-danger-bg-color": string;
        "--btn-success-bg-color": string;
    };
};

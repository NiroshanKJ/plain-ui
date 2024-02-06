import { FC } from "react";
import { PlainUIProviderProps } from "./types";
export declare const PlainUIProvider: FC<PlainUIProviderProps>;
export declare const usePlainUI: () => {
    theme: import("./types").PlainUITheme;
    setTheme: (theme: string) => void;
};

import { ThemeTypes } from "../../types/theme";
import { ReactNode } from "react";
export type ButtonProps = {
    type?: ThemeTypes;
    children?: ReactNode;
    onClick?: () => void;
};
export declare const Button: ({ children, type, onClick, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map
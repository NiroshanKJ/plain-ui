import { ReactNode } from "react";
import { UIVariations } from ".";
export type ButtonProps = {
    variant?: UIVariations;
    onClick?: () => void;
    label?: string;
    children?: ReactNode;
    textWhite?: boolean;
    disabled?: boolean;
};
export declare const Button: ({ label, onClick, children, variant, textWhite, disabled, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;

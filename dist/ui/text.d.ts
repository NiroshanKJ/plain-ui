import { ReactNode } from "react";
export type TextProps = {
    type?: string;
    children: ReactNode;
};
export declare const Text: ({ type, children }: TextProps) => import("react/jsx-runtime").JSX.Element;

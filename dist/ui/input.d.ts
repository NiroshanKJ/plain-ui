export type InputProps = {
    type?: "text" | "email" | "password" | "number";
    onChange?: () => void;
    label?: string;
    disabled?: boolean;
};
export declare const Input: ({ label, onChange, disabled, type, }: InputProps) => import("react/jsx-runtime").JSX.Element;

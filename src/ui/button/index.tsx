import { ThemeTypes } from "../../types/theme";
import { ReactNode } from "react";

export type ButtonProps = {
  type?: ThemeTypes;
  children?: ReactNode;
  onClick?: () => void;
};

export const Button = ({
  children,
  type = "primary",
  onClick = () => {},
}: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

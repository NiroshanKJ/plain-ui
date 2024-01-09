import { UIVariant } from "../theme/types";

export type ButtonProps = {
  variant: UIVariant;
  label: string;
  onClick?: () => void;
};

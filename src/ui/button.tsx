import { ReactNode } from "react";
import styled from "styled-components";
import { UIVariations } from ".";
import { getBackgroundVariant } from "./helpers";

export type ButtonProps = {
  variant?: UIVariations;
  onClick?: () => void;
  label?: string;
  children?: ReactNode;
  textWhite?: boolean;
  disabled?: boolean;
};

const StyledButton = styled.button<{
  disabled: boolean;
  $variant: UIVariations;
  $textwhite: string;
}>`
  color: ${(props) => props.$textwhite ? '#fff' : "#000"};
  display: inline-block;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0.4em;
  // transition: all 0.3s ease;
  background-color: var(${(props) => getBackgroundVariant(props.$variant)});

  &:hover {
      font-weight: bold;
  }

  &:focus {
    outline: none;
  }

  &:active {
    
  }
`;

export const Button = ({
  label,
  onClick,
  children,
  variant = UIVariations.PRIMARY,
  textWhite = true,
  disabled = false,
}: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      $textwhite={textWhite.toString()}
      $variant={variant}
    >
      {children || label}
    </StyledButton>
  );
};

import { styled } from "styled-components";
import { PlainUITheme, UITypes, usePlainUI } from "../../theme";
import { getColorByVariant, getMeasurement } from "../../helpers";
import { Percentage } from "../types";
import React, { ReactNode } from "react";

export interface ButtonProps {
  id?: string;
  label?: string;
  children?: ReactNode;
  variant?: UITypes;
  width?: Percentage;
  onClick?: () => void;
}

const StyledButton = styled.button<{
  $variant: UITypes;
  theme: PlainUITheme;
  width: Percentage;
}>`
  width: ${(props) => getMeasurement(props.width)};
  background-color: ${(props) => getColorByVariant(props.$variant)};
  display: inline-block;
  padding: ${(props) => props.theme.button.padding};
  font-size: ${(props) => props.theme.button.fontSize};
  font-weight: ${(props) => props.theme.button.fontWeight};
  color: ${(props) => (props.theme.button.fontWhite ? "#fff" : "#000")};
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: ${(props) => props.theme.button.border};
  border-radius: ${(props) => props.theme.button.borderRadius};
  -webkit-box-shadow: ${(props) => props.theme.button.boxShadow};
  -moz-box-shadow: ${(props) => props.theme.button.boxShadow};
  box-shadow: ${(props) => props.theme.button.boxShadow};
`;

export const Button = ({
  id,
  label,
  children,
  variant = "primary",
  onClick,
  width = "full",
}: ButtonProps) => {
  const { theme } = usePlainUI();
  return (
    <StyledButton
      id={id}
      width={width}
      theme={theme}
      $variant={variant}
      onClick={onClick}
    >
      {label || children}
    </StyledButton>
  );
};

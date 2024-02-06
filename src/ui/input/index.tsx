import React, { ChangeEvent } from "react";
import { styled } from "styled-components";
import { PlainUITheme, UITypes, usePlainUI } from "../../theme";
import { generateRandomString } from "../../helpers/crypto";

export interface InputProps {
  label?: string;
  type?: "text" | "number" | "email" | "password";
  name?: string;
  value?: string;
  onChange?: (element: ChangeEvent<HTMLInputElement>) => void;
}

export type InputType = "text" | "number" | "email" | "password";

const StyledInputLabel = styled.label<{ theme: PlainUITheme }>`
  width: 100%;
  text-align: left;
  display: block;
  font-weight: bold;
  color: ${(props) => props.theme.input.labelColor};
`;

const StyledInput = styled.input<{
  type: InputType;
  theme: PlainUITheme;
}>`
  width: 100%;
  margin-top: 0.2rem;
  color: gray;
  background-color: ${(props) => props.theme.input.backgroundColor};
  display: block;
  padding: ${(props) => props.theme.input.padding};
  font-size: ${(props) => props.theme.input.fontSize};
  font-weight: ${(props) => props.theme.input.fontWeight};
  color: ${(props) => (props.theme.input.fontWhite ? "#fff" : "#000")};
  border: ${(props) => props.theme.input.border};
  border-radius: ${(props) => props.theme.input.borderRadius};
  -webkit-box-shadow: ${(props) => props.theme.input.boxShadow};
  -moz-box-shadow: ${(props) => props.theme.input.boxShadow};
  box-shadow: ${(props) => props.theme.input.boxShadow};
  margin-bottom: 1rem;
`;

export const Input = ({
  label,
  value,
  type = "text",
  onChange,
  name,
}: InputProps) => {
  const { theme } = usePlainUI();
  const id = name || generateRandomString();
  return (
    <div className="input" style={{ width: "100%" }}>
      <StyledInputLabel htmlFor={id} theme={theme}>
        {label}
        <StyledInput
          role="input"
          value={value || ""}
          id={id}
          name={id}
          theme={theme}
          type={type}
          onChange={(e) => {
            onChange && onChange(e);
          }}
        />
      </StyledInputLabel>
    </div>
  );
};

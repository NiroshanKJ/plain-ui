import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { UIVariations } from ".";
import { getBackgroundVariant } from "./helpers";

export type InputProps = {
  type?: string;
  onChange?: () => void;
  label?: string;
  disabled?: boolean;
};

const StyledInput = styled.input.attrs((props) => ({
  disabled: props.disabled,
}))`
  padding: 13px 10px;
  border: 0.1em solid #cdcdcd;
  border-radius: 0.5em;
  cursor: pointer;
  font-size: 1em;
  min-width: 15em;
  margin-bottom: 1em;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}

  &:focus {
    outline: none;
  }
`;

const StyledLabel = styled.label`
  font-weight: bold;
  display: block;
`;

export const Input = ({
  label,
  onChange,
  disabled = false,
  type = "text",
}: InputProps) => {
  return (
    <div className="input">
      <StyledLabel className="input-label">{label}</StyledLabel>
      <StyledInput type={type} disabled={disabled} onChange={onChange} />
    </div>
  );
};

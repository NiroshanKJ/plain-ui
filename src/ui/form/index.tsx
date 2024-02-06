import React from "react";
import { FormEvent, ReactNode } from "react";
import styled from "styled-components";
import { Displayes } from "../types";

export interface FormProps {
  action?: string;
  children: ReactNode;
  method?: string;
  autoComplete?: string;
  display?: Displayes;
  onSubmit?: (event: FormEvent) => {};
}

const StyledForm = styled.form<{
  action?: string;
  children: ReactNode;
  method?: string;
  autoComplete?: string;
  display?: Displayes;
  onSubmit?: (event: FormEvent) => {};
}>`
  display: ${(props) => props.display || "block"};
`;

export const Form = (props: FormProps) => <form {...props} />;

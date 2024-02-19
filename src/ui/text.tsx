import React, { ReactNode } from "react";

export type TextProps = {
  type?: string;
  children: ReactNode;
};

export const Text = ({ type, children }: TextProps) => {
  const elementTypeMap = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
    label: "label",
    span: "span",
  };

  const ElementType = elementTypeMap[type] || "span";
  return <ElementType>{children}</ElementType>;
};

import React, { ReactNode } from "react";
import { styled } from "styled-components";
import { PlainUITheme, usePlainUI } from "../../theme";
import {
  convertObjectToCss,
  getFlexValueByProps,
  getXYDemensionsByProps,
} from "../../helpers";
import {
  ContentDirection,
  Height,
  HorizontalAlignProps,
  ObjectType,
  VerticalAignProps,
  Width,
} from "../types";

export interface ColumnProps {
  size?: number | string;
  height?: Height;
  width?: Width;
  alignItems?: VerticalAignProps;
  justifyContent?: HorizontalAlignProps;
  onClick?: () => void;
  children?: ReactNode;
  contentDirection?: ContentDirection;
  customCss?: ObjectType;
}

const StyledColumn = styled.div<{
  size: string;
  theme: PlainUITheme;
  $height: Height;
  $width: Width;
  $alignItems: VerticalAignProps;
  $justifyContent: HorizontalAlignProps;
  $contentDirection: ContentDirection;
  $customcss: ObjectType;
}>`
  height: ${(props) => getXYDemensionsByProps(props.$height)};
  width: ${(props) => getXYDemensionsByProps(props.$width)};
  background: ${(props) => props.theme.column.background};
  padding: ${(props) => props.theme.column.padding};
  font-size: ${(props) => props.theme.column.fontSize};
  font-weight: ${(props) => props.theme.column.fontWeight};
  color: ${(props) => (props.theme.column.fontWhite ? "#fff" : "#000")};
  text-align: ${(props) => props.theme.column.textAlign};
  display: flex;
  flex: ${(props) => props.size};
  flex-direction: ${(props) => props.$contentDirection};
  justify-content: ${(props) => getFlexValueByProps(props.$justifyContent)};
  align-items: ${(props) => getFlexValueByProps(props.$alignItems)};
  border: ${(props) => props.theme.column.border};
  border-radius: ${(props) => props.theme.column.borderRadius};
  -webkit-box-shadow: ${(props) => props.theme.column.boxShadow};
  -moz-box-shadow: ${(props) => props.theme.column.boxShadow};
  box-shadow: ${(props) => props.theme.column.boxShadow};
  ${(props) => convertObjectToCss(props.$customcss)}

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    background: yellow;
  }
`;

export const Column = ({
  size = "none",
  height = "auto",
  width = "auto",
  children,
  alignItems = undefined,
  justifyContent = "left",
  contentDirection = "row",
  onClick,
  customCss = {},
}: ColumnProps) => {
  const { theme } = usePlainUI();
  return (
    <StyledColumn
      $customcss={customCss}
      $height={height}
      $width={width}
      className="column"
      size={`${size}`}
      $contentDirection={contentDirection}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      theme={theme}
      onClick={onClick}
    >
      {children}
    </StyledColumn>
  );
};

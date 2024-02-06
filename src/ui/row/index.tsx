import React, { ReactNode } from "react";
import { styled } from "styled-components";
import { PlainUITheme, usePlainUI } from "../../theme";
import {
  ContentDirection,
  Height,
  HorizontalAlignProps,
  VerticalAignProps,
  Width,
  ObjectType,
} from "../types";
import {
  convertObjectToCss,
  getFlexValueByProps,
  getXYDemensionsByProps,
} from "../../helpers";

export interface RowProps {
  children: ReactNode;
  height?: Height;
  width?: Width;
  alignItems?: VerticalAignProps;
  justifyContent?: HorizontalAlignProps;
  contentDirection?: ContentDirection;
  customCss?: ObjectType;
}

const StyledRow = styled.div<{
  theme: PlainUITheme;
  $height: Height;
  $width: Width;
  $alignItems: VerticalAignProps;
  $justifyContent: HorizontalAlignProps;
  $contentdirection: ContentDirection;
  $customcss: ObjectType;
}>`
  height: ${(props) => getXYDemensionsByProps(props.$height)};
  width: ${(props) => getXYDemensionsByProps(props.$width)};
  flex-direction: ${(props) => props.$contentdirection};
  display: flex;
  padding: ${(props) => props.theme.row.padding};
  align-items: ${(props) => getFlexValueByProps(props.$alignItems)};
  justify-content: ${(props) => props.$justifyContent};
  flex-direction: ${(props) => props.$contentdirection};
  ${(props) => convertObjectToCss(props.$customcss)};
  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 480px) {
    display: block;
  }
`;

export const Row = ({
  children,
  height = "auto",
  width = "auto",
  alignItems = "top",
  justifyContent = "left",
  contentDirection = "row",
  customCss = {},
}: RowProps) => {
  const { theme } = usePlainUI();
  return (
    <StyledRow
      $customcss={customCss}
      $height={height}
      $width={width}
      className="row"
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      theme={theme}
      $contentdirection={contentDirection}
    >
      {children}
    </StyledRow>
  );
};

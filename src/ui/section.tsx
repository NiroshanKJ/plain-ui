import { ReactNode } from "react";
import styled from "styled-components";

export type SectionProps = {
  width?: string;
  children?: ReactNode;
};

const StyledDiv = styled.div<{ $width: string }>`
  width: ${(props) => props.$width};
  background-color: #efefef;
  border: 1px solid #d6d6d6;
  padding: 1em;
  border-radius: 0.5em;
`;

export const Section = ({ children, width = "auto" }: SectionProps) => {
  return <StyledDiv className='section' $width={width}>{children}</StyledDiv>;
};

import styled from "styled-components";

export type ImageProps = {
  src: string;
  cover?: boolean;
  alt?: string;
};

const StyledImage = styled.img<{ src: string; alt: string }>`
  display: block;
`;

export const Image = ({ src, alt = "" }: ImageProps) => {
  return <StyledImage className="image" src={src} alt={alt} />;
};

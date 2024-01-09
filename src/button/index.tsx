

// import React from "react";
// import { usePlainUIContext } from "../theme/provider";
// import styled from "styled-components";
// import { ButtonProps } from "./types";

// const PlainButton = ({
//   variant,
//   label,
//   onClick,
//   style
// }: {
//   variant: string;
//   label: string;
//   onClick?: () => void;
//   style: any
// }) => (
//   <button style={style} onClick={onClick} type="button">
//     {label}
//   </button>
// );

// const StyledButton = styled(PlainButton)`
//   background-color: ${(props) =>
//     props.variant
//       ? props.theme.color[props.variant]
//       : props.theme.color.primary};
// `;

// export const Button: React.FC<ButtonProps> = ({
//   variant = "primary",
//   label,
//   onClick,
// }: ButtonProps) => {
//   const { dark, setDarkMode } = usePlainUIContext();
//   return <StyledButton variant={variant} label={label} onClick={onClick} />;
// };

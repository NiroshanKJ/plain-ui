import { PlainUIThemes, ThemeName, UITypes } from "../theme";
import { Percentage, RemSize } from "../ui/types";

export const getMeasurement = (value: Percentage | RemSize) => {
  console.log("🚀 ~ getMeasurement ~ value:", value)
  switch (value) {
    case "full":
      return "100%";
    case "half":
      return "50%";
    case "quater":
      return "25%";
    case "ten":
      return "10%";
    case "five":
      return "5%";
    case "one":
      return "1%";
    case "1":
      return "1rem";
    case "2":
      return "2rem";
    case "4":
      return "4rem";
    case "8":
      return "rem";
    case "16":
      return "16rem";
    case "32":
      return "32rem";
    case "64":
      return "64rem";
    case "128":
      return "128rem";
    case "256":
      return "256rem";
    case "512":
      return "512rem";
    case "1024":
      return "1024rem";
    case "2048":
      return "2048rem";
    case "4096":
      return "4096rem";
    default:
      return "100%";
  }
};

export const getColorByVariant = (variant?: UITypes) => {
  switch (variant) {
    case "primary":
      return "var(--btn-primary-bg-color)";
    case "secondary":
      return "var(--btn-secondary-bg-color)";
    case "info":
      return "var(--btn-info-bg-color)";
    case "warning":
      return "var(--btn-warning-bg-color)";
    case "danger":
      return "var(--btn-danger-bg-color)";
    case "success":
      return "var(--btn-success-bg-color)";
    default:
      return "#ddd";
  }
};

export const prepareTheme = (themes: PlainUIThemes, themeName: ThemeName) => {
  const theme = themes[themeName];
  return {
    theme,
    themeStyle: {
      "--btn-primary-bg-color": theme.theme.primary,
      "--btn-secondary-bg-color": theme.theme.secondary,
      "--btn-info-bg-color": theme.theme.info,
      "--btn-warning-bg-color": theme.theme.warning,
      "--btn-danger-bg-color": theme.theme.danger,
      "--btn-success-bg-color": theme.theme.success,
    },
  };
};

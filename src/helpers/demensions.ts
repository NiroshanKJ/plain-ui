import {
  Height,
  HorizontalAlignProps,
  VerticalAignProps,
  Width,
} from "../ui/types";

export const getXYDemensionsByProps = (
  value: Height | Width,
  isHeight: boolean = true
) => {
  let unit = isHeight ? "vh" : "wh";
  switch (value) {
    case "1":
      return "1rem";
    case "2":
      return "2rem";
    case "4":
      return "4rem";
    case "8":
      return "8rem";
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
    case "full":
      return `100%`;
    case "half":
      return `50%`;
    case "threeQuater":
      return `75%`;
    case "quater":
      return `25%`;
    case "ten":
      return `10%`;
    case "five":
      return `5%`;
    case "one":
      return `1%`;
    case "screenFull":
      return `100${unit}`;
    case "screenHalf":
      return `50${unit}`;
    case "screenThreeQuater":
      return `75${unit}`;
    case "screenQuater":
      return `25${unit}`;
    case "screenTen":
      return `10${unit}`;
    case "screenFive":
      return `5${unit}`;
    case "screenOne":
      return `1${unit}`;
    case "auto":
      return "auto";
  }
};

export const getFlexValueByProps = (
  prop: VerticalAignProps | HorizontalAlignProps
) => {
  let value;
  switch (prop) {
    case "left":
    case "top":
      value = "flex-start";
      break;
    case "center":
    case "middle":
      value = "center";
      break;
    case "right":
    case "bottom":
      value = "flex-end";
      break;
    case "baseline":
      value = "baseline";
      break;
    case "stretch":
      value = "stretch";
      break;
    case "spaceBetween":
      value = "space-between";
      break;
    case "spaceEvenly":
      value = "space-around";
      break;
  }
  return value;
};

// export type VerticalAignProps = "top" | "middle" | "bottom" | "baseline" | "stretch";
// export type HorizontalAlignProps = "left" | "right" | "center" | "spaceBetween" | "spaceAround" | "spaceEvenly"

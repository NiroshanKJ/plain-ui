export type VerticalAignProps =
  | "top"
  | "middle"
  | "bottom"
  | "baseline"
  | "stretch"
  | undefined;

export type HorizontalAlignProps =
  | "left"
  | "right"
  | "center"
  | "spaceBetween"
  | "spaceAround"
  | "spaceEvenly"
  | undefined;

export type ContentDirection = "row" | "column";

export type Percentage = "full" | "half" | "quater" | "threeQuater" |  "ten" | "five" | "one";
export type ScreenPercentage =
  | "screenFull"
  | "screenHalf"
  | "screenThreeQuater"
  | "screenQuater"
  | "screenTen"
  | "screenFive"
  | "screenOne";
export type Auto = "auto";

export type RemSize =
  | "1"
  | "2"
  | "4"
  | "8"
  | "16"
  | "32"
  | "64"
  | "128"
  | "256"
  | "512"
  | "1024"
  | "2048"
  | "4096";

export type Height = RemSize | Percentage | Auto | ScreenPercentage;
export type Width = RemSize | Percentage | Auto | ScreenPercentage;

export type Displayes =
  | "inline"
  | "block"
  | "contents"
  | "flex"
  | "grid"
  | "inline-block"
  | "inline-flex"
  | "inline-grid"
  | "inline-table"
  | "list-item"
  | "run-in"
  | "none"
  | "initial"
  | "inherit";

export type ObjectType = { [key: string]: string };
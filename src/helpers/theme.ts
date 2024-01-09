import { PlainUITheme, UIVariant } from "../theme/types";

export const getThemeColorByType = (type: UIVariant, theme: PlainUITheme) =>
  theme.color[type];

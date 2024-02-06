export * from "./crypto";
export * from "./demensions";
export * from "./theme";

export const getFirstKeyInObject = (object: any) => Object.keys(object)[0];

export const convertObjectToCss = (object: { [key: string]: string }) => {
  let css = "";
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const value = object[key];
      css += `${key}: ${value};`;
    }
  }
  return css;
};

import { Theme } from ".";

export const updateTheme = (theme, darkMode = false) => {
  console.log("🚀 ~ updateTheme ~ theme:", theme);
  localStorage.setItem("themeData", JSON.stringify({ theme, darkMode }));
  const type = darkMode ? "dark" : "light";
  document.documentElement.style.setProperty(
    "--bg-primary",
    theme[type].variant.primary
  );
};

export const getTheme = (defaultTheme: Theme) => {
  const themeData = localStorage.getItem("themeData");
  const parsedTheme = JSON.parse(themeData);
  debugger;
  if (themeData === "undefind" || !parsedTheme.theme) {
    localStorage.setItem(
      "themeData",
      JSON.stringify({ theme: defaultTheme, darkMode: false })
    );
    return { theme: defaultTheme, darkMode: false };
  }
  return parsedTheme;
};

import { Theme } from ".";

export const updateTheme = (theme, darkMode = false) => {
  console.log("🚀 ~ updateTheme ~ theme:", theme);
  localStorage.setItem("themeData", JSON.stringify({ theme, darkMode }));
  const type = darkMode ? "dark" : "light";
  document.documentElement.style.setProperty(
    "--bg-primary",
    theme[type].variant.primary
  );
  document.documentElement.style.setProperty(
    "--bg-secondary",
    theme[type].variant.secondary
  );
  document.documentElement.style.setProperty(
    "--bg-info",
    theme[type].variant.info
  );
  document.documentElement.style.setProperty(
    "--bg-success",
    theme[type].variant.success
  );
  document.documentElement.style.setProperty(
    "--bg-warning",
    theme[type].variant.warning
  );
  document.documentElement.style.setProperty(
    "--bg-danger",
    theme[type].variant.danger
  );
  
};

export const getTheme = (defaultTheme: Theme) => {
  const themeData = localStorage.getItem("themeData");
  const parsedTheme = JSON.parse(themeData);
  if (!parsedTheme || !parsedTheme.theme) {
    localStorage.setItem(
      "themeData",
      JSON.stringify({ theme: defaultTheme, darkMode: false })
    );
    return { theme: defaultTheme, darkMode: false };
  }
  return parsedTheme;
};

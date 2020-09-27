import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { ThemeProvider } from "styled-components";
import { createTheme } from "theme/theme";
import { THEME_COLORS, Red } from "constants/themes";
import { CustomThemeContext } from "./themeContext";

export default function CustomThemeProvider({ children }) {
  const [cookies, setCookie] = useCookies(["color"]);

  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const [themeColor, setThemeColor] = useState(
    cookies.color || Red.primary.main
  );
  const theme = createTheme(THEME_COLORS.get(themeColor));

  function onChangeTheme(color) {
    setThemeColor(color);
    setCookie("color", color);
  }

  return (
    <CustomThemeContext.Provider
      value={{ theme, onChangeTheme, themePickerOpen, setThemePickerOpen }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

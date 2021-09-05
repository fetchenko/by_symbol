import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useWindowSize } from "~/hooks/useWindowSize";
import { getDevice } from "~/theme/theme";
import { THEME_COLORS, Red } from "~/theme/themes-colors";
import { CustomThemeContext } from "./themeContext";
import { ThemeProvider as ThemeProviderJss } from "theming";
import { mediaQueries } from "~/theme/theme";

const themeJss = {
  mediaQueries,
  symbolsTheme: {
    color: "var(--symbol-color-red)",
  },
};

export default function CustomThemeProvider({ children }) {
  const [cookies, setCookie] = useCookies(["color"]);
  const windowSize = useWindowSize();
  const device = getDevice(windowSize.width);

  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const [themeColor, setThemeColor] = useState(
    cookies.color || Red.primary.main
  );
  // const theme = createTheme(THEME_COLORS.get(themeColor));

  function onChangeTheme(color) {
    setThemeColor(color);
    setCookie("color", color);
  }

  return (
    <CustomThemeContext.Provider
      value={{
        // theme,
        onChangeTheme,
        themePickerOpen,
        setThemePickerOpen,
        device,
        windowSize,
      }}
    >
      <ThemeProviderJss theme={themeJss}>
        <div>{children}</div>
      </ThemeProviderJss>
    </CustomThemeContext.Provider>
  );
}

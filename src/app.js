import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, createTheme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Routes from "routes";
import { getLanguage } from "helpers/localization";
import { messages } from "translations";
import { THEME_COLORS, Lime, Red } from "constants/themes";
import { useCookies } from "react-cookie";

const language = getLanguage();

function App() {
  const [cookies, setCookie] = useCookies(["color"]);

  const [themeColor, setThemeColor] = useState(
    cookies.color || Red.primary.main
  );
  const theme = createTheme(THEME_COLORS.get(themeColor));

  function onChangeTheme(color) {
    setThemeColor(color);
    setCookie("color", color);
  }

  const props = {
    theme,
    themeColor,
    onChangeTheme,
  };

  return (
    <BrowserRouter>
      <IntlProvider locale={language} messages={messages[language]}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes {...props} />
        </ThemeProvider>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;

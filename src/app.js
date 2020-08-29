import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, createTheme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Routes from "routes";
import { getLanguage } from "helpers/localization";
import { messages } from "translations";
import { THEME_COLORS, Lime } from "constants/themes";

const language = getLanguage();

function App() {
  const theme = createTheme(THEME_COLORS.get(Lime.primary.main));

  return (
    <BrowserRouter>
      <IntlProvider locale={language} messages={messages[language]}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;

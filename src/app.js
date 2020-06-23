import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, createTheme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import ThemeControl from 'components/blocks/themeControl';
import { IntlProvider } from "react-intl";
import { getLanguage } from "./helpers/localization";
import { messages } from "./translations";
import { THEME_COLORS, Red } from './constants/themes'

const language = getLanguage();
function App() {
  const [themeColor, setThemeColor] = useState(Red.main);
  const theme = createTheme(THEME_COLORS.get(themeColor));

  return (
    <BrowserRouter>
      <IntlProvider locale={language} messages={messages[language]}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ThemeControl onChangedTheme={setThemeColor} />
          <Routes />
        </ThemeProvider>
      </IntlProvider>
    </BrowserRouter >
  );
}

export default App;

import React from "react";
import { GlobalStyle } from "theme/theme";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Routes from "routes";
import { getLanguage } from "helpers/localization";
import { messages } from "translations";
import CustomThemeProvider from "theme/themeProvider";

const language = getLanguage();

function App() {
  return (
    <BrowserRouter>
      <IntlProvider locale={language} messages={messages[language]}>
        <CustomThemeProvider>
          <GlobalStyle />
          <Routes />
        </CustomThemeProvider>
      </IntlProvider>
    </BrowserRouter>
  );
}

export default App;

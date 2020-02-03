import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./theme";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes";
import Layout from "./components/containers/layout";
import { IntlProvider } from "react-intl";
import { getLanguage } from "./helpers/localization";
import { messages } from "./translations";

const language = getLanguage();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <IntlProvider locale={language} messages={messages[language]}>
          <Layout>
            <Navigation />
          </Layout>
        </IntlProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

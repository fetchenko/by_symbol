import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./theme";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes";
import Layout from "./components/containers/layout";
import { IntlProvider } from "react-intl";
import { getLanguage } from "./helpers/localization";
import { messages } from "./translations";

const language = getLanguage();

const ThemeColors = {
  red: {},
  blue: {},
  green: {}
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      themeColor: localStorage.getItem("themeColor") || ThemeColors.red
    };
  }
  componentDidMount() {
    window.addEventListener("storage", this.handleStorageChanges);
  }

  componentWillUnmount() {
    window.removeEventListener("storage", this.handleStorageChanges);
  }

  handleStorageChanges = () => {
    console.log({ theme: localStorage.getItem("themeColor") });
  };

  render() {
    return (
      <BrowserRouter>
        <IntlProvider locale={language} messages={messages[language]}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
              <Navigation />
            </Layout>
          </ThemeProvider>
        </IntlProvider>
      </BrowserRouter>
    );
  }
}

export default App;

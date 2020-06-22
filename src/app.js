import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, createTheme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Layout from "./components/containers/layout";
import { IntlProvider } from "react-intl";
import { getLanguage } from "./helpers/localization";
import { messages } from "./translations";
import { THEME_COLORS, Red } from './constants/themes'

const language = getLanguage();
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: createTheme(THEME_COLORS.get(Red.main))
    };
  }

  handleChangedTheme = (color) => {
    this.setState({
      theme: createTheme(THEME_COLORS.get(color))
    })
  };

  render() {
    return (
      <BrowserRouter>
        <IntlProvider locale={language} messages={messages[language]}>
          <ThemeProvider theme={this.state.theme}>
            <GlobalStyle />
            <Layout onChangedTheme={this.handleChangedTheme}>
              <Routes />
            </Layout>
          </ThemeProvider>
        </IntlProvider>
      </BrowserRouter>
    );
  }
}

export default App;

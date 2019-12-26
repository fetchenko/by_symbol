import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./theme";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes";
import Layout from "./components/containers/layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Navigation />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./theme";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

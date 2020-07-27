import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, createTheme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { IntlProvider } from "react-intl";
import Routes from "./routes";
import ThemeControl from 'components/blocks/themeControl';
import { getLanguage } from "./helpers/localization";
import { messages } from "./translations";
import { THEME_COLORS, Red } from './constants/themes'

const language = getLanguage();

function App() {
  const [themeColor, setThemeColor] = useState(Red.primary.main);
  const theme = createTheme(THEME_COLORS.get(themeColor));

  return (
    <BrowserRouter>
      <IntlProvider locale={language} messages={messages[language]}>
        <ThemeProvider theme={theme}>
          <DndProvider backend={HTML5Backend}>
            <GlobalStyle />
            <ThemeControl color={themeColor} onChangedTheme={setThemeColor} />
            <Routes />
          </DndProvider>
        </ThemeProvider>
      </IntlProvider>
    </BrowserRouter >
  );
}

export default App;

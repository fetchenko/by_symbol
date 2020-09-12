import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import Header from "components/navigation/header";
import MainMenu from "components/menu/mainMenu/index";
import {
  Container,
  HeaderRow,
  ContentRow,
  DesktopView,
  MobileView,
} from "styled/layout";
import { getSymbolIdFromRoute } from "helpers/navigation";
import { createHashLink } from "helpers/link";
import {
  createOptionsConfig,
  createSubOptionsConfig,
} from "helpers/collection";
import { translateMenuOptions } from "helpers/translation";
import Symbols from "./symbols";
import { getSymbolData } from "assets/symbols";
import MainMenuMobile from "components/menu/mainMenu/mainMenuMobile";
import ThemeControl from "components/blocks/themeControl";
import { THEME_COLORS, Red } from "constants/themes";
import { createTheme } from "theme";
import { ThemeProvider } from "styled-components";

const ThemeAnchor = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: solid green;
`;

function getSymbolId(location, options) {
  const symbolIdFromRoute = getSymbolIdFromRoute(location);
  const defaultSymbolId = options.length && options[0];

  return symbolIdFromRoute || defaultSymbolId;
}

function SymbolPage(props) {
  const intl = useIntl();
  const location = useLocation();
  const history = useHistory();

  const mainMenuOptions = translateMenuOptions(intl);
  const mainMenuConfig = createOptionsConfig(mainMenuOptions);
  const subOptionsConfig = createSubOptionsConfig(mainMenuOptions);

  const [symbolId, setSymbolId] = useState(
    getSymbolId(location, mainMenuOptions)
  );

  useEffect(() => {
    const symbolId = getSymbolId(location, mainMenuOptions);
    setSymbolId(symbolId);
  }, [location.hash]);

  function handleNext() {
    const nextValue = mainMenuConfig[symbolId].nextEl;

    if (nextValue) {
      history.push(createHashLink(nextValue));
    }
  }

  function handlePrev() {
    const prevValue = mainMenuConfig[symbolId].prevEl;

    if (prevValue) {
      history.push(createHashLink(prevValue));
    }
  }

  return (
    <Container>
      <HeaderRow>
        <Header />
        {/* <MobileView>
            <MainMenuMobile value={symbolId} options={mainMenuOptions} />
          </MobileView> */}
      </HeaderRow>
      <ContentRow>
        <DesktopView>
          <MainMenu value={symbolId} options={mainMenuOptions} />
        </DesktopView>
        <Symbols
          {...props}
          symbolId={symbolId}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </ContentRow>
    </Container>
  );
}

export default SymbolPage;

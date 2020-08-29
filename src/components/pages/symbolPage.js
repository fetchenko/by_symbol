import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useIntl } from "react-intl";
import Header from "components/navigation/header";
import MainMenu from "components/menu/mainMenu";
import {
  Container,
  HeaderRow,
  ContentRow,
  DesktopView,
  MobileView,
} from "styled/layout";
import { getSymbolIdFromRoute } from "helpers/navigation";
import { createHashLink } from "helpers/link";
import { createOptionsConfig } from "helpers/collection";
import { translateMenuOptions } from "helpers/translation";
import Symbols from "./symbols";

function getSymbolId(location, options) {
  const symbolIdFromRoute = getSymbolIdFromRoute(location);
  const defaultSymbolId = options.length && options[0];

  return symbolIdFromRoute || defaultSymbolId;
}

function SymbolPage() {
  const intl = useIntl();
  const location = useLocation();
  const history = useHistory();

  const menuOptions = translateMenuOptions(intl);
  const menuConfig = createOptionsConfig(menuOptions);

  const [symbolId, setSymbolId] = useState(getSymbolId(location, menuOptions));

  useEffect(() => {
    const symbolId = getSymbolId(location, menuOptions);
    setSymbolId(symbolId);
  }, [location.hash]);

  function handleNext() {
    const nextValue = menuConfig[symbolId].nextEl;

    if (nextValue) {
      history.push(createHashLink(nextValue));
    }
  }

  function handlePrev() {
    const prevValue = menuConfig[symbolId].prevEl;

    if (prevValue) {
      history.push(createHashLink(prevValue));
    }
  }

  return (
    <Container>
      <HeaderRow>
        <Header />
        <MobileView>
          <MainMenu value={symbolId} options={menuOptions} />
        </MobileView>
      </HeaderRow>
      <ContentRow>
        <DesktopView>
          <MainMenu value={symbolId} options={menuOptions} />
        </DesktopView>
        <Symbols symbolId={symbolId} onNext={handleNext} onPrev={handlePrev} />
      </ContentRow>
    </Container>
  );
}

export default SymbolPage;

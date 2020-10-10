import React, { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import { Container, HeaderRow, ContentRow } from "styled/layout";
import Header from "components/navigation/header";
import { breakpoints } from "theme/theme";
import { useTheme } from "theme/themeContext";
import { getSymbolId } from "helpers/navigation";
import { translateMenuOptions } from "helpers/translation";
import {
  createOptionsConfig,
  createSubOptionsConfig,
} from "helpers/collection";
import HeaderMobile from "./headerMobile";
import ContentDesktop from "./contentDesktop";
import ContentMobile from "./contentMobile";

export default function SymbolPage(props) {
  const { windowSize } = props;
  const intl = useIntl();
  const location = useLocation();
  const { themePickerOpen, setThemePickerOpen } = useTheme();

  const symbolsMenuOptions = useMemo(() => translateMenuOptions(intl), [intl]);

  const symbolsMenuConfig = useMemo(
    () => createOptionsConfig(symbolsMenuOptions),
    [symbolsMenuOptions]
  );
  const subOptionsConfig = useMemo(
    () => createSubOptionsConfig(symbolsMenuOptions),
    [symbolsMenuOptions]
  );

  const [symbolId, setSymbolId] = useState(
    getSymbolId(location, symbolsMenuOptions)
  );

  useEffect(() => {
    const symbolId = getSymbolId(location, symbolsMenuOptions);
    setSymbolId(symbolId);
  }, [location, symbolsMenuOptions]);

  useEffect(() => {
    if (window.scrollY) {
      window.scrollTo(0, 0);
    }
  }, [symbolId]);

  const showBackButton = subOptionsConfig[symbolId];
  const isMobile = windowSize.width < breakpoints.md;

  function renderContent() {
    if (!windowSize.width) {
      return null;
    }

    return isMobile ? (
      <ContentMobile
        showBackButton={showBackButton}
        symbolId={symbolId}
        symbolsMenuOptions={symbolsMenuOptions}
        symbolsMenuConfig={symbolsMenuConfig}
        subOptionsConfig={subOptionsConfig}
      />
    ) : (
      <ContentDesktop
        symbolId={symbolId}
        symbolsMenuOptions={symbolsMenuOptions}
      />
    );
  }

  function handleClosePicker() {
    if (themePickerOpen) setThemePickerOpen(false);
  }

  return (
    <Container>
      <HeaderRow>
        <Header />
        {isMobile && (
          <HeaderMobile
            symbolId={symbolId}
            symbolsMenuOptions={symbolsMenuOptions}
            symbolsMenuConfig={symbolsMenuConfig}
            subOptionsConfig={subOptionsConfig}
          />
        )}
      </HeaderRow>
      <ContentRow
        mt={isMobile && showBackButton && "80px"}
        onClick={handleClosePicker}
      >
        {renderContent()}
      </ContentRow>
    </Container>
  );
}

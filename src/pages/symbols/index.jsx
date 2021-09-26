import React, { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import { createUseStyles } from "react-jss";

import { baseStyles } from "~/pages/home";
import { breakpoints } from "~/theme/theme";
import { useTheme } from "~/theme/themeContext";
import { getSymbolId } from "~/helpers/navigation";
import { translateMenuOptions } from "~/helpers/translation";
import {
  createOptionsConfig,
  createSubOptionsConfig,
} from "~/helpers/collection";
import HeaderMobile from "./headerMobile";
import ContentDesktop from "./contentDesktop";
import ContentMobile from "./contentMobile";

const useStyles = createUseStyles(baseStyles)

export default function SymbolPage(props) {
  const intl = useIntl();
  const location = useLocation();
  const { windowSize, themePickerOpen, setThemePickerOpen } = useTheme();

  const contentClasses = useStyles({ noSpaceDesktop: true });

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
    <>
      {isMobile && (
        <HeaderMobile
          symbolId={symbolId}
          symbolsMenuOptions={symbolsMenuOptions}
          symbolsMenuConfig={symbolsMenuConfig}
          subOptionsConfig={subOptionsConfig}
        />
      )}
      <div className={contentClasses.content} onClick={handleClosePicker}>
        {renderContent()}
      </div>
    </>
  );
}

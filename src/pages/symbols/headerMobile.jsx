import React from "react";
import { useHistory } from "react-router-dom";
import { createHashLink } from "~/helpers/link";
import SymbolsMenuMobile from "~/components/menu/symbolsMenu/symbolsMenuMobile";
import ThemeControl from "~/components/theme-control";
import BackButton from "~/components/buttons/backButton";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    zIndex: 1,
    position: "sticky",
    top: "3.75rem",
  },
  themeAnchor: {
    zIndex: 1,
    position: "absolute",
    top: "3.125rem",
    right: 0,
  },
  backButtonAnchor: {
    width: "100%",
    backgroundColor: "var(--background-default)",
  },
});

function SymbolsHeaderMobile(props) {
  const { symbolId, symbolsMenuOptions, symbolsMenuConfig, subOptionsConfig } =
    props;
  const history = useHistory();
  const classes = useStyles();

  function handleNext() {
    const nextValue =
      (symbolsMenuConfig[symbolId] && symbolsMenuConfig[symbolId].nextEl) ||
      (subOptionsConfig[symbolId] && subOptionsConfig[symbolId].nextEl);

    if (nextValue) {
      history.push(createHashLink(nextValue));
    }
  }

  function handlePrev() {
    const prevValue =
      (symbolsMenuConfig[symbolId] && symbolsMenuConfig[symbolId].prevEl) ||
      (subOptionsConfig[symbolId] && subOptionsConfig[symbolId].prevEl);

    if (prevValue) {
      history.push(createHashLink(prevValue));
    }
  }

  const menuOptions = subOptionsConfig[symbolId]
    ? symbolsMenuConfig[subOptionsConfig[symbolId].parentEl.id].subOptions
    : symbolsMenuOptions;

  const showBackButton = subOptionsConfig[symbolId];

  return (
    <div className={classes.container}>
      <SymbolsMenuMobile
        value={symbolId}
        options={menuOptions}
        onNext={handleNext}
        onPrev={handlePrev}
        symbolsMenuConfig={symbolsMenuConfig}
        subOptionsConfig={subOptionsConfig}
      />
      {showBackButton && (
        <div className={classes.backButtonAnchor}>
          <BackButton
            link={createHashLink(subOptionsConfig[symbolId].parentEl.id)}
            label={subOptionsConfig[symbolId].parentEl.title}
          />
        </div>
      )}
      {/* <div className={classes.themeAnchor}>
        <ThemeControl />
      </div> */}
    </div>
  );
}

export default SymbolsHeaderMobile;

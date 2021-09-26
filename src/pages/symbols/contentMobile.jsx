import React from "react";
import { useHistory } from "react-router-dom";
import { Swipeable } from "react-swipeable";
import { getSymbolData } from "~/assets/symbols";
import SymbolNotFound from "~/components/symbol-not-found";
import SymbolSummary from "~/components/symbol-summary";
import SymbolsContent from "~/components/symbols-view";
import { createHashLink } from "~/helpers/link";
import Align, { DIRECTIONS } from "~/components/align";
import SymbolsSubMenu from "./symbolsSubMenu";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "auto",

    "& > div": {
      height: "100%",
    },
  },
});

function SymbolPage(props) {
  const { symbolId, symbolsMenuConfig, subOptionsConfig, showBackButton } =
    props;
  const history = useHistory();
  const classes = useStyles();

  const symbolData = getSymbolData(symbolId);

  if (
    symbolsMenuConfig[symbolId] &&
    symbolsMenuConfig[symbolId].subOptions.length
  ) {
    return (
      <div className={classes.root}>
        <Swipeable onSwipedLeft={handleNext} onSwipedRight={handlePrev}>
          <SymbolsSubMenu options={symbolsMenuConfig[symbolId].subOptions} />
        </Swipeable>
      </div>
    );
  }

  if (!symbolData) {
    return <SymbolNotFound />;
  }

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

  return (
    <div className={classes.root}>
      <Swipeable onSwipedLeft={handleNext} onSwipedRight={handlePrev}>
        <Align direction={DIRECTIONS.column}>
          <SymbolSummary
            title={symbolData.title}
            description={symbolData.description}
          />
          <SymbolsContent symbolId={symbolId} symbols={symbolData.symbols} />
        </Align>
      </Swipeable>
    </div>
  );
}

export default SymbolPage;

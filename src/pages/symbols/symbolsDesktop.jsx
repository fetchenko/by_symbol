import React from "react";
import { getSymbolData } from "~/assets/symbols";
import Align, { DIRECTIONS } from "~/components/align";
import SymbolSummary from "~/components/symbol-summary";
import SymbolsContent from "~/components/symbols-view";
import SymbolNotFound from "~/components/symbol-not-found";
import ThemeControl from "~/components/theme-control";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    position: "relative",
    height: "100%",
    width: "100%",

    [theme.mediaQueries.md]: {
      minHeight: "calc(100vh - var(--header-height-lg))",
    },
  },
  themeAnchor: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 0,
  },
}));

function Symbols(props) {
  const { symbolId } = props;
  const classes = useStyles();

  const symbolData = getSymbolData(symbolId);

  return (
    <div className={classes.root}>
      {/* <div className={classes.themeAnchor}>
        <ThemeControl />
      </div> */}
      {symbolData ? (
        <Align direction={DIRECTIONS.column}>
          <SymbolSummary
            title={symbolData.title}
            description={symbolData.description}
          />
          <SymbolsContent symbolId={symbolId} symbols={symbolData.symbols} />
        </Align>
      ) : (
        <SymbolNotFound />
      )}
    </div>
  );
}

export default Symbols;

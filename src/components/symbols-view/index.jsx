import React from "react";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";
import classNames from "classnames";

import Align, { JUSTIFY, ALIGN } from "~/components/align";
import Grid from "~/components/grid";
import {
  getSymbolSizes,
  calcHorizontalRatio,
  calcVertRatio,
} from "./helper";

const useStyles = createUseStyles((theme) => ({
  symbolContainer: {
    padding: "2rem 1rem",

    [theme.mediaQueries.md]: {
      padding: "2rem 2.5rem",
    },
  },
}));

export default function SymbolsContent({
  symbols = [],
  predefinedSize = 0,
  containerClassName,
}) {
  const classes = useStyles();

  return (
    <Align justify={JUSTIFY.center} align={ALIGN.center}>
      {symbols.map((symbol) => {
        const { width, height } = getSymbolSizes(symbol.areas);
        // fix symbol vertically and horizontally into grid size
        const vertRatio = calcVertRatio(width, height);
        const horizontalRatio = calcHorizontalRatio(width, height);

        return (
          <div
            className={classNames(classes.symbolContainer, containerClassName)}
            key={symbol.id}
          >
            <Grid
              {...symbol}
              predefinedSize={predefinedSize}
              vertRatio={vertRatio}
              horizontalRatio={horizontalRatio}
            />
          </div>
        );
      })}
    </Align>
  );
}

SymbolsContent.propTypes = {
  // override default size for symbol
  predefinedSize: PropTypes.number,
  // customize container
  containerClassName: PropTypes.string,
};

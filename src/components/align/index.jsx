import React from "react";
import { oneOf, bool } from "prop-types";
import { createUseStyles } from "react-jss";

export const DIRECTIONS = {
  row: "row",
  column: "column",
};

export const ALIGN = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
};

export const JUSTIFY = {
  between: "space-between",
  center: "center",
};

const useStyles = createUseStyles({
  container: ({ direction, align, justify, wrap }) => ({
    display: "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap ? "wrap" : "nowrap",
  }),
});

export default function Align({ direction, align, justify, wrap, children }) {
  const classes = useStyles({ direction, align, justify, wrap });

  return <div className={classes.container}>{children}</div>;
}

Align.defaultProps = {
  direction: DIRECTIONS.row,
  align: undefined,
  justify: undefined,
  wrap: true,
};

Align.propTypes = {
  direction: oneOf(Object.values(DIRECTIONS)),
  align: oneOf(Object.values(ALIGN)),
  justify: oneOf(Object.values(JUSTIFY)),
  wrap: bool,
};

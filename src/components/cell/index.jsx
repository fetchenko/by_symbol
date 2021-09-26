import React from "react";
import { createUseStyles } from "react-jss";

const useCellStyles = createUseStyles((theme) => ({
  cell: {
    backgroundColor: theme.symbolsTheme.color,
  },
}));

export default function Cell({ area }) {
  const classes = useCellStyles();

  return <div style={{ gridArea: area }} className={classes.cell}></div>;
}

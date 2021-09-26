import React from "react";
import { createUseStyles } from "react-jss";
import Cell from "~/components/cell";

import { calcScaledSize } from "./helper";

const useStyles = createUseStyles((theme) => ({
  grid: ({ predefinedSize, horizontalRatio, vertRatio } = {}) => ({
    display: "grid",
    gridAutoRows: "minmax(1px, 100%)",
    gridAutoColumns: "minmax(1px, 100%)",

    width: predefinedSize || calcScaledSize(horizontalRatio, "sm"),
    height: predefinedSize || calcScaledSize(vertRatio, "sm"),
  }),
  [theme.mediaQueries.sm]: {
    grid: ({ predefinedSize, horizontalRatio, vertRatio } = {}) => ({
      width: predefinedSize || calcScaledSize(horizontalRatio, "md"),
      height: predefinedSize || calcScaledSize(vertRatio, "md"),
    }),
  },
  [theme.mediaQueries.md]: {
    grid: ({ predefinedSize, horizontalRatio, vertRatio } = {}) => ({
      width: predefinedSize || calcScaledSize(horizontalRatio, "lg"),
      height: predefinedSize || calcScaledSize(vertRatio, "lg"),
    }),
  },
}));

export default function Grid({
  id,
  areas,
  predefinedSize,
  vertRatio,
  horizontalRatio,
}) {
  const classes = useStyles({
    id,
    horizontalRatio: horizontalRatio < 1 && horizontalRatio,
    vertRatio: vertRatio < 1 && vertRatio,
    predefinedSize,
  });

  return (
    <div className={classes.grid}>
      {areas.map((area) => (
        <Cell key={area} area={area} />
      ))}
    </div>
  );
}

import { number, oneOf } from "prop-types";
import React from "react";
import { createUseStyles } from "react-jss";

const SIZES = {
  xs: 45,
  sm: 125,
  md: 225,
  lg: 315,
  xl: 465,
};

const useStyles = createUseStyles({
  image: ({ width, height, src }) => ({
    width,
    height,
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }),
});

export default function Image({ width, height, src }) {
  const classes = useStyles({ width, height, src });

  return <div role="img" className={classes.image} />;
}

Image.defaultProps = {
  width: SIZES.md,
  height: SIZES.md,
};

Image.propTypes = {
  width: number,
  height: number,
  size: oneOf([Object.values(SIZES)]),
};

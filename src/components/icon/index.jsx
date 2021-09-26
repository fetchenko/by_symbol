import React from "react";
import classnames from "classnames";
import { node, number, oneOf } from "prop-types";
import { createUseStyles } from "react-jss";

export const COLORS = {
  primary: "primary",
  secondary: "secondary",
};

export const SIZES = {
  sm: "sm",
  md: "md",
};

const useStyles = createUseStyles((theme) => ({
  ...Object.values(COLORS).reduce(
    (acc, color) => ({
      ...acc,
      [`icon-color--${color}`]: {
        fill: `var(--icon-color-${color})`,
      },
    }),
    {}
  ),
  ...Object.values(SIZES).reduce(
    (acc, size) => ({
      ...acc,
      [`icon-size--${size}`]: {
        width: `var(--icon-size-${size})`,
        height: `var(--icon-size-${size})`,
      },
    }),
    {}
  ),
}));

export default function Icon({ icon: Icon, color, size }) {
  const classes = useStyles();
  const classNames = classnames({
    [classes[`icon-color--${color}`]]: color,
    [classes[`icon-size--${size}`]]: size,
  });

  return <Icon className={classNames} />;
}

Icon.defaultProps = {
  color: COLORS.primary,
  size: SIZES.sm,
};

Icon.propTypes = {
  size: number,
  color: oneOf(Object.values(COLORS)),
  icon: node.isRequired,
};

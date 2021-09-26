import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import { oneOf, string, object } from "prop-types";

export const SIZES = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
};

export const COLORS = {
  main: "main",
  light: "light",
  dark: "dark",
  primary: "primary",
  secondary: "secondary",
  onPrimary: "on-primary",
  onSecondary: "on-secondary",
};

export const FONTS = {
  primary: "primary",
  secondary: "secondary",
};

export const TAGS = {
  p: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  label: "label",
};

const useStyles = createUseStyles((theme) => ({
  base: {
    margin: 0,
  },
  ...Object.values(COLORS).reduce(
    (acc, color) => ({
      ...acc,
      [`color--${color}`]: {
        color: `var(--text-color-${color})`,
      },
    }),
    {}
  ),
  ...Object.values(SIZES).reduce(
    (acc, size) => ({
      ...acc,
      [`size--${size}`]: {
        fontSize: `var(--font-size-${size})`,
        lineHeight: `var(--line-height-${size})`,
      },
    }),
    {}
  ),
  ...Object.values(FONTS).reduce(
    (acc, font) => ({
      ...acc,
      [`font--${font}`]: { fontFamily: `var(--font-${font})` },
    }),
    {}
  ),
}));

const breakpoints = {
  xs: SIZES.xs,
  md: SIZES.lg,
};

function Text({ children, size, color, font, className, tag: TextElement }) {
  const classes = useStyles({ breakpoints });

  const classNames = classnames(classes.base, className, {
    [classes[`size--${size}`]]: size,
    [classes[`color--${color}`]]: color,
    [classes[`font--${font}`]]: font,
  });

  return <TextElement className={classNames}>{children}</TextElement>;
}

Text.propTypes = {
  size: oneOf(Object.values(SIZES)),
  color: oneOf(Object.values(COLORS)),
  font: oneOf(Object.values(FONTS)),
  tag: oneOf(Object.values(TAGS)),
  className: string,
  breakpoints: object,
};

Text.defaultProps = {
  size: SIZES.md,
  color: COLORS.primary,
  font: FONTS.primary,
  tag: TAGS.p,
  className: "",
};

export default Text;

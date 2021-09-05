import React from "react";
import { createUseStyles } from "react-jss";
import { Link as RouteLink } from "react-router-dom";
import classnames from "classnames";
import { bool, oneOf, string } from "prop-types";

export const SIZES = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
};

export const TYPES = {
  primary: "primary",
  secondary: "secondary",
  link: "link",
};

const linkTypes = Object.values(TYPES).reduce(
  (acc, type) => ({
    ...acc,
    [type]: {
      color: `var(--text-color-on-${type})`,
      backgroundColor: `var(--${type}-main)`,
      "&:hover": {
        backgroundColor: `var(--${type}-dark)`,
      },
    },
  }),
  {}
);

const linkSizes = Object.values(SIZES).reduce(
  (acc, size) => ({
    ...acc,
    [`size--${size}`]: { fontSize: `var(--font-size-${size})` },
  }),
  {}
);

const useStyles = createUseStyles((theme) => {
  return {
    base: {
      display: "inline-flex",
      alignItems: "center",
      padding: `0.25rem 0.75rem`,
      borderRadius: "0.25rem",
      border: "none",
      lineHeight: "1.4",
      fontFamily: "var(--font-primary)",
      whiteSpace: "nowrap",
      cursor: "pointer",
      textDecoration: "none",
    },
    ...linkTypes,
    ...linkSizes,
  };
});

function ButtonLink({
  active,
  activeType,
  to,
  children,
  size,
  type,
  onClick,
  className,
  externalLink,
  target
}) {
  const classes = useStyles();

  const classNames = classnames(classes.base, className, {
    [classes[`size--${size}`]]: size,
    [classes[(active && activeType) || type]]: type,
  });

  if (externalLink) {
    return (
      <a href={to} className={classNames} target={target}>
        {children}
      </a>
    );
  }

  return to ? (
    <RouteLink to={to} className={classNames}>
      {children}
    </RouteLink>
  ) : (
    <button type="button" className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

ButtonLink.propTypes = {
  size: oneOf(Object.values(SIZES)),
  type: oneOf(Object.values(TYPES)),
  activeType: oneOf([TYPES.primary, TYPES.secondary]),
  className: string,
  externalLink: bool,
  target: string,
};

ButtonLink.defaultProps = {
  size: SIZES.md,
  type: TYPES.link,
  activeType: TYPES.primary,
  className: "",
  externalLink: false,
  target: undefined,
};

export default ButtonLink;

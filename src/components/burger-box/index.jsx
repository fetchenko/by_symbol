import React from "react";
import { createUseStyles } from "react-jss";

const line = (color) => ({
  position: "absolute",
  display: "block",
  width: "1.5rem",
  height: "0.1875rem",
  borderRadius: "0.25rem",
  backgroundColor: color,
});

const useStyles = createUseStyles({
  box: {
    position: "relative",
    display: "inline-block",
    width: "1.5rem",
    height: "1.5rem",
  },
  inner: ({ open, color }) => ({
    ...line(color),
    top: "calc(50% - 0.09375rem)",
    transitionTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    transitionDuration: "0.22s",
    transform: open ? "rotate(225deg)" : "rotate(0)",

    "&::before": {
      ...line(color),
      content: '""',
      top: open ? 0 : 'calc(-1.5rem / 3)',
      transitionDelay: open ? "0s, 0.12s" : "0.25s, 0s",
      transitionDuration: "0.1s, 0.1s",
      transitionTimingFunction: open
        ? "cubic-bezier(0.215, 0.61, 0.355, 1)"
        : "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    },

    "&:after": {
      ...line(color),
      content: '""',
      bottom: open ? 0 : 'calc(-1.5rem / 3)',
      transform: open ? "rotate(-90deg)" : "rotate(0)",
      transitionDelay: open ? "0s, 0.12s" : "0.25s, 0s",
      transitionDuration: "0.1s, 0.22s",
      transitionTimingFunction: open
        ? "ease-out, cubic-bezier(0.215, 0.61, 0.355, 1)"
        : "ease-in, cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    },
  }),
});

export default function BurgerBox({ open, color = 'var(--white)' }) {
  const classes = useStyles({ open, color });

  return (
    <div className={classes.box} open={open}>
      <div className={classes.inner} open={open} />
    </div>
  );
}

import React from "react";
import { createUseStyles } from "react-jss";

import Home from "./home";

export const baseStyles = (theme) => ({
  content: ({ noSpaceDesktop } = {}) => ({
    padding: "var(--content-space-xs)",
    boxSizing: "border-box",

    [theme.mediaQueries.md]: {
      display: "flex",
      justifyContent: "center",
      padding: noSpaceDesktop ? 0 : "var(--content-space-md)",
    },
  }),
});

const useContentStyles = createUseStyles(baseStyles);

export default function HomePage(props) {
  const contentClasses = useContentStyles();

  return (
    <div className={contentClasses.content}>
      <Home {...props} />
    </div>
  );
}

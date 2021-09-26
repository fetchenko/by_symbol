import React from "react";
import Header from "~/components/navigation/header";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  headerRow: {
    position: "sticky",
    height: "var(--header-height-xs)",
    top: 0,
    zIndex: 9,

    [theme.mediaQueries.md]: {
      height: "var(--header-height-lg)",
    },
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.headerRow}>
        <Header />
      </div>
      {children}
    </div>
  );
};

export default Layout;

import React from "react";
import { createUseStyles } from "react-jss";
import { baseStyles } from "~/pages/home";

import About from "./about";

const useStyles = createUseStyles(baseStyles);

function AboutPage() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <About />
    </div>
  );
}

export default AboutPage;

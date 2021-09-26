import React from "react";
import { createUseStyles } from "react-jss";
import { baseStyles } from "~/pages/home";

import Sources from "./sources";

const useStyles = createUseStyles(baseStyles);

function SourcesPage() {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Sources />
    </div>
  );
}

export default SourcesPage;

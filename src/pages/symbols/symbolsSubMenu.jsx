import React from "react";
import { createUseStyles } from "react-jss";
import Link, { SIZES as LINK_SIZES } from "~/components/button-link";
import { createHashLink } from "~/helpers/link";

const useStyles = createUseStyles({
  root: {
    margin: "auto",
  },
  list: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    padding: "1.25rem 0.625rem",
    textAlign: "center",
  },
});

export default function SymbolsSubMenu({ options }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {options.map((option) => {
          return (
            <li key={option.id}>
              <Link to={createHashLink(option.id)} size={LINK_SIZES.sm}>
                {option.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

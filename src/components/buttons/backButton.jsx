import React from "react";
import { createUseStyles } from "react-jss";
import Link from "~/components/button-link";
import { ReactComponent as NavBefore } from "~/icons/nav-before.svg";

const useStyles = createUseStyles({
  link: {
    boxShadow: "0 0 0.25rem var(--primary-light)",
    margin: "0.5rem 0.75rem",
  },
});

export default function BackButton({ label, link }) {
  const classes = useStyles();

  return (
    <Link to={link} className={classes.link}>
      <NavBefore /> {label}
    </Link>
  );
}

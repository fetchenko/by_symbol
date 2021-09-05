import React, { useState } from "react";
import classnames from "classnames";
import { useIntl } from "react-intl";
import BurgerBox from "~/components/burger-box";
import ButtonLink, { TYPES as LINK_TYPES } from "~/components/button-link";
import { useHistory } from "react-router";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  burgerMenu: {
    position: "absolute",
    width: "100%",
    left: 0,
    top: "var(--header-height-xs)",
    backgroundColor: "var(--background-default)",
    boxShadow: "0 0 0.75rem rgba(0, 0, 0, 0.75)",
  },
  openedMenu: {
    maxHeight: 250,
  },
  closedMenu: {
    maxHeight: 0,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflowY: "hidden",
    transitionProperty: "all",
    transitionDuration: "0.5s",
  },
  listItem: {
    width: "100%",
    textAlign: "center",
    padding: "0.75rem 0",
    "&:first-child": {
      paddingTop: "1.5rem",
    },
    "&:last-child": {
      paddingBottom: "1.5rem",
    },
  },
  button: {
    padding: "0.5rem",
  },
}));

export default function BurgerMenu({ options }) {
  const intl = useIntl();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <ButtonLink
        type="primary"
        onClick={() => setOpen(!open)}
        className={classes.button}
      >
        <BurgerBox open={open} />
      </ButtonLink>
      <div className={classes.burgerMenu}>
        <ul
          className={classnames(classes.list, {
            [classes.openedMenu]: open,
            [classes.closedMenu]: !open,
          })}
        >
          {options.map((option) => (
            <li
              key={option.path}
              className={classes.listItem}
              onClick={() => {
                history.push(option.path);
                setOpen(false);
              }}
            >
              <ButtonLink type={LINK_TYPES.link} to="#">
                {intl.formatMessage({ id: option.label })}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

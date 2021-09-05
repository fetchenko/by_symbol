import React from "react";
import Link, { TYPES as LINK_TYPES } from "~/components/button-link";
import { useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import { SOURCES, ABOUT, SYMBOLS } from "~/constants/translations";
import BurgerMenu from "~/components/menu/burgerMenu";
import { useTheme } from "~/theme/themeContext";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    zIndex: 19,
  },
  listItem: {
    display: "inline-block",
    margin: "0.5rem 0.625rem",
  },
});

const menuOptions = [
  { label: SYMBOLS, path: '/symbols' },
  { label: SOURCES, path: "/sources" },
  { label: ABOUT, path: "/about" },
];

export default function HeaderMenu() {
  const { device } = useTheme();
  const intl = useIntl();
  const location = useLocation();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {["sm", "md"].includes(device) ? (
        <BurgerMenu options={menuOptions} />
      ) : (
        <ul type="none">
          {menuOptions.map((option) => {
            const active = option.path === location.pathname ? 1 : 0;

            return (
              <li className={classes.listItem} key={option.path}>
                <Link
                  type={LINK_TYPES.primary}
                  active={active}
                  to={option.path}
                >
                  {intl.formatMessage({ id: option.label })}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

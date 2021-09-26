import React, { useState } from "react";
import classnames from "classnames";
import { ReactComponent as ExpandMore } from "~/icons/expand-more.svg";
import { ReactComponent as ExpandLess } from "~/icons/expand-less.svg";
import Link, { SIZES } from "~/components/button-link";
import { createHashLink } from "~/helpers/link";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    position: "relative",
    width: "18rem",
    minHeight: "calc(100vh - var(--header-height-lg))",
    boxSizing: "border-box",
    height: "auto",
    padding: "20px",
    backgroundColor: "var(--background-default)",
  },
  line: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "0.25rem",
    height: "100%",
    boxSizing: "border-box",
    border: "solid 0.0625rem var(--primary-light)",
  },
  menu: ({ hiddenMenu } = {}) => ({
    display: hiddenMenu ? "none" : "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,
    margin: 0,
    listStyleType: "none",
    height: "100%",
  }),
  menuItem: {
    margin: "0.25rem",
  },
  subMenu: {
    padding: "0 0 0 1rem",
  },
  subMenuItem: {
    margin: "0.25rem 0.75rem",
  },
}));

function ExpandableMenuItem({ item, activeItem }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <Link onClick={() => setCollapsed(!collapsed)}>
        {item.title}
        {collapsed ? <ExpandMore /> : <ExpandLess />}
      </Link>
      <SubMenu
        options={item.subOptions}
        hidden={collapsed}
        activeItem={activeItem}
      />
    </>
  );
}

function SubMenu({ options, hidden: hiddenMenu, activeItem }) {
  const classes = useStyles({ hiddenMenu });

  return (
    <ul className={classes.menu}>
      {options.map((option) => {
        const active = Number(option.id === activeItem);

        return (
          <li
            className={classnames(classes.menuItem, classes.subMenuItem)}
            key={option.id}
          >
            <Link
              size={SIZES.sm}
              active={active}
              to={createHashLink(option.id)}
            >
              {option.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function SymbolsMenuDesktop({
  options: menuItems,
  value: activeItem,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ul className={classes.menu}>
        {menuItems.map((menuItem) => {
          const { id, title, subOptions } = menuItem;
          const active = Number(id === activeItem);

          return (
            <li key={id} className={classes.menuItem}>
              {subOptions && subOptions.length ? (
                <ExpandableMenuItem item={menuItem} activeItem={activeItem} />
              ) : (
                <Link active={active} to={createHashLink(id)}>
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      <div className={classes.line} />
    </div>
  );
}

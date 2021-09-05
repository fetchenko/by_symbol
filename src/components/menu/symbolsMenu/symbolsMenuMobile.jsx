import React, { useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";
import Link, { SIZES as LINK_SIZES } from "~/components/button-link";
import { createHashLink } from "~/helpers/link";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    width: "100%",
    height: "var(--symbol-menu-height-sm)",
    overflowX: "hidden",
    backgroundColor: "var(--background-default)",

    "&:before, &:after": {
      content: "''",
      position: "absolute",
      top: 0,
      height: "100%",
      width: "0.125rem",
    },
    "&:before": {
      left: "-0.125rem",
      boxShadow: "0.125rem 0 0.25rem var(--primary-light)",
    },
    "&:after": {
      right: "-0.125rem",
      boxShadow: "-0.125rem 0 0.25rem var(--primary-light)",
    },
  },
  list: {
    display: "flex",
    alignItems: "center",
    padding: 0,
    margin: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    boxShadow: "0 0 0.25rem var(--primary-light) inset",
  },
  listItem: {
    padding: "0.25rem",
    "&:first-child": {
      paddingLeft: "0.75rem",
    },

    "&:last-child": {
      paddingRight: "0.75rem",
    },
  },
});

export default function SymbolsMenuMobile(props) {
  const { options, value, onNext, onPrev } = props;

  const listRef = useRef(null);
  const activeItemRef = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    function scrollIntoView() {
      const listWidth = listRef.current.offsetWidth;
      const activeItemLeft = activeItemRef.current.offsetLeft;
      const activeItemWidth = activeItemRef.current.offsetWidth;

      listRef.current.scroll({
        left: activeItemLeft - listWidth / 2 + activeItemWidth / 2,
        behavior: "smooth",
      });
    }

    scrollIntoView();
  }, [value]);

  return (
    <div className={classes.container}>
      <ul className={classes.list} ref={listRef} type="none">
        {options.map((option) => {
          const active = option.id === value ? 1 : 0;

          return (
            <li
              key={option.id}
              ref={active ? activeItemRef : null}
              className={classes.listItem}
            >
              <Link
                size={LINK_SIZES.sm}
                active={active}
                to={createHashLink(option.id)}
              >
                {option.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

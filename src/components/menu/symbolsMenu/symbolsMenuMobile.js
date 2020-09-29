import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Link } from "styled/links";
import { createHashLink } from "helpers/link";
import { ReactComponent as NavBefore } from "icons/nav-before.svg";
import { ReactComponent as NavNext } from "icons/nav-next.svg";

const Root = styled.div`
  height: var(--symbol-menu-height-sm);
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const List = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: ${(props) => props.theme.background.default};
  box-shadow: 0px 0px 4px ${props => props.theme.primary.light} inset;
`;

const IconButton = styled.button`
  width: 72px;
  height: 100%;
  border: none;
  outline: 0;
  background-color: ${(props) => props.theme.primary.light};

  svg {
    fill: ${(props) => props.theme.primary.main};
    width: 32px;
    height: 32px;
  }
`;

const ListItem = styled.li`
  margin: 4px;

  &:first-child {
    padding-left: 12px;
  }

  &:last-child {
    padding-right: 12px;
  }
`;

export default function SymbolsMenuMobile(props) {
  const { options, value, onNext, onPrev } = props;

  const listRef = useRef(null);
  const activeItemRef = useRef(null);

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
    <Root>
      <IconButton onClick={onPrev}>
        <NavBefore />
      </IconButton>
      <List ref={listRef}>
        {options.map((option) => {
          const active = option.id === value ? 1 : 0;

          return (
            <ListItem ref={active ? activeItemRef : null} key={option.id}>
              <Link active={active} to={createHashLink(option.id)}>
                {option.title}
              </Link>
            </ListItem>
          );
        })}
      </List>
      <IconButton onClick={onNext}>
        <NavNext />
      </IconButton>
    </Root>
  );
}

import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ExpandMore } from "icons/expand-more.svg";
import { ReactComponent as ExpandLess } from "icons/expand-less.svg";
import { Link } from "styled/links";
import { createHashLink } from "helpers/link";

const Button = styled(Link).attrs({
  as: "button",
})`
  border: none;

  svg {
    fill: ${(props) =>
      props.active ? "#fff" : props.theme.text.onPrimaryLight};
  }

  &:hover {
    svg {
      fill: #fff;
    }
  }
`;

const Root = styled.div`
  width: 280px;
  min-height: calc(100vh - 70px);
  box-sizing: border-box;
  height: auto;
  padding: 20px 12px;
  box-shadow: 2px 0 4px #ccc;
  background-color: ${(props) => props.theme.background.default};
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  list-style-type: none;
  height: 100%;
`;

const SubMenuView = styled(Menu)`
  padding: 0 0 0 10px;

  a {
    font-size: 16px;
  }
`;

const StyledMenuItem = styled.li`
  margin: 4px;
`;

function MenuItem(props) {
  const { item, activeItem } = props;
  const { id, title, subOptions } = item;
  const active = Number(id === activeItem);

  const hasSubOptions = subOptions && subOptions.length;

  return hasSubOptions ? (
    <ExpandableMenuItem item={item} activeItem={activeItem} />
  ) : (
    <StyledMenuItem>
      <Link active={active} to={createHashLink(id)}>
        {title}
      </Link>
    </StyledMenuItem>
  );
}

function ExpandableMenuItem(props) {
  const { item, activeItem } = props;

  const [collapsed, setCollapsed] = useState(true);

  return (
    <StyledMenuItem>
      <Button onClick={() => setCollapsed(!collapsed)}>
        {item.title}
        {collapsed ? <ExpandMore /> : <ExpandLess />}
      </Button>
      <SubMenu
        options={item.subOptions}
        hidden={collapsed}
        activeItem={activeItem}
      />
    </StyledMenuItem>
  );
}

function SubMenu({ options, hidden, activeItem }) {
  return (
    <SubMenuView style={{ display: hidden ? "none" : "block" }}>
      {options.map((option) => {
        const active = Number(option.id === activeItem);

        return (
          <StyledMenuItem key={option.id}>
            <Link active={active} to={createHashLink(option.id)}>
              {option.title}
            </Link>
          </StyledMenuItem>
        );
      })}
    </SubMenuView>
  );
}

export default function SymbolsMenuDesktop({ options, value }) {
  return (
    <Root>
      <Menu>
        {options.map((option) => (
          <MenuItem key={option.id} activeItem={value} item={option} />
        ))}
      </Menu>
    </Root>
  );
}

import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createHashLink } from "helpers/link";

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  outline: 0;
  padding: 4px 8px;
  font: 18px ${(props) => props.theme.fonts.asap};
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  height: 24px;
  opacity: ${(props) => (props.active ? 0.8 : 1)};
  background-color: ${(props) =>
    props.active ? props.theme.text.onPrimaryLight : "transparent"};
  color: ${(props) =>
    props.active ? "#fff" : props.theme.text.onPrimaryLight};
  box-sizing: content-box;

  &:hover {
    background-color: ${(props) => props.theme.text.onPrimaryLight};
    color: #fff;
  }
`;

const Button = styled(StyledLink).attrs({
  as: "button",
})`
  border: none;
`;

const Root = styled.div`
  width: 280px;
  min-height: calc(100vh - 70px);
  box-sizing: border-box;
  height: 100%;
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

const MenuItem = styled.li`
  margin: 4px;
`;

const SubMenuListItem = styled(MenuItem)``;

function MainMenuItem(props) {
  const { item, activeItem } = props;
  const { id, title, subOptions } = item;
  const active = Number(id === activeItem);

  const hasSubOptions = subOptions && subOptions.length;

  return hasSubOptions ? (
    <ExpandableMenuItem item={item} activeItem={activeItem} />
  ) : (
    <MenuItem>
      <StyledLink active={active} to={createHashLink(id)}>
        {title}
      </StyledLink>
    </MenuItem>
  );
}

function ExpandableMenuItem(props) {
  const { item, activeItem } = props;
  const { id, title, subOptions } = item;

  const [collapsed, setCollapsed] = useState(true);

  return (
    <MenuItem>
      <Button onClick={() => setCollapsed(!collapsed)}>
        {item.title}
        {collapsed ? (
          <span className="material-icons">expand_more</span>
        ) : (
          <span className="material-icons">expand_less</span>
        )}
      </Button>
      <SubMenu
        options={item.subOptions}
        hidden={collapsed}
        activeItem={activeItem}
      />
    </MenuItem>
  );
}

function SubMenu({ options, hidden, activeItem }) {
  return (
    <SubMenuView style={{ display: hidden ? "none" : "block" }}>
      {options.map((option) => {
        const active = Number(option.id === activeItem);

        return (
          <MenuItem key={option.id}>
            <StyledLink active={active} to={createHashLink(option.id)}>
              {option.title}
            </StyledLink>
          </MenuItem>
        );
      })}
    </SubMenuView>
  );
}

function MainMenu({ options, value }) {
  return (
    <Root>
      <Menu>
        {options.map((option) => (
          <MainMenuItem key={option.id} activeItem={value} item={option} />
        ))}
      </Menu>
    </Root>
  );
}

export default MainMenu;

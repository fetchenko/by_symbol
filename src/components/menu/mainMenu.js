import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { createHashLink } from "helpers/link";

const Root = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 56px;
  box-shadow: 2px 0 4px #ccc;
  background-color: ${(props) => props.theme.background.default};

  ${(props) => props.theme.mediaQueries.md} {
    width: 280px;
    min-height: calc(100vh - 70px);
    height: 100%;
    padding: 12px;
    box-sizing: border-box;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: 100%;
  overflow: auto;

  ${(props) => props.theme.mediaQueries.md} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MenuItem = styled.li`
  padding: 0 4px;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }

  ${(props) => props.theme.mediaQueries.md} {
    margin: 6px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.asap};
  text-decoration: none;
  padding: 4px 8px;
  color: ${(props) =>
    props.active ? "#fff" : props.theme.text.onPrimaryLight};
  background-color: ${(props) =>
    props.active ? props.theme.text.onPrimaryLight : "transparent"};
  opacity: 0.7;
  border-radius: 2px;

  ${(props) => props.theme.mediaQueries.md} {
    font-size: 18px;
    color: ${(props) => props.theme.text.onPrimaryLight};
    background-color: transparent;
    text-decoration: ${(props) => (props.active ? "underline" : "none")};
  }
`;

function MainMenu({ options, value }) {
  return (
    <Root>
      <Menu>
        {options.map(({ path, title }) => (
          <MenuItem key={path}>
            <StyledLink
              to={createHashLink(path)}
              active={path === value ? 1 : 0}
            >
              {title}
            </StyledLink>
          </MenuItem>
        ))}
      </Menu>
    </Root>
  );
}

export default MainMenu;

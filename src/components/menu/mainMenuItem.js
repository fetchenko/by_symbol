import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { createHashLink } from "helpers/link";

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

function MainMenuItem({ item, active }) {
  const { path, title } = item;

  return (
    <MenuItem active={active}>
      <StyledLink to={createHashLink(path)}>{title}</StyledLink>
    </MenuItem>
  );
}

export default MainMenuItem;

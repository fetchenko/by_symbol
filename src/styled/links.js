import { Link as RouteLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(RouteLink)`
  display: inline-flex;
  align-items: center;
  outline: 0;
  padding: 4px 8px;
  font: 18px ${(props) => props.theme.fonts.asap};
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  height: 24px;
  background-color: ${(props) =>
    props.active ? props.theme.text.onPrimaryLight : "transparent"};
  color: ${(props) =>
    props.active ? "#fff" : props.theme.text.onPrimaryLight};
  box-sizing: content-box;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  & > svg {
    fill: #fff;
  }

  ${(props) => props.theme.mediaQueries.md} {
    &:hover {
      background-color: ${(props) => props.theme.text.onPrimaryLight};
      color: #fff;
    }
  }
`;

export const BaseLink = styled(RouteLink)`
  text-decoration: none;
  color: #fff;
`
import React from "react";
import styled from "styled-components";
import { Link as RouteLink } from "styled/links";
import { ReactComponent as NavBefore } from "icons/nav-before.svg";

const Link = styled(RouteLink)`
  padding-left: 0;
  margin: 6px 16px;
  background-color: ${(props) => props.theme.background.default};
  box-shadow: 0 0 6px ${props => props.theme.primary.light};
  font-size: 1.2rem;
  line-height: 36px;

  svg {
    fill: ${(props) =>
      props.active ? "#fff" : props.theme.text.onPrimaryLight};
  }
`;

export default function BackButton({ label, link }) {
  return (
    <Link to={link}>
      <NavBefore /> {label}
    </Link>
  );
}

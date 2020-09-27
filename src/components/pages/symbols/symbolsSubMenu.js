import React from "react";
import styled from "styled-components";
import { Link as RouteLink } from "styled/links";
import { createHashLink } from "helpers/link";

const Root = styled.div`
  margin: auto;
`;

const List = styled.ul`
  padding: 20px 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

const Link = styled(RouteLink)`
  line-height: 32px;
  font-size: 1.2rem;
`;

export default function SymbolsSubMenu({ options }) {
  return (
    <Root>
      <List>
        {options.map((option) => {
          return (
            <li key={option.id}>
              <Link to={createHashLink(option.id)}>{option.title}</Link>
            </li>
          );
        })}
      </List>
    </Root>
  );
}

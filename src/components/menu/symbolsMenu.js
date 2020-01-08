import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Path = styled.path`
  stroke: ${props => props.theme.primary.light};
  fill: none;
  stroke-width: ${props => props.strokeWidth || 2};
`;

const CapitalLetter = styled.h4`
  font-size: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.primary.light};
  text-decoration: none;
`;

const SymbolsMenu = () => {
  return (
    <div>
      <Link to="/:sybmols">
        <CapitalLetter>S</CapitalLetter>
      </Link>
      <Link to="/:compositions" />
    </div>
  );
};

export default SymbolsMenu;

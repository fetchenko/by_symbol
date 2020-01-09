import React from "react";
import { Link as RouteLink } from "react-router-dom";
import styled from "styled-components";

const CapitalLetter = styled.h4`
  font-size: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.primary.light};
  text-decoration: none;
  font-family: ${props => props.theme.fonts.teko};
  font-size: 2rem;
  margin: ${props => props.theme.unit * 2}px;
  font-weight: normal;
`;

const Link = styled(RouteLink)`
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
`;

const SymbolsMenu = () => {
  return (
    <Container>
      <Link to="/">
        <CapitalLetter>Sybmol</CapitalLetter>
      </Link>
      <Link to="/compositions">
        <CapitalLetter>Composition</CapitalLetter>
      </Link>
    </Container>
  );
};

export default SymbolsMenu;

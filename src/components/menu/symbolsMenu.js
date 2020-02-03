import React from "react";
import { Link as RouteLink, withRouter } from "react-router-dom";
import styled from "styled-components";

const CapitalLetter = styled.h4`
  font-size: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.primary.light};
  text-decoration: none;
  font-family: ${props => props.theme.fonts.teko};
  font-size: 1.4rem;
  margin: 0 10px 0 0;
  font-weight: normal;
  text-align: end;

  ${props => props.theme.mediaQueries.sm} {
    font-size: 2rem;
  }
`;

const Link = styled(RouteLink)`
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.theme.mediaQueries.sm} {
    flex-direction: row;
  }
`;

const SymbolsMenu = props => {
  const { match } = props;
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

export default withRouter(SymbolsMenu);

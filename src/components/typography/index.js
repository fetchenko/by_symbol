import React from "react";
import styled from "styled-components";

export const Title = styled.h4`
  color: ${props => props.theme.typograpty.primary.main};
  font-size: 1.5rem;
  margin: 0;
  padding: ${props => props.theme.unit * 3}px;

  ${props => props.theme.mediaQueries.sm} {
    font-size: 1.5rem;
  }
`;

export const SymbolTitle = styled.h4`
  font-size: 1.3rem;
  color: ${props => props.theme.primary.main};
  text-align: center;

  ${props => props.theme.mediaQueries.sm} {
    font-size: 1.3rem;
  }
`;

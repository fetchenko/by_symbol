import styled from "styled-components";

export const Title = styled.h4`
  color: ${props => props.theme.typograpty.primary.main};
  font-size: 1.5rem;
  margin: 0;
  padding: ${props => props.theme.unit * 3}px;
  font-family: ${props => props.theme.fonts.merriweather};

  ${props => props.theme.mediaQueries.sm} {
    font-size: 1.4rem;
  }
`;

export const SymbolTitle = styled.h4`
  font-size: 1.3rem;
  color: ${props => props.theme.primary.main};
  text-align: center;
  font-weight: 500;
  font-family: ${props => props.theme.fonts.asap};

  ${props => props.theme.mediaQueries.sm} {
    font-size: 1.6rem;
  }
`;

export const SymbolHint = styled.p`
  opacity: 0.7;
  width: 80%;
  margin: 20px auto;
  text-align: center;

  ${props => props.theme.mediaQueries.sm} {
    width: auto;
    margin: 30px auto;
  }

`
export const SymbolDescription = styled.h4`
  font-size: 1.2rem;
  font-weight: normal;

  ${props => props.theme.mediaQueries.sm} {
    font-size: 1.3rem;
  }
`;

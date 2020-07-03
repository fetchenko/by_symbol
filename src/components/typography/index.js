import styled from "styled-components";

export const Title = styled.h4`
  color: #fff;
  font-size: 1.5rem;
  margin: 0;
  padding: ${props => props.theme.unit * 3}px;
  font-family: ${props => props.theme.fonts.merriweather};

  ${props => props.theme.mediaQueries.sm} {
    font-size: 1.4rem;
  }
`;

export const SymbolTitle = styled.h2`
  margin: 10px 0;
  color: ${props => props.theme.text.onWhite};
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: ${props => props.theme.fonts.asap};

  ${props => props.theme.mediaQueries.sm} {
    margin: 20px 0;
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
  width: 100%;
  margin: 8px 0;
  font-size: 1rem;
  font-weight: normal;
  font-family: ${props => props.theme.fonts.asap};
  white-space: break-spaces;
  text-align: center;

  ${props => props.theme.mediaQueries.sm} {
    margin: 16px 0;
    font-size: 1.3rem;
  }

  ${props => props.theme.mediaQueries.md} {
    width: 60%;
  }
`;

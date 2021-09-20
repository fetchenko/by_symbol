import styled from "styled-components";

export const AppTitle = styled.h4`
  color: #fff;
  font-size: 1.4rem;
  margin: 0;
  font-family: ${(props) => props.theme.fonts.merriweather};

  ${(props) => props.theme.mediaQueries.sm} {
    font-size: 1.4rem;
  }
`;

export const Title = styled.h2`
  margin: 20px 0;
  color: ${(props) => props.theme.text.onWhite};
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.asap};

  ${(props) => props.theme.mediaQueries.sm} {
    margin: 20px 0 30px 0;
    font-size: 1.6rem;
  }
`;

export const Description = styled.h4`
  width: 100%;
  margin: 8px 0;
  padding: 0 1rem;
  font-size: 1rem;
  font-weight: normal;
  font-family: ${(props) => props.theme.fonts.asap};
  white-space: break-spaces;
  text-align: center;
  box-sizing: border-box;

  ${(props) => props.theme.mediaQueries.sm} {
    margin: 16px 0;
    font-size: 1.3rem;
  }

  ${(props) => props.theme.mediaQueries.md} {
    width: 60%;
  }
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.asap};
  font-size: 1.1rem;
  line-height: 26px;
  margin: 20px 0;
`;

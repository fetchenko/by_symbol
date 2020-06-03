import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${props => props.theme.unit * 15}px;
  background-color: ${props => props.theme.primary.main};

  ${props => props.theme.mediaQueries.sm} {
    height: ${props => props.theme.unit * 20}px;
  }
`;

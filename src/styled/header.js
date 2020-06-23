import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.primary.main};
`;

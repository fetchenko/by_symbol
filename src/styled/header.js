import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 ${(props) => props.theme.unit * 3}px;
  background-color: ${(props) => props.theme.primary.main};
  box-shadow: 0px 0px 12px ${(props) => props.theme.primary.light};
`;

import styled from "styled-components";

export const MenuView = styled.div`
  margin: ${props => props.theme.unit * 2}px;
  position: relative;
`;

export const MenuList = styled.ul`
  position: absolute;
  bottom: -120%;
  left: -100%;
  background-color: ${props => props.theme.primary.light};
`;

export const MenuItem = styled.li`
  color: ${props => props.theme.primary.main};
  font-size: 1.3rem;
  margin: 5px 10px;
`;

export const BlockMenuItem = styled.li`
  width: 90px;
  height: 60px;
  list-style-type: none;
  margin: 0px 4px 6px 4px;
  cursor: pointer;
  transition: 0.5s;
`;

export const BlockMenu = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  background-color: ${props => props.theme.primary.light}33;
`;

export const BlockMenuContent = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 4px 0;
  margin: 0;
  overflow: auto hidden;
  scrollbar-color: ${props => props.theme.primary.main}80 ${props => props.theme.primary.light}80; 
  scrollbar-width: thin;
  scrollbar-height: thin;

  &::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${props => props.theme.primary.light}80;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.primary.main}80;
  }
`;

export const MenuButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: ${props => props.theme.primary.light};
  color: ${props => props.theme.primary.main};
  font-size: 3rem;
  padding: 0 ${props => 2 * props.theme.unit}px
    ${props => 2 * props.theme.unit}px ${props => 2 * props.theme.unit}px;
`;

export const PrevButton = styled(MenuButton)``;

export const NextButton = styled(MenuButton)``;

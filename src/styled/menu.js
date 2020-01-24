import React from "react";
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
  border: solid 2px
    ${props =>
      props.active ? props.theme.primary.main : props.theme.primary.light};
  list-style-type: none;
  margin: 0 ${props => props.theme.unit}px;
  cursor: pointer;
`;

export const BlockMenu = styled.ul`
  position: relative;
  margin: 0;
  padding: ${props => 2 * props.theme.unit}px ${props => 9 * props.theme.unit}px;
  background-color: ${props => props.theme.primary.light}33;
`;

export const BlockMenuContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  overflow: auto hidden;
`;

export const MenuButton = styled.button`
  cursor: pointer;
  position: absolute;
  height: 100%;
  border: none;
  background-color: ${props => props.theme.primary.light};
  color: ${props => props.theme.primary.main};
  font-size: 3rem;
  padding: 0 ${props => 2 * props.theme.unit}px
    ${props => 2 * props.theme.unit}px ${props => 2 * props.theme.unit}px;
`;

export const PrevButton = styled(MenuButton)`
  left: 0;
`;

export const NextButton = styled(MenuButton)`
  right: 0;
`;

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

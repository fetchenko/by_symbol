import React from "react";
import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-auto-rows: ${props => props.rows || "25px"};
  grid-auto-columns: ${props => props.columns || "25px"};
  padding: 10px;
`;

export const GridBlock = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.primary.main};
  grid-area: ${props => props.gridArea};
`;

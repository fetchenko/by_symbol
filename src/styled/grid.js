import React from "react";
import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-auto-rows: ${props => props.rows || "10px"};
  grid-auto-columns: ${props => props.columns || "10px"};
  padding: ${props => props.padding};
  grid-row-gap: ${props => props.rowGap};
  grid-column-gap: ${props => props.columnGap};

  ${props => props.theme.mediaQueries.sm} {
    grid-auto-rows: ${props => props.rows || "15px"};
    grid-auto-columns: ${props => props.columns || "15px"};
  }
`;

export const GridBlock = styled.div.attrs(props => ({
  style: {
    backgroundColor: props.theme.primary.main,
    gridArea: props.gridArea
  }
}))`
  width: 100%;
  height: 100%;
`;

import React from "react";
import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-auto-rows: ${props => props.rows || "10px"};
  grid-auto-columns: ${props => props.columns || "10px"};
  padding: ${props => props.padding};
  grid-row-gap: ${props => props.rowGap};
  grid-column-gap: ${props => props.columnGap};
  margin: 0 auto;

  ${props => props.theme.mediaQueries.sm} {
    grid-auto-rows: ${props => props.rowsSm || "15px"};
    grid-auto-columns: ${props => props.columnsSm || "15px"};
  }

  ${props => props.theme.mediaQueries.md} {
    grid-auto-rows: ${props => props.rowsMd || "20px"};
    grid-auto-columns: ${props => props.columnsMd || "20px"};
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

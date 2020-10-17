import React from "react";
import styled from "styled-components";
import { Row } from "styled/flex";
import { getSymbolsLayouts } from "assets/symbols/layouts";
import {
  getSymbolSizes,
  calcHorizontalRatio,
  calcVertRatio,
  calcScaledSize,
} from "./helper";

const SymbolContainer = styled.div`
  padding: 30px;

  ${(props) => props.theme.mediaQueries.md} {
    padding: 32px 40px;
  }
`;

export const Grid = styled.div`
  display: grid;
  width: ${(props) => calcScaledSize(props.horizontalRatio, "sm")}px;
  height: ${(props) => calcScaledSize(props.vertRatio, "sm")}px;
  grid-auto-rows: minmax(1px, 100%);
  grid-auto-columns: minmax(1px, 100%);
  padding: ${(props) => props.padding};

  ${(props) => props.theme.mediaQueries.sm} {
    width: ${(props) => calcScaledSize(props.horizontalRatio, "md")}px;
    height: ${(props) => calcScaledSize(props.vertRatio, "md")}px;
  }

  ${(props) => props.theme.mediaQueries.md} {
    width: ${(props) => calcScaledSize(props.horizontalRatio, "lg")}px;
    height: ${(props) => calcScaledSize(props.vertRatio, "lg")}px;
  }
`;

export const GridBlock = styled.div.attrs((props) => ({
  style: {
    gridArea: props.gridArea,
  },
}))`
  background-color: ${(props) => props.theme.primary.main};
`;

export default function SymbolsContent({ symbolId, symbols }) {
  const symbolsLayout = getSymbolsLayouts(symbolId);

  return (
    <Row wrap="wrap" {...symbolsLayout}>
      {symbols &&
        symbols.map(({ id, areas }) => {
          const { width, height } = getSymbolSizes(areas);
          const vertRatio = calcVertRatio(width, height);
          const horizontalRatio = calcHorizontalRatio(width, height);

          return (
            <SymbolContainer id={id} key={id}>
              <Grid
                vertRatio={vertRatio < 1 && vertRatio}
                horizontalRatio={horizontalRatio < 1 && horizontalRatio}
              >
                {areas.map((area) => (
                  <GridBlock key={area} gridArea={area} />
                ))}
              </Grid>
            </SymbolContainer>
          );
        })}
    </Row>
  );
}

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
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
  width: ${(props) =>
    calcScaledSize(props.horizontalRatio, "sm", props.predefinedSize)}px;
  height: ${(props) =>
    calcScaledSize(props.vertRatio, "sm", props.predefinedSize)}px;
  grid-auto-rows: minmax(1px, 100%);
  grid-auto-columns: minmax(1px, 100%);
  padding: ${(props) => props.padding};

  ${(props) => props.theme.mediaQueries.sm} {
    width: ${(props) =>
      calcScaledSize(props.horizontalRatio, "md", props.predefinedSize)}px;
    height: ${(props) =>
      calcScaledSize(props.vertRatio, "md", props.predefinedSize)}px;
  }

  ${(props) => props.theme.mediaQueries.md} {
    width: ${(props) =>
      calcScaledSize(props.horizontalRatio, "lg", props.predefinedSize)}px;
    height: ${(props) =>
      calcScaledSize(props.vertRatio, "lg", props.predefinedSize)}px;
  }
`;

export const GridBlock = styled.div.attrs((props) => ({
  style: {
    gridArea: props.gridArea,
  },
}))`
  background-color: ${(props) => props.theme.smbl.primary.main};
`;

export default function SymbolsContent({
  symbolId,
  symbols,
  predefinedSize = 0,
  container: CustomContainer,
}) {
  const symbolsLayout = getSymbolsLayouts(symbolId);

  const Container = CustomContainer || SymbolContainer;

  return (
    <Row wrap="wrap" {...symbolsLayout}>
      {symbols &&
        symbols.map(({ id, areas }) => {
          const { width, height } = getSymbolSizes(areas);
          // fix symbol vertically and horizontally into grid size
          const vertRatio = calcVertRatio(width, height);
          const horizontalRatio = calcHorizontalRatio(width, height);

          return (
            <Container id={id} key={id}>
              <Grid
                vertRatio={vertRatio < 1 && vertRatio}
                horizontalRatio={horizontalRatio < 1 && horizontalRatio}
                predefinedSize={predefinedSize}
              >
                {areas.map((area) => (
                  <GridBlock key={area} gridArea={area} />
                ))}
              </Grid>
            </Container>
          );
        })}
    </Row>
  );
}

SymbolsContent.propTypes = {
  // override default size for symbol
  predefinedSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // customize container
  container: PropTypes.node,
};

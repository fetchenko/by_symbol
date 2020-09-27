import React from "react";
import styled from "styled-components";
import { Row } from "styled/flex";
import { GridContainer, GridBlock } from "styled/grid";
import { getSymbolsLayouts } from "assets/symbols/layouts";

const SymbolContainer = styled.div`
  padding: 10px;

  ${(props) => props.theme.mediaQueries.md} {
    padding: 40px;
  }
`;

export default function SymbolsContent({ symbolId, symbols }) {
  const symbolsLayout = getSymbolsLayouts(symbolId);

  return (
    <Row wrap="wrap" {...symbolsLayout}>
      {symbols &&
        symbols.map((symbol) => {
          const {
            sizes: { xs, sm, md },
            areas,
          } = symbol;

          return (
            <SymbolContainer id={symbol.id} key={symbol.id}>
              <GridContainer
                key={symbol.id}
                rows={xs}
                columns={xs}
                rowsSm={sm}
                columnsSm={sm}
                rowsMd={md}
                columnsMd={md}
              >
                {areas.map((area) => (
                  <GridBlock key={area} gridArea={area} />
                ))}
              </GridContainer>
            </SymbolContainer>
          );
        })}
    </Row>
  );
}

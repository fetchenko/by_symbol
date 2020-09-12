import React from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { Row } from "styled/flex";
import { GridContainer, GridBlock } from "styled/grid";
import { getSymbolsLayouts } from "assets/symbols/layouts";
import { SymbolTitle } from "components/typography/index";

const SymbolContainer = styled.div`
  padding: 10px;

  ${(props) => props.theme.mediaQueries.md} {
    padding: 40px;
  }
`;

export default function SymbolsContent({ symbolId, symbols }) {
  const intl = useIntl();
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
              {/* {symbol.title && (
                <SymbolTitle>
                  {intl.formatMessage({ id: symbol.title })}
                </SymbolTitle>
              )} */}
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

import React from 'react';
import styled from 'styled-components';
import { Row } from "styled/flex";
import { GridContainer, GridBlock } from 'styled/grid';

const SymbolContainer = styled.div`
  padding: 20px;

  ${props => props.theme.mediaQueries.md} {
    padding: 40px 60px;
  }
`

function SymbolsContent({ symbols }) {
    return (
        <Row wrap="wrap">
            {symbols && symbols.map((symbol) => {
                const { sizes: { xs, sm, md } } = symbol;

                return (
                    <SymbolContainer key={symbol.id}>
                        <GridContainer
                            key={symbol.id}
                            rows={xs}
                            columns={xs}
                            rowsSm={sm}
                            columnsSm={sm}
                            rowsMd={md}
                            columnsMd={md}
                        >
                            {symbol.areas.map(area => (
                                <GridBlock key={area} gridArea={area} />)
                            )}
                        </GridContainer>
                        {/* {hints && (
                <SymbolHint>
                  {hints.map((hint) => (
                    <FormattedMessage key={hint} id={hint} />
                  ))}
                </SymbolHint>
              )} */}
                    </SymbolContainer>
                )
            })}
        </Row>
    )
}

export default SymbolsContent;


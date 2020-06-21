import React from "react";
import { useParams, useHistory } from 'react-router-dom';
import { Swipeable } from "react-swipeable";
import { FormattedMessage } from "react-intl";
import { getSymbolData } from 'assets/symbols'
import BlockMenu from "components/menu/blockMenu";
import { Carousel, CarouselContent } from "styled/carousel";
import { GridContainer, GridBlock } from 'styled/grid'
import { Column, Row } from "styled/flex";
import { SymbolTitle, SymbolDescription, SymbolHint } from "../typography";
import { DEFAULT_SYMBOL, blockMenuOptions } from 'constants/index'

function Symbol() {
  const { symbolId = DEFAULT_SYMBOL } = useParams();
  const history = useHistory();

  const symbolData = getSymbolData(symbolId) || {};
  const { symbols } = symbolData;

  console.log('...', { symbolId, symbolData, symbols })

  const handleNext = () => {
    const nextValue = blockMenuOptions[symbolId].nextEl;

    if (nextValue) {
      history.push(nextValue)
    }
  };

  const handlePrev = () => {
    const prevValue = blockMenuOptions[symbolId].prevEl;

    if (prevValue) {
      history.push(prevValue)
    }
  };

  return (
    <>
      <BlockMenu />
      <Swipeable
        onSwipedLeft={handleNext}
        onSwipedRight={handlePrev}
      >
        <Carousel>
          <CarouselContent>
            <Column>
              <SymbolTitle>
                <FormattedMessage id={symbolData.title || 'test'} />
              </SymbolTitle>
              <Row>
                {symbols && symbols.map((symbol) => {
                  const { sizes: { xs, sm, md } } = symbol;
                  return (

                    <div style={{ padding: 30 }} key={symbol.id}>
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
                    </div>
                  )
                })}
              </Row>
            </Column>
          </CarouselContent>
        </Carousel>
      </Swipeable>
    </>
  );
}

export default Symbol;


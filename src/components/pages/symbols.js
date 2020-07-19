import React from "react";
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { Swipeable } from "react-swipeable";
import { getSymbolData } from 'assets/symbols'
import { Carousel, CarouselContent } from "styled/carousel";
import { Column } from "styled/flex";
import { DEFAULT_SYMBOL, blockMenuOptions } from 'constants/index';
import SymbolSummary from 'components/blocks/symbolSummary';
import SymbolsContent from 'components/blocks/symbolsContent';
import SymbolNotFound from 'components/blocks/symbolNotFound';

const Root = styled.div`
  height: 100%;
  padding: 20px;
`

const Container = styled.div`
  height: calc(100% - 40px);
  overflow: auto;
`

function Symbols() {
  const { symbolId = DEFAULT_SYMBOL } = useParams();
  const history = useHistory();

  const symbolData = getSymbolData(symbolId);

  if (!symbolData) {
    return (
      <SymbolNotFound />
    )
  }

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
    <Root>
      <Container>
        <Swipeable
          onSwipedLeft={handleNext}
          onSwipedRight={handlePrev}
        >
          <Carousel>
            <CarouselContent>
              <Column>
                <SymbolSummary
                  title={symbolData.title}
                  description={symbolData.description}
                />
                <SymbolsContent
                  symbolId={symbolId}
                  symbols={symbolData.symbols}
                />
              </Column>
            </CarouselContent>
          </Carousel>
        </Swipeable>
      </Container>
    </Root>
  );
}

export default Symbols;


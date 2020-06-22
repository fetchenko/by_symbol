import React from "react";
import { useParams, useHistory } from 'react-router-dom';
import { Swipeable } from "react-swipeable";
import { getSymbolData } from 'assets/symbols'
import BlockMenu from "components/menu/blockMenu";
import { Carousel, CarouselContent } from "styled/carousel";
import { Column } from "styled/flex";
import { DEFAULT_SYMBOL, blockMenuOptions } from 'constants/index';
import SymbolSummary from 'components/blocks/symbolSummary';
import SymbolsContent from 'components/blocks/symbolsContent';
import SymbolNotFound from 'components/blocks/symbolNotFound';

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
    <>
      <BlockMenu />
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
              <SymbolsContent symbols={symbolData.symbols} />
            </Column>
          </CarouselContent>
        </Carousel>
      </Swipeable>
    </>
  );
}

export default Symbols;


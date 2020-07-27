import React from "react";
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { Swipeable } from "react-swipeable";
import { getSymbolData } from 'assets/symbols'
import { useDrop } from 'react-dnd';
import { Carousel, CarouselContent } from "styled/carousel";
import { Column } from "styled/flex";
import { blockMenuOptions } from 'constants/index';
import SymbolSummary from 'components/blocks/symbolSummary';
import SymbolsContent from 'components/blocks/symbolsContent';
import SymbolNotFound from 'components/blocks/symbolNotFound';
import { getSymbolIdFromRoute } from 'helpers/navigation';
import { createHashLink } from 'helpers/link';
import { DragTypes } from "constants/dragTypes";

const Root = styled.div`
  height: 100%;
  padding: 20px;
`

const Container = styled.div`
  height: calc(100% - 40px);
  overflow: auto;
  border: solid 2px transparent;
  border-color: ${({ theme, hovered }) =>
    hovered ? theme.primary.main : 'transparent'};
  border-style: dashed;
  transition: 250ms;
`

function Symbols() {
  const location = useLocation();
  const history = useHistory();

  const symbolId = getSymbolIdFromRoute(location);
  const symbolData = getSymbolData(symbolId);

  const [{ isOver }, drop] = useDrop({
    accept: DragTypes.SYMBOL,
    drop: (item) => {
      history.push(createHashLink(item.id));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  if (!symbolData) {
    return (
      <SymbolNotFound />
    )
  }

  const handleNext = () => {
    const nextValue = blockMenuOptions[symbolId].nextEl;

    if (nextValue) {
      history.push(createHashLink(nextValue))
    }
  };

  const handlePrev = () => {
    const prevValue = blockMenuOptions[symbolId].prevEl;

    if (prevValue) {
      history.push(createHashLink(prevValue))
    }
  };

  return (
    <Root>
      <Container hovered={isOver} ref={drop}>
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


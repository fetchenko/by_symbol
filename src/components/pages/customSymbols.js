import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Swipeable } from "react-swipeable";
import SymbolOfAnt from "../customSymbols/SymbolOfAnt";
import BlocksMenu from "../menu/blocksMenu";
import { CUSTOM_SYMBOL_OPTIONS } from "../../constants";
import { Carousel, CarouselContent } from "../../styled/carousel";
import { SymbolTitle } from "../typography";
import { getNextValue, getPrevValue } from "../../helpers/collection";

const Symbols = props => {
  const [symbol, setSymbol] = useState(CUSTOM_SYMBOL_OPTIONS[0]);

  const handleSelect = value => {
    setSymbol(value);
  };

  const handleNext = () => {
    const nextValue = getNextValue(CUSTOM_SYMBOL_OPTIONS, symbol);

    nextValue && setSymbol(nextValue);
  };

  const handlePrev = () => {
    const prevValue = getPrevValue(CUSTOM_SYMBOL_OPTIONS, symbol);

    prevValue && setSymbol(prevValue);
  };

  return (
    <div>
      <BlocksMenu
        options={CUSTOM_SYMBOL_OPTIONS}
        value={symbol}
        onSelect={handleSelect}
      />
      {symbol && (
        <SymbolTitle>
          <FormattedMessage id={symbol.path} />
        </SymbolTitle>
      )}
      <Swipeable onSwipedLeft={handleNext} onSwipedRight={handlePrev}>
        <Carousel>
          <CarouselContent>
            {symbol.path === "symbol-of-ant" && <SymbolOfAnt />}
          </CarouselContent>
        </Carousel>
      </Swipeable>
    </div>
  );
};

export default Symbols;

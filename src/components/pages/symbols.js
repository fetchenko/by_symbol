import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Swipeable } from "react-swipeable";
import { symbols } from "../symbols";
import BlocksMenu from "../menu/blocksMenu";
import { SYMBOL_OPTIONS } from "../../constants";
import { Carousel, CarouselContent } from "../../styled/carousel";
import { SymbolTitle, SymbolDescription } from "../typography";
import { getNextValue, getPrevValue } from "../../helpers/collection";
import InfoCardLayout from "../layouts/infoCardLayout";

const Symbols = props => {
  const [symbol, setSymbol] = useState(SYMBOL_OPTIONS[0]);

  const handleSelect = value => {
    setSymbol(value);
  };

  const handleNext = () => {
    const nextValue = getNextValue(SYMBOL_OPTIONS, symbol);

    nextValue && setSymbol(nextValue);
  };

  const handlePrev = () => {
    const prevValue = getPrevValue(SYMBOL_OPTIONS, symbol);

    prevValue && setSymbol(prevValue);
  };

  const renderSymbolContent = () => {
    return symbols.map(symbolData => {
      const { path, component: SymbolView } = symbolData;

      return path === symbol.path ? (
        <InfoCardLayout
          key={path}
          title={
            <SymbolTitle>
              <FormattedMessage id={symbol.path} />
            </SymbolTitle>
          }
          description={
            <SymbolDescription>
              <FormattedMessage id={symbol.description} />
            </SymbolDescription>
          }
          image={<SymbolView key={path} />}
        />
      ) : null;
    });
  };

  return (
    <div>
      <BlocksMenu
        options={SYMBOL_OPTIONS}
        value={symbol}
        onSelect={handleSelect}
      />
      <Swipeable onSwipedLeft={handleNext} onSwipedRight={handlePrev}>
        <Carousel>
          <CarouselContent>{renderSymbolContent()}</CarouselContent>
        </Carousel>
      </Swipeable>
    </div>
  );
};

export default Symbols;

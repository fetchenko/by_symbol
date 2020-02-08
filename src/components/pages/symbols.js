import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Swipeable } from "react-swipeable";
// import SymbolOfSpring from "../symbols/symbolOfSpring";
// import SymbolOfWealth from "../symbols/symbolOfWealth";
// import SymbolOfHarvest from "../symbols/symbolOfHarvest";
// import SymbolOfAncestors from "../symbols/symbolOfAncestors";
// import SymbolOfLove from "../symbols/symbolOfLove";
// import SymbolOfWomen from "../symbols/symbolOfWomen";
// import SymbolOfSources from "../symbols/symbolOfSources";
// import SymbolOfMother from "../symbols/symbolOfMother";
// import SymbolOfEarth from "../symbols/symbolOfEarth";
// import SymbolOfSun from "../symbols/symbolOfSun";
import { symbols } from "../symbols";
import BlocksMenu from "../menu/blocksMenu";
import { SYMBOL_OPTIONS } from "../../constants";
import { Carousel, CarouselContent } from "../../styled/carousel";
import { SymbolTitle } from "../typography";
import { getNextValue, getPrevValue } from "../../helpers/collection";

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

  return (
    <div>
      <BlocksMenu
        options={SYMBOL_OPTIONS}
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
            {symbols.map(symbolData => {
              const { path, component: SymbolView } = symbolData;

              return path === symbol.path ? <SymbolView key={path} /> : null;
            })}
          </CarouselContent>
        </Carousel>
      </Swipeable>
    </div>
  );
};

export default Symbols;

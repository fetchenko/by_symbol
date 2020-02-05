import React, { useState } from "react";
import SymbolOfSpring from "../symbols/symbolOfSpring";
import SymbolOfWealth from "../symbols/symbolOfWealth";
import SymbolOfHarvest from "../symbols/symbolOfHarvest";
import SymbolOfAncestors from "../symbols/symbolOfAncestors";
import SymbolOfLove from "../symbols/symbolOfLove";
import SymbolOfWomen from "../symbols/symbolOfWomen";
import SymbolOfSources from '../symbols/symbolOfSources';
import BlocksMenu from "../menu/blocksMenu";
import { SYMBOL_OPTIONS } from "../../constants";
import { Carousel, CarouselContent } from "../../styled/carousel";
import { Title } from "../../styled/typography";
import { FormattedMessage } from "react-intl";

const Symbols = props => {
  const [symbol, setSymbol] = useState(SYMBOL_OPTIONS[0]);

  const handleSelect = value => {
    setSymbol(value);
  };

  return (
    <div>
      <BlocksMenu
        options={SYMBOL_OPTIONS}
        value={symbol}
        onSelect={handleSelect}
      />
      {symbol && (
        <Title>
          <FormattedMessage id={symbol.path} />
        </Title>
      )}
      <Carousel>
        <CarouselContent>
          {symbol.path === "symbol-of-spring" && <SymbolOfSpring />}
          {symbol.path === "symbol-of-wealth" && <SymbolOfWealth />}
          {symbol.path === "symbol-of-harvest" && <SymbolOfHarvest />}
          {symbol.path === "symbol-of-ancestors" && <SymbolOfAncestors />}
          {symbol.path === "symbol-of-love" && <SymbolOfLove />}
          {symbol.path === "symbol-of-women" && <SymbolOfWomen />}
          {symbol.path === "symbol-of-sources" && <SymbolOfSources />}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Symbols;

import React, { useState } from "react";
import { SymbolOfLove } from "../compositions";
import BlocksMenu from "../menu/blocksMenu";
import { COMPOSITIONS } from "../../constants";
import { Carousel, CarouselContent } from "../../styled/carousel";
import { Title } from "../../styled/typography";

const Compositions = props => {
  const [symbol, setSymbol] = useState(COMPOSITIONS[0]);

  const handleSelect = value => {
    setSymbol(value);
  };

  return (
    <div>
      <BlocksMenu
        options={COMPOSITIONS}
        value={symbol}
        onSelect={handleSelect}
      />
      {symbol && <Title>{symbol.label}</Title>}
      <Carousel>
        <CarouselContent>
          {symbol.path === "symbol-of-love" && <SymbolOfLove />}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Compositions;

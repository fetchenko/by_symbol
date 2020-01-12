import React, { useState } from "react";
import SymbolOfSpring from "../symbols/symbolOfSpring";
import SymbolOfWealth from "../symbols/symbolOfWealth";
import SymbolOfHarvest from "../symbols/symbolOfHarvest";
import BlocksMenu from "../menu/blocksMenu";
import styled from "styled-components";
import { SYMBOL_OPTIONS } from "../../constants";

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  margin: ${props => props.theme.unit * 10}px 0;
`;

const CarouselContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h4`
  font-size: 1.3rem;
  color: ${props => props.theme.primary.main};
  text-align: center;
`;

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
      {symbol && <Title>{symbol.label}</Title>}
      <Carousel>
        <CarouselContent>
          {symbol.path === "symbol-of-spring" && <SymbolOfSpring />}
          {symbol.path === "symbol-of-wealth" && <SymbolOfWealth />}
          {symbol.path === "symbol-of-harvest" && <SymbolOfHarvest />}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Symbols;

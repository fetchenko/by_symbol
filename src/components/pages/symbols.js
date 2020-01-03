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

const PrevButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  border: solid ${props => props.theme.primary.light};
  background-color: ${props => props.theme.primary.light};
  color: ${props => props.theme.primary.main};
  font-size: 3rem;
  cursor: pointer;
`;

const NextButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  border: solid ${props => props.theme.primary.light};
  background-color: ${props => props.theme.primary.light};
  color: ${props => props.theme.primary.main};
  font-size: 3rem;
  cursor: pointer;
`;

const CarouselContent = styled.div`
  width: calc(100% - 80px);
  display: flex;
  justify-content: center;
`;

export const Title = styled.h4`
  font-size: 1.3rem;
  color: ${props => props.theme.primary.main};
  text-align: center;
`;

const Symbols = props => {
  const [symbolKey, setSymbolKey] = useState("symbol-of-spring");
  const [symbol, setSymbol] = useState(SYMBOL_OPTIONS[0]);

  // console.log({ symbol });
  return (
    <div>
      <BlocksMenu
        value={symbol}
        onChange={value => {
          setSymbolKey(value);
          const selectedOption = SYMBOL_OPTIONS.find(
            option => option.path === value
          );

          if (selectedOption) {
            setSymbol(selectedOption);
          }
        }}
      />
      {symbol && <Title>{symbol.label}</Title>}
      <Carousel>
        {/* <PrevButton>&#8249;</PrevButton> */}
        <CarouselContent>
          {symbolKey === "symbol-of-spring" && <SymbolOfSpring />}
          {symbolKey === "symbol-of-wealth" && <SymbolOfWealth />}
          {symbolKey === "symbol-of-harvest" && <SymbolOfHarvest />}
        </CarouselContent>
        {/* <NextButton>&#8250;</NextButton> */}
      </Carousel>
    </div>
  );
};

export default Symbols;

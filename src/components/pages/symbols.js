import React, { useState } from "react";
import SymbolOfSpring from "../symbols/symbolOfSpring";
import SymbolOfWealth from "../symbols/symbolOfWealth";
import SymbolOfHarvest from "../symbols/symbolOfHarvest";
import BlocksMenu from "../menu/blocksMenu";
import styled from "styled-components";

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

const Symbols = props => {
  const [symbol, setSymbol] = useState("symbol-of-spring");

  return (
    <div>
      <BlocksMenu />
      <Carousel>
        <PrevButton>&#8249;</PrevButton>
        <CarouselContent>
          {symbol === "symbol-of-spring" && <SymbolOfSpring />}
          {symbol === "symbol-of-wealth" && <SymbolOfWealth />}
          {symbol === "symbol-of-harvest" && <SymbolOfHarvest />}
        </CarouselContent>
        <NextButton>&#8250;</NextButton>
      </Carousel>
    </div>
  );
};

export default Symbols;

import React from "react";
import SymbolOfSpring from "../symbols/symbolOfSpring";
import SymbolOfWealth from "../symbols/symbolOfWealth";
import SymbolOfHarvest from "../symbols/symbolOfHarvest";
import BlocksMenu from "../menu/blocksMenu";

const Symbols = props => {
  return (
    <div>
      {/* <h5>Symbols</h5> */}
      {/* <div>there will be menu of small sybmol views</div> */}
      <BlocksMenu />
      <SymbolOfSpring />
      <SymbolOfWealth />
      <SymbolOfHarvest />
      <div>there will be sybmols with ability to swipe left - right</div>
    </div>
  );
};

export default Symbols;

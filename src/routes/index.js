import React from "react";
import { Switch, Route } from "react-router-dom";
import Symbols from "../components/pages/symbols";
import CustomSymbols from "../components/pages/customSymbols";
import SymbolBuilder from "../components/pages/symbolBuilder";

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/" component={Symbols} />
      <Route exact path="/make-symbol" component={SymbolBuilder} />
      <Route exact path="/custom-symbols" component={CustomSymbols} />
    </Switch>
  );
};

export default Navigation;

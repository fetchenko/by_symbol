import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/pages/home";
import Symbols from "../components/pages/symbols";
import Compositions from "../components/pages/compositions";

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/" component={Symbols} />
      <Route exact path="/compositions" component={Compositions} />
      <Route path="/symbols" component={Symbols} />
    </Switch>
  );
};

export default Navigation;

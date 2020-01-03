import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/pages/home";
import Symbols from "../components/pages/symbols";
import Menu from "../components/pages/menu";

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:view" component={Home} />
      <Route path="/symbols" component={Symbols} />
      <Route path="/menu" component={Menu} />
    </Switch>
  );
};

export default Navigation;

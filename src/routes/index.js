import React from "react";
import { Switch, Route } from "react-router-dom";
import Symbols from "../components/pages/symbols";

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/" component={Symbols} />
    </Switch>
  );
};

export default Navigation;

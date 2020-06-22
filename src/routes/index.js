import React from "react";
import { Switch, Route } from "react-router-dom";
import Symbols from "components/pages/symbols";

const Navigation = () => {
  return (
    <Switch>
      <Route path="/:symbolId?">
        <Symbols />
      </Route>
    </Switch>
  );
};

export default Navigation;

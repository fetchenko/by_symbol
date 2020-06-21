import React from "react";
import { Switch, Route } from "react-router-dom";
import Symbol from "components/pages/symbol";

const Navigation = () => {
  return (
    <Switch>
      <Route path="/:symbolId?">
        <Symbol />
      </Route>
    </Switch>
  );
};

export default Navigation;

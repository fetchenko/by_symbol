import React from "react";
import { Switch, Route } from "react-router-dom";
import SymbolPage from "components/pages/symbolPage";

const Navigation = () => {
  return (
    <Switch>
      <Route path="/:symbolId?">
        <SymbolPage />
      </Route>
    </Switch>
  );
};

export default Navigation;

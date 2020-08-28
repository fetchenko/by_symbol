import React from "react";
import { Switch, Route } from "react-router-dom";
import SymbolPage from "components/pages/symbolPage";
import SourcesPages from "components/pages/sourcesPages";
import AboutPage from "components/pages/aboutPage";

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/sources">
        <SourcesPages />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route path="/:symbolId?">
        <SymbolPage />
      </Route>
    </Switch>
  );
};

export default Navigation;

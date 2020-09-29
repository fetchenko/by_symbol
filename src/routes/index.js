import React from "react";
import { Switch, Route } from "react-router-dom";
import SymbolPage from "components/pages/symbols";
import SourcesPages from "components/pages/sources";
import AboutPage from "components/pages/about";
import { useWindowSize } from "hooks/useWindowSize";

const PAGES = [
  {
    Component: SourcesPages,
    path: "/sources",
    exact: true,
  },
  {
    Component: AboutPage,
    path: "/about",
    exact: true,
  },
  {
    Component: SymbolPage,
    path: "/:symbolId?",
    exact: false,
  },
];

const Navigation = (props) => {
  const windowSize = useWindowSize();

  return (
    <Switch>
      {PAGES.map(({ path, Component, exact }) => (
        <Route key={path} exact={exact} path={path}>
          <Component windowSize={windowSize} />
        </Route>
      ))}
    </Switch>
  );
};

export default Navigation;

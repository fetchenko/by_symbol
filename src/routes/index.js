import React from "react";
import { Switch, Route } from "react-router-dom";

import SymbolPage from "pages/symbols";
import SourcesPages from "pages/sources";
import AboutPage from "pages/about";
import HomePage from "pages/home";
import TestPage from "pages/test";
import { useWindowSize } from "hooks/useWindowSize";
import Header from "components/navigation/header";
import { Container, HeaderRow } from "styled/layout";

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
    Component: HomePage,
    path: "/home",
    exact: true,
  },
  {
    Component: TestPage,
    path: "/test",
    exact: true,
  },
  {
    Component: SymbolPage,
    path: "/:symbolId?",
    exact: false,
  },
  
];

const Pages = () => {
  const windowSize = useWindowSize();
  const { width, height } = windowSize;

  // if (!(width || height)) {
  //   return <div>Loading</div>;
  // }

  return (
    <Container>
      <HeaderRow>
        <Header />
      </HeaderRow>
      <Switch>
        {PAGES.map(({ path, Component, exact }) => (
          <Route key={path} exact={exact} path={path}>
            <Component windowSize={windowSize} />
          </Route>
        ))}
      </Switch>
    </Container>
  );
};

export default Pages;

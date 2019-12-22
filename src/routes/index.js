import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/pages/home";

const Navigation = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Navigation;

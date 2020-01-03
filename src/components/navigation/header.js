import React from "react";
import { Header } from "../../styled/header";
import { Title } from "../typography";
import SymbolsMenu from "../menu/symbolsMenu";

const MainHeader = () => {
  return (
    <Header>
      <Title>Belarussian Symbols</Title>
      <SymbolsMenu />
    </Header>
  );
};

export default MainHeader;

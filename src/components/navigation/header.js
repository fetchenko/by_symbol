import React from "react";
import { Header } from "../../styled/header";
import { Title } from "../typography";
import Menu from "../menu";

const MainHeader = () => {
  return (
    <Header>
      <Title>Belarussian Symbols</Title>
      <Menu />
    </Header>
  );
};

export default MainHeader;

import React from "react";
import { Header } from "../../styled/header";
import { Title } from "../typography";
import { FormattedMessage } from "react-intl";
import SymbolsMenu from "../menu/symbolsMenu";
import { SymbolMenuOptions } from "../../constants";

const MainHeader = () => {
  return (
    <Header>
      <Title>
        <FormattedMessage id="belorussian-symbols" />
      </Title>
      {/* <SymbolsMenu options={SymbolMenuOptions} /> */}
    </Header>
  );
};

export default MainHeader;

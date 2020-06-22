import React from "react";
import { Header } from "../../styled/header";
import { Title } from "../typography";
import { FormattedMessage } from "react-intl";

const MainHeader = () => {
  return (
    <Header>
      <Title>
        <FormattedMessage id="belorussian-symbols" />
      </Title>
    </Header>
  );
};

export default MainHeader;

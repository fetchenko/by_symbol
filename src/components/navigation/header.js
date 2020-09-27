import React from "react";
import { FormattedMessage } from "react-intl";
import { BaseLink } from "styled/links";
import { Header } from "styled/header";
import { AppTitle } from "components/typography";
import HeaderMenu from "components/menu/headerMenu";

const MainHeader = () => {
  return (
    <Header>
      <BaseLink to="/">
        <AppTitle>
          <FormattedMessage id="belorussian-symbols" />
        </AppTitle>
      </BaseLink>
      <HeaderMenu />
    </Header>
  );
};

export default MainHeader;

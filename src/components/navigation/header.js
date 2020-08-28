import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "styled/links";
import { Header } from "styled/header";
import { Title } from "components/typography";
import HeaderMenu from "components/menu/headerMenu";

const MainHeader = () => {
  return (
    <Header>
      <Link to="/">
        <Title>
          <FormattedMessage id="belorussian-symbols" />
        </Title>
      </Link>
      <HeaderMenu />
    </Header>
  );
};

export default MainHeader;

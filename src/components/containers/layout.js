import React from "react";
import Header from "components/navigation/header";
import Footer from "components/navigation/footer";
import ThemeControl from 'components/blocks/themeControl';
import {
  Container,
  HeaderRow,
  MenuRow,
  ContentRow,
  FooterRow,
} from 'styled/layout';

const Layout = props => {
  const { children } = props;

  return (
    <Container>
      <HeaderRow>
        <Header />
      </HeaderRow>
      <MenuRow>
      </MenuRow>
      <ContentRow>
        {children}
      </ContentRow>
      <FooterRow>
        <Footer />
      </FooterRow>
    </Container>
  );
};

export default Layout;

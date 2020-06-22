import React from "react";
import Header from "../navigation/header";
import Footer from "../navigation/footer";
import ThemeControl from '../../components/blocks/themeControl'

const Layout = props => {
  const { children, onChangedTheme } = props;

  return (
    <>
      <Header />
      <ThemeControl onChangedTheme={onChangedTheme} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import styled from 'styled-components'
import Header from "../navigation/header";
import Footer from "../navigation/footer";
import ThemeControl from '../../components/blocks/themeControl'

const Layout = props => {
  const { children, onChangedTheme } = props;

  return (
    <div>
      <Header />
      <ThemeControl onChangedTheme={onChangedTheme} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

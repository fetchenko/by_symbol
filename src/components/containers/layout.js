import React from "react";
import styled from 'styled-components'
import Header from "../navigation/header";
import Footer from "../navigation/footer";
import ThemeControl from '../../components/blocks/themeControl'
import MainMenu from '../menu/mainMenu';
import BlockMenu from 'components/menu/blockMenu'
import { SYMBOL_OPTIONS } from 'constants/index'

const Layout = props => {
  const { children, onChangedTheme } = props;

  return (
    <div>
      <Header />
      <ThemeControl onChangedTheme={onChangedTheme} />
      {/* <BlockMenu /> */}
      {/* <MainMenu /> */}
      {children}
    </div>
  );
};

export default Layout;

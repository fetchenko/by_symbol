import React from "react";
import styled from 'styled-components'
import Header from "../navigation/header";
import Footer from "../navigation/footer";
import ThemeControl from '../../components/blocks/themeControl'
import MainMenu from '../menu/mainMenu';

const PageContent = styled.div`
  display: flex;
`

const Layout = props => {
  const { children, onChangedTheme } = props;

  return (
    <div>
      <Header />
      <ThemeControl onChangedTheme={onChangedTheme} />
      <PageContent>
        <MainMenu />
        {children}
      </PageContent>
    </div>
  );
};

export default Layout;

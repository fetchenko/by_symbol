import React from "react";
import Header from "components/navigation/header";
import Footer from "components/navigation/footer";
import BlockMenu from 'components/menu/blockMenu';
import {
    Container,
    HeaderRow,
    MenuRow,
    ContentRow,
    FooterRow,
} from 'styled/layout';
import Symbols from './symbols';

function SymbolPage() {
    return (
        <Container>
            <HeaderRow>
                <Header />
            </HeaderRow>
            <MenuRow>
                <BlockMenu />
            </MenuRow>
            <ContentRow>
                <Symbols />
            </ContentRow>
            <FooterRow>
                <Footer />
            </FooterRow>
        </Container>
    );
};

export default SymbolPage;

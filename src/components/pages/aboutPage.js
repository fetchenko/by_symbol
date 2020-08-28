import React from "react";
import styled from "styled-components";
import Header from "components/navigation/header";
import { Container, HeaderRow } from "styled/layout";
import About from "./about";

const ContentRow = styled.div`
  padding: 10px 24px 0 24px;

  ${(props) => props.theme.mediaQueries.md} {
    padding: 40px 60px;
    display: flex;
    justify-content: center;
  }
`;

function SymbolPage() {
  return (
    <Container>
      <HeaderRow>
        <Header />
      </HeaderRow>
      <ContentRow>
        <About />
      </ContentRow>
    </Container>
  );
}

export default SymbolPage;

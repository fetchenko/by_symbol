import React from "react";
import styled from "styled-components";
import Header from "components/navigation/header";
import { Container, HeaderRow } from "styled/layout";
import Sources from "./sources";

const ContentRow = styled.div`
  padding: 10px 24px 0 24px;

  ${(props) => props.theme.mediaQueries.md} {
    padding: 40px 60px 20px 60px;
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
        <Sources />
      </ContentRow>
    </Container>
  );
}

export default SymbolPage;

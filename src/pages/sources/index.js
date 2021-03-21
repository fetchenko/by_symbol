import React from "react";
import styled from "styled-components";
import Sources from "./sources";

const ContentRow = styled.div`
  padding: 10px 24px 0 24px;

  ${(props) => props.theme.mediaQueries.md} {
    padding: 40px 60px 20px 60px;
    display: flex;
    justify-content: center;
  }
`;

function SourcesPage() {
  return (
    <ContentRow>
      <Sources />
    </ContentRow>
  );
}

export default SourcesPage;

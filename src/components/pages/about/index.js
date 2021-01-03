import React from "react";
import styled from "styled-components";
import About from "./about";

const ContentRow = styled.div`
  padding: 10px 24px 0 24px;

  ${(props) => props.theme.mediaQueries.md} {
    padding: 40px 60px;
    display: flex;
    justify-content: center;
  }
`;

function AboutPage() {
  return (
    <ContentRow>
      <About />
    </ContentRow>
  );
}

export default AboutPage;

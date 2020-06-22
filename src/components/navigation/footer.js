import React from "react";
import styled from "styled-components";
import LocationInfo from "../blocks/locationInfo";
import AuthorInfo from '../blocks/authorInfo';

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${props => props.theme.unit * 12}px;
  display: none;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${props => props.theme.unit * 4}px;
  box-sizing: border-box;
  background-color: ${props => props.theme.primary.light};

  ${props => props.theme.mediaQueries.sm} {
    display: flex;
  }
`;

const ContentBlock = styled.div`
  width: 30%;
`
function MainFooter() {
  return (
    <Footer>
      <ContentBlock />
      <ContentBlock>
        <LocationInfo />
      </ContentBlock>
      <ContentBlock>
        <AuthorInfo />
      </ContentBlock>
    </Footer>
  );
}

export default MainFooter;

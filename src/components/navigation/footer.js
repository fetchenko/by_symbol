import React from "react";
import styled from "styled-components";
import LocationInfo from "../blocks/locationInfo";
import AuthorInfo from '../blocks/authorInfo';

const Footer = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${props => props.theme.unit * 4}px;
  box-sizing: border-box;
  background-color: ${props => props.theme.primary.light};
`;

const ContentBlock = styled.div`
  width: 50%;

  &:first-child {
    display: none;
  }

  ${props => props.theme.mediaQueries.sm} {
    width: 30%;
    
    &:first-child {
      display: block;
    }
  }
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

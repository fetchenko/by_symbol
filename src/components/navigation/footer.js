import React from "react";
import styled from "styled-components";
import AuthorInfo from "../blocks/authorInfo";
import LocationInfo from "../blocks/locationInfo";
import { bricksImg } from "../../constants";

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${props => props.theme.unit * 14}px;
  background-color: ${props => props.theme.primary.light};
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
`;

export const Divider = styled.span`
  margin: 0 10px;
  color: ${props => props.theme.primary.main};
`;

export const Img = styled.div`
  background-image: url(${props => props.bgImg});
  width: 100%;
  height: 10px;
  opacity: 0.1;
`;

function MainFooter() {
  return (
    <Footer>
      <Img bgImg={bricksImg} />
      <FooterContent>
        <LocationInfo />
        <Divider>{"  |  "}</Divider>
        <AuthorInfo />
      </FooterContent>
      <Img bgImg={bricksImg} />
    </Footer>
  );
}

export default MainFooter;

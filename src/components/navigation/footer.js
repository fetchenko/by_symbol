import React from "react";
import styled from "styled-components";
import LocationInfo from "../blocks/locationInfo";

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${props => props.theme.unit * 11}px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.primary.light};

  ${props => props.theme.mediaQueries.sm} {
    display: flex;
  }
`;

function MainFooter() {
  return (
    <Footer>
      <LocationInfo />
    </Footer>
  );
}

export default MainFooter;

import React from "react";
import styled from "styled-components";

export const Carousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  margin: ${props => props.theme.unit * 2}px 0;

  ${props => props.theme.mediaQueries.sm} {
    margin: ${props => props.theme.unit * 10}px 0;
  }
`;

export const CarouselContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

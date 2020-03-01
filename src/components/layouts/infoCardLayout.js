import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: ${props => 12 * props.theme.unit}px auto auto;

  ${props => props.theme.mediaQueries.md} {
    /* border: solid blue; */
  }

  ${props => props.theme.mediaQueries.lg} {
    /* border: solid green; */

    width: 80%;
    grid-template-columns: 50% 50%;
    grid-template-rows: ${props => 16 * props.theme.unit}px auto auto;
  }
`;

const Title = styled.div`
  ${props => props.theme.mediaQueries.lg} {
    grid-column: 2;
    grid-row: 1;
  }
`;

const Description = styled.div`
  margin: 0 5%;

  ${props => props.theme.mediaQueries.lg} {
    grid-column: 2;
    grid-row: 3;
    width: 80%;
    margin: 0 auto;
  }
`;

const Image = styled.div`
  margin: 0 auto;
  ${props => props.theme.mediaQueries.lg} {
    grid-column: 1;
    grid-row: 3;
  }
`;

const InfoCardLayout = ({ title, description, image }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Image>{image}</Image>
    </Container>
  );
};

export default InfoCardLayout;

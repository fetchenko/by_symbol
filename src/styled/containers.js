import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.theme.mediaQueries.sm} {
    flex-direction: row;
  }
`;

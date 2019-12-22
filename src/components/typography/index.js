import React from "react";
import styled from "styled-components";

export const Title = styled.h4`
  color: ${props => props.theme.typograpty.primary.main};
  font-size: 1.5rem;
  margin: 0;
  padding: ${props => props.theme.unit * 3}px;
`;

import React from "react";
import styled from "styled-components";

export const Burger = styled.div`
  cursor: pointer;
  background: repeating-linear-gradient(
    0,
    ${props => props.theme.primary.main},
    ${props => props.theme.primary.main} 8px,
    ${props => props.theme.primary.light} 8px,
    ${props => props.theme.primary.light} 12px
  );
  height: 40px;
  width: 40px;
  margin: 10px;
`;

export const Cross = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin: 10px;
  background: linear-gradient(
      to bottom,
      transparent 45%,
      ${props => props.theme.primary.light} 45%,
      ${props => props.theme.primary.light} 55%,
      transparent 55%
    ),
    linear-gradient(
      to right,
      transparent 45%,
      ${props => props.theme.primary.light} 45%,
      ${props => props.theme.primary.light} 55%,
      transparent 55%
    );
  transform: rotate(45deg);
  background-color: ${props => props.theme.primary.main};
`;

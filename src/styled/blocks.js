import React from "react";
import styled from "styled-components";

export const Burger = styled.div`
  cursor: pointer;
  background: repeating-linear-gradient(
    0,
    #ff3333,
    #ff3333 8px,
    #ffcccc 8px,
    #ffcccc 12px
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
      #ffcccc 45%,
      #ffcccc 55%,
      transparent 55%
    ),
    linear-gradient(
      to right,
      transparent 45%,
      #ffcccc 45%,
      #ffcccc 55%,
      transparent 55%
    );
  transform: rotate(45deg);
  background-color: #ff3333;
`;

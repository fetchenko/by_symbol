import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  visibility: ${props => (props.hide ? "hidden" : "")};
  width: 100%;
  height: 100%;
`;

import React from "react";
import styled from "styled-components";

export const Img = styled.img`
  visibility: ${props => (props.hide ? "hidden" : "")};
  width: ${props => props.hide ? '0' : '100%'};
  height: ${props => props.hide ? '0' : '100%'};
`;

export const ImageButton = styled.input`
  visibility: ${props => (props.hide ? "hidden" : "")};
  width: 100%;
  height: 100%;

`
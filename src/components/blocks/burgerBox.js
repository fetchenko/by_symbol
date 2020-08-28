import React from "react";
import styled from "styled-components";

const Box = styled.span`
  height: ${(props) => (props.open ? "22px" : "17px")};
  position: relative;
  display: inline-block;
  width: ${(props) => (props.open ? "22px" : "40px")};
`;

const Inner = styled.span`
  width: 20px;
  height: 3px;
  background-color: #fff;
  position: absolute;
  border-radius: 4px;
  top: 50%;
  display: block;
  margin-top: -2px;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition-duration: 0.22s;
  transform: ${(props) => props.open && "rotate(225deg)"};
  transition-property: transform;

  &:before {
    top: ${(props) => (props.open ? "0px" : "-7px")};
    width: 20px;
    height: 3px;
    background-color: #fff;
    display: block;
    content: "";
    position: absolute;
    border-radius: 4px;
    transition-delay: ${(props) => (props.open ? "0s, 0.12s" : "0.25s, 0s")};
    transition-duration: 0.1s, 0.1s;
    transition-timing-function: ${(props) =>
      props.open
        ? "cubic-bezier(0.215, 0.61, 0.355, 1)"
        : "cubic-bezier(0.55, 0.055, 0.675, 0.19)"};
  }

  &:after {
    width: 20px;
    height: 3px;
    background-color: #fff;
    display: block;
    content: "";
    position: absolute;
    border-radius: 4px;
    transform: ${(props) => props.open && "rotate(-90deg)"};
    transition-delay: ${(props) => (props.open ? "0s, 0.12s" : "0.25s, 0s")};
    bottom: ${(props) => (props.open ? "0px" : "-7px")};
    transition-duration: 0.1s, 0.22s;
    transition-property: bottom, transform;
    transition-timing-function: ${(props) =>
      props.open
        ? "ease-out, cubic-bezier(0.215, 0.61, 0.355, 1)"
        : "ease-in, cubic-bezier(0.55, 0.055, 0.675, 0.19)"};
  }
`;

export default function BurgerBox({ open }) {
  return (
    <Box open={open}>
      <Inner open={open} />
    </Box>
  );
}

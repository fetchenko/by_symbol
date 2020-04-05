import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: 30px;
  height: 30px;
`;

const SvgIcon = React.forwardRef(function(props, ref) {
  const { children, ...other } = props;

  return (
    <Svg viewBox="0 0 24 24" ref={ref} {...other}>
      {children}
    </Svg>
  );
});

export default SvgIcon;

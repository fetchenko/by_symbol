import React from "react";
import SvgIcon from "./svgIcon";

export default function createSvgIcon(path) {
  return React.memo(
    React.forwardRef((props, ref) => (
      <SvgIcon ref={ref} {...props}>
        {path}
      </SvgIcon>
    ))
  );
}

import React from "react";
import styled from "styled-components";

const Root = styled.div`
  position: ${(props) => (props.fixed ? "fixed" : "absolute")};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Anchor = styled.div`
  position: relative;
`;

export default function ClickableOpacity({ children, onClick, fixed = true }) {
  return (
    <Root onClick={onClick} fixed={fixed}>
      <Anchor>{children}</Anchor>
    </Root>
  );
}

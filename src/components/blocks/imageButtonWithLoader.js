import React, { useState } from "react";
import styled from "styled-components";
import { Img, ImageButton } from "../../styled/image";

const Container = styled.div`
  position: relative;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
  border: 3px ${({ active, selected, theme }) =>
    (active || selected) ? theme.primary.main : theme.primary.light};
  border-style: ${props => props.selected ? 'dashed' : 'solid'};
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 3px;
  left: 0;
  visibility: ${props => (props.hide ? "hidden" : "")};
`;

function ImageButtonWithLoader(props) {
  const {
    src,
    alt,
    active,
    selected,
    loaderComponent: LoaderComponent,
    onClick
  } = props;
  const [loaded, setLoadedStatus] = useState(false);

  return (
    <Container
      active={active}
      selected={selected}
      width="90px"
      height="60px"
    >
      <Img
        hide
        src={src}
        alt={alt}
        onLoad={() => setLoadedStatus(true)}
      />
      <ImageButton
        type="image"
        src={src}
        alt={alt}
        hide={!loaded}
        onClick={() => onClick && onClick()}
      />
      <LoaderContainer hide={loaded}>
        {LoaderComponent ? <LoaderComponent /> : <div>loading...</div>}
      </LoaderContainer>
    </Container>
  );
};

export default ImageButtonWithLoader;

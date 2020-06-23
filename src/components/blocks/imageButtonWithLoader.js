import React, { useState } from "react";
import styled from "styled-components";
import { Img, ImageButton } from "../../styled/image";

const Container = styled.div`
  position: relative;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 3px;
  left: 0;
  visibility: ${props => (props.hide ? "hidden" : "")};
`;

const ImageButtonWithLoader = props => {
  const { src, alt, loaderComponent: LoaderComponent, onClick } = props;
  const [loaded, setLoadedStatus] = useState(false);

  return (
    <Container width="90px" height="60px">
      <Img
        // hide={!loaded}
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

import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "../../styled/image";

const Container = styled.div`
  position: relative;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "100%"};
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  visibility: ${props => (props.hide ? "hidden" : "")};
`;

const ImageWithLoader = props => {
  const { src, alt, loaderComponent: LoaderComponent } = props;
  const [loaded, setLoadedStatus] = useState(false);

  return (
    <Container width="90px" height="60px">
      <Img
        hide={!loaded}
        src={src}
        alt={alt}
        onLoad={() => setLoadedStatus(true)}
      />
      <LoaderContainer hide={loaded}>
        {LoaderComponent ? <LoaderComponent /> : <div>loading...</div>}
      </LoaderContainer>
    </Container>
  );
};

export default ImageWithLoader;

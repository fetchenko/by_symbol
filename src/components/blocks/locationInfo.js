import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Address as AddressInfo } from "../../constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Name = styled.h5`
  margin: 0;
  font-size: 1.3rem;
  letter-spacing: 1;
  color: #fff;
  opacity: 0.6;
`;

const Address = styled.div`
  display: flex;
  align-items: center;
`;

function LocationInfo() {
  return (
    <Container>
      <Address>
        <Name>
          <FormattedMessage id={AddressInfo.country} /> {`${AddressInfo.year}`}
        </Name>
      </Address>
    </Container>
  );
}

export default LocationInfo;

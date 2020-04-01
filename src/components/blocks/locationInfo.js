import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Address as AddressInfo, locationIcon } from "../../constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Name = styled.h5`
  margin: 0;
  font-size: 1.1rem;
  letter-spacing: 1;
  color: ${props => props.theme.primary.main};
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  padding: 5px;
`;

const Address = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.span`
  margin: 0 10px;
  color: ${props => props.theme.primary.main};
`;

function LocationInfo() {
  return (
    <Container>
      <Address>
        <Name>
          <FormattedMessage id={AddressInfo.country} /> {` ${AddressInfo.year}`}
        </Name>
        <Icon src={locationIcon} />
      </Address>
    </Container>
  );
}

export default LocationInfo;

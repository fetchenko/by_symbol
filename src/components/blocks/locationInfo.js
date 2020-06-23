import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
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
  font-family: ${props => props.theme.fonts.asap};
  font-weight: 100;
  color: ${props => props.theme.text.onPrimaryLight};
`;

const Address = styled.div`
  display: flex;
  align-items: center;
`;

function LocationInfo() {
  const intl = useIntl();
  const city = intl.formatMessage({ id: AddressInfo.city })

  return (
    <Container>
      <Address>
        <Name>
          {`${city} ${AddressInfo.year}`}
        </Name>
      </Address>
    </Container>
  );
}

export default LocationInfo;

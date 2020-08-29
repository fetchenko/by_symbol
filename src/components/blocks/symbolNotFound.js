import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Row } from "styled/flex";

const Container = styled(Row)`
  height: 280px;
  width: 100%;
  display: flex;
  justify-content;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.primary.main};
`;

function SymbolNotFound() {
  return (
    <Container height="280px">
      <Title>
        <FormattedMessage id="symbol-not-found" />
      </Title>
    </Container>
  );
}

export default SymbolNotFound;

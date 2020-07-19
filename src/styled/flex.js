import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  align-items: ${props => props.align || 'center'};
  justify-content: center;
`
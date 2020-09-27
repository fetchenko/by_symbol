import styled from "styled-components";

const headerHeightXS = 60;
const headerHeightLG = 70;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const HeaderRow = styled.div`
  position: sticky;
  height: ${headerHeightXS}px;
  top: 0;
  z-index: 9;

  ${(props) => props.theme.mediaQueries.md} {
    height: ${headerHeightLG}px;
  }
`;

export const ContentRow = styled.div`
  position: relative;
  display: flex;
  margin-top: ${(props) => props.mt || "50px"};
  padding-bottom: 20px;

  ${(props) => props.theme.mediaQueries.md} {
    margin-top: 0;
    padding-bottom: 0;
  }
`;

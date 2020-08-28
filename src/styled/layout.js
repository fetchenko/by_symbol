import styled from "styled-components";

const headerHeightXS = 60;
const headerHeightLG = 70;

export const Container = styled.div`
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

export const MobileView = styled.div`
  ${(props) => props.theme.mediaQueries.md} {
    display: none;
  }
`;

export const DesktopView = styled.div`
  display: none;

  ${(props) => props.theme.mediaQueries.md} {
    display: block;
  }
`;

export const ContentRow = styled.div`
  display: flex;
  margin-top: 56px;
  padding-bottom: 20px;

  ${(props) => props.theme.mediaQueries.md} {
    margin-top: 0;
    padding-bottom: 0;
  }
`;

export const FooterRow = styled.div``;

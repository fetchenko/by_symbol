import styled from 'styled-components';

const headerHeightXS = 60;
const headerHeightLG = 80;
const footerHeight = 48;
const menuHeight = 84;
const verticalPadding = 32;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 60px 84px calc(100vh - ${headerHeightXS + footerHeight + menuHeight}px) 48px;
  grid-template-columns: 100%;

  ${props => props.theme.mediaQueries.md} {
    grid-template-rows: 80px 84px calc(100vh - ${headerHeightLG + footerHeight + menuHeight}px) 48px;
  }
`

export const HeaderRow = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 1
`

export const MenuRow = styled.div`
	grid-row: 2 / 3;
	grid-column: 1 / 1;
`

export const ContentRow = styled.div`
	grid-row: 3 / 3;
	grid-column: 1 / 1;
`

export const FooterRow = styled.div`
	grid-row: 4 / 4;
	grid-column: 1 / 1;
`
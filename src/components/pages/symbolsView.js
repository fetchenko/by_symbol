import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getSymbolData } from '../../assets/symbols'
import { GridContainer, GridBlock } from '../../styled/grid'
import BlockMenu from 'components/menu/blockMenu'
import { DEFAULT_SYMBOL } from 'constants/index'

export const SymbolGrid = ({ symbol }) => {
    return (
        <GridContainer
            rows={symbol.sizes.xs}
            columns={symbol.sizes.xs}
            rowsSm={symbol.sizes.sm}
            columnsSm={symbol.sizes.sm}
            rowsMd={symbol.sizes.md}
            columnsMd={symbol.sizes.md}
        >
            {symbol.areas.map(area => {
                return <GridBlock key={area} gridArea={area} />;
            })}
        </GridContainer>
    )
}

const Root = styled.div`
    width: 100%;
`

const SymbolsWrapper = styled.div`
    display: flex;
`

export default function SymbolsView() {
    const { symbolId = DEFAULT_SYMBOL } = useParams();

    const symbolData = getSymbolData(symbolId);

    console.log({ symbolData })

    return (
        <Root>
            <BlockMenu />
            {symbolId}
            {symbolData && <h3>{symbolData.title}</h3>}
            <SymbolsWrapper>
                {symbolData && symbolData.symbols && symbolData.symbols.map((symbol) => {
                    return (
                        <SymbolGrid symbol={symbol} />
                    )
                })}
            </SymbolsWrapper>
        </Root>
    )
}

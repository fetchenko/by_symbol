import React from 'react'
import { useParams } from 'react-router-dom'
import { getSymbolData } from '../../assets/symbols'
import { GridContainer, GridBlock } from '../../styled/grid'

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

export default function SymbolsView() {
    const { symbolId } = useParams();

    const symbolData = getSymbolData(symbolId);

    return (
        <div>
            {symbolId}
            {symbolData && symbolData.map((symbol) => {
                return (
                    <SymbolGrid symbol={symbol} />
                )
            })}
        </div>
    )
}

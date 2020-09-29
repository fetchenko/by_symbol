import React from "react";
import styled from "styled-components";
import { getSymbolData } from "assets/symbols";
import { Column } from "styled/flex";
import SymbolSummary from "components/blocks/symbolSummary";
import SymbolsContent from "components/blocks/symbolsContent";
import SymbolNotFound from "components/blocks/symbolNotFound";
import ThemeControl from "components/blocks/themeControl";

const Root = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  ${(props) => props.theme.mediaQueries.md} {
    min-height: calc(100vh - 70px);
  }
`;

const ThemeAnchor = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
`;

function Symbols(props) {
  const { symbolId } = props;

  const symbolData = getSymbolData(symbolId);

  return (
    <Root>
      <ThemeAnchor>
        <ThemeControl />
      </ThemeAnchor>
      {symbolData ? (
        <Column>
          <SymbolSummary
            title={symbolData.title}
            description={symbolData.description}
          />
          <SymbolsContent symbolId={symbolId} symbols={symbolData.symbols} />
        </Column>
      ) : (
        <SymbolNotFound />
      )}
    </Root>
  );
}

export default Symbols;

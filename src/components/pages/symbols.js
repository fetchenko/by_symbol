import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Swipeable } from "react-swipeable";
import { getSymbolData } from "assets/symbols";
import { Carousel, CarouselContent } from "styled/carousel";
import { Column } from "styled/flex";
import SymbolSummary from "components/blocks/symbolSummary";
import SymbolsContent from "components/blocks/symbolsContent";
import SymbolNotFound from "components/blocks/symbolNotFound";
import ThemeControl from "components/blocks/themeControl";
import { THEME_COLORS, Red } from "constants/themes";
import { createTheme } from "theme";

const Root = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  ${(props) => props.theme.mediaQueries.md} {
    min-height: calc(100vh - 70px);
  }
`;

const ThemeControlContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const ThemeControlAnchor = styled.div`
  position: relative;
  text-align: end;
  width: 100%;
  height: 100%;
`;

function Symbols(props) {
  const { symbolId, onNext, onPrev, theme, themeColor, onChangeTheme } = props;

  const symbolData = getSymbolData(symbolId);

  if (!symbolData) {
    return <SymbolNotFound />;
  }

  return (
    <Root>
      <ThemeControlContainer>
        <ThemeControlAnchor>
          <ThemeControl color={themeColor} onChangeTheme={onChangeTheme} />
        </ThemeControlAnchor>
      </ThemeControlContainer>
      <Swipeable onSwipedLeft={onNext} onSwipedRight={onPrev}>
        <Carousel>
          <CarouselContent>
            <Column>
              <SymbolSummary
                title={symbolData.title}
                description={symbolData.description}
              />
              <SymbolsContent
                symbolId={symbolId}
                symbols={symbolData.symbols}
              />
            </Column>
          </CarouselContent>
        </Carousel>
      </Swipeable>
    </Root>
  );
}

export default Symbols;

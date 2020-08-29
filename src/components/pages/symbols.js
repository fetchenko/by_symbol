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

function Symbols({ symbolId, onNext, onPrev }) {
  const [themeColor, setThemeColor] = useState(Red.primary.main);
  const theme = createTheme(THEME_COLORS.get(themeColor));

  const symbolData = getSymbolData(symbolId);

  if (!symbolData) {
    return <SymbolNotFound />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Root>
        <ThemeControl color={themeColor} onChangedTheme={setThemeColor} />
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
    </ThemeProvider>
  );
}

export default Symbols;

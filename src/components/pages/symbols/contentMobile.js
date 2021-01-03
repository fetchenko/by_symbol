import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Swipeable } from "react-swipeable";
import { getSymbolData } from "assets/symbols";
import SymbolNotFound from "components/blocks/symbol/symbolNotFound";
import { Column } from "styled/flex";
import SymbolSummary from "components/blocks/symbol/symbolSummary";
import SymbolsContent from "components/blocks/symbol/symbolsContent";
import { createHashLink } from "helpers/link";
import SymbolsSubMenu from "./symbolsSubMenu";

const Root = styled.div`
  width: 100%;
  min-height: calc(
    100vh - var(--header-height-sm) - var(--symbol-menu-height-sm) - 20px -
      ${(props) => props.decreaseContent}
  );
  height: auto;

  & > div {
    height: 100%;
  }
`;

function SymbolPage(props) {
  const {
    symbolId,
    symbolsMenuConfig,
    subOptionsConfig,
    showBackButton,
  } = props;
  const history = useHistory();

  const symbolData = getSymbolData(symbolId);

  const decreaseContent = showBackButton ? "30px" : "0px";

  if (
    symbolsMenuConfig[symbolId] &&
    symbolsMenuConfig[symbolId].subOptions.length
  ) {
    return (
      <Root decreaseContent={decreaseContent}>
        <Swipeable onSwipedLeft={handleNext} onSwipedRight={handlePrev}>
          <SymbolsSubMenu options={symbolsMenuConfig[symbolId].subOptions} />
        </Swipeable>
      </Root>
    );
  }

  if (!symbolData) {
    return <SymbolNotFound />;
  }

  function handleNext() {
    const nextValue =
      (symbolsMenuConfig[symbolId] && symbolsMenuConfig[symbolId].nextEl) ||
      (subOptionsConfig[symbolId] && subOptionsConfig[symbolId].nextEl);

    if (nextValue) {
      history.push(createHashLink(nextValue));
    }
  }

  function handlePrev() {
    const prevValue =
      (symbolsMenuConfig[symbolId] && symbolsMenuConfig[symbolId].prevEl) ||
      (subOptionsConfig[symbolId] && subOptionsConfig[symbolId].prevEl);

    if (prevValue) {
      history.push(createHashLink(prevValue));
    }
  }

  return (
    <Root decreaseContent={decreaseContent}>
      <Swipeable onSwipedLeft={handleNext} onSwipedRight={handlePrev}>
        <Column>
          <SymbolSummary
            title={symbolData.title}
            description={symbolData.description}
          />
          <SymbolsContent symbolId={symbolId} symbols={symbolData.symbols} />
        </Column>
      </Swipeable>
    </Root>
  );
}

export default SymbolPage;

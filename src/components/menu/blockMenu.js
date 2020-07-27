import React, { useEffect } from "react";
import { injectIntl } from "react-intl";
import { withRouter, useLocation, useHistory } from 'react-router-dom';
import {
  BlockMenu,
  BlockMenuContent,
  PrevButton,
  NextButton
} from "styled/menu";
import {
  SYMBOL_OPTIONS,
  NEXT_CODES,
  PREV_CODES,
  blockMenuOptions,
} from 'constants/index'
import { getSymbolIdFromRoute } from 'helpers/navigation';
import { createHashLink } from 'helpers/link';
import BlockMenuItem from './blockMenuItem';

function BlocksMenu() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [])

  function handleKeyDown(event) {
    if (PREV_CODES.includes(event.keyCode)) {
      handlePrev();
    } else if (NEXT_CODES.includes(event.keyCode)) {
      handleNext();
    }
  }

  function handleNext() {
    const symbolId = getSymbolIdFromRoute(location);
    const nextValue = blockMenuOptions[symbolId].nextEl;

    if (nextValue) {
      history.push(createHashLink(nextValue));
    }
  }

  function handlePrev() {
    const symbolId = getSymbolIdFromRoute(location);
    const prevValue = blockMenuOptions[symbolId].prevEl;

    if (prevValue) {
      history.push(createHashLink(prevValue));
    }
  }

  return (
    <BlockMenu>
      <PrevButton onClick={handlePrev}>&#8249;</PrevButton>
      <BlockMenuContent>
        {SYMBOL_OPTIONS.map((item) => (
          <BlockMenuItem key={item.path} item={item} />
        ))}
      </BlockMenuContent>
      <NextButton onClick={handleNext}>&#8250;</NextButton>
    </BlockMenu>
  );
}

export default withRouter(injectIntl(BlocksMenu));

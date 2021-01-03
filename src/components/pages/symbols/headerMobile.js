import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { createHashLink } from "helpers/link";
import SymbolsMenuMobile from "components/menu/symbolsMenu/symbolsMenuMobile";
import ThemeControl from "components/blocks/themeControl";
import BackButton from "components/buttons/backButton";

const Container = styled.div`
  z-index: 1;
  position: sticky;
  top: 60px;
`;

const ThemeAnchor = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 1;
`;

const BackButtonAnchor = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.background.default}80;
`;

function SymbolsHeaderMobile(props) {
  const {
    symbolId,
    symbolsMenuOptions,
    symbolsMenuConfig,
    subOptionsConfig,
  } = props;
  const history = useHistory();

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

  const menuOptions = subOptionsConfig[symbolId]
    ? symbolsMenuConfig[subOptionsConfig[symbolId].parentEl.id].subOptions
    : symbolsMenuOptions;

  const showBackButton = subOptionsConfig[symbolId];

  return (
    <Container>
      <SymbolsMenuMobile
        value={symbolId}
        options={menuOptions}
        onNext={handleNext}
        onPrev={handlePrev}
        symbolsMenuConfig={symbolsMenuConfig}
        subOptionsConfig={subOptionsConfig}
      />
      {showBackButton && (
        <BackButtonAnchor>
          <BackButton
            link={createHashLink(subOptionsConfig[symbolId].parentEl.id)}
            label={subOptionsConfig[symbolId].parentEl.title}
          />
        </BackButtonAnchor>
      )}
      <ThemeAnchor>
        <ThemeControl />
      </ThemeAnchor>
    </Container>
  );
}

export default SymbolsHeaderMobile;

import React, { useState } from "react";
import styled from "styled-components";
import { GithubPicker } from "react-color";
import { MAIN_COLORS } from "constants/themes";
import PaletteIcon from "assets/icons/palette";
import ClickableOpacity from "components/blocks/clickableOpacity";

const Container = styled.div`
`;

const Button = styled.button`
  position: fixed;
  border: none;
  cursor: pointer;
  top: 124px;
  right: 8px;
  padding: 5px;
  border-radius: 50%;
  border: solid 2px
    ${(props) => (props.active ? props.theme.primary.light : "transparent")};
  background-color: transparent;

  ${(props) => props.theme.mediaQueries.sm} {
    top: 98px;
    right: 18px;
  }

  path {
    fill: ${(props) => props.theme.primary.light};
  }
`;

const Picker = styled.div`
  position: fixed;
  top: 170px;
  right: 12px;

  ${(props) => props.theme.mediaQueries.sm} {
    top: 145px;
    right: 22px;
  }
`;

function ThemeControl({ color, onChangedTheme }) {
  const [openPicker, setOpenPicker] = useState(false);

  const handleChangeColor = (color, event) => {
    event.stopPropagation();

    onChangedTheme(color.hex);
  };

  return (
    <Container>
      <Button
        active={openPicker}
        onClick={() => setOpenPicker(!openPicker)}
        aria-label="change theme"
      >
        <PaletteIcon />
      </Button>
      {openPicker && (
        <ClickableOpacity fixed={false} onClick={() => setOpenPicker(false)}>
          <Picker>
            <GithubPicker
              color={color}
              colors={MAIN_COLORS}
              onChange={handleChangeColor}
              triangle="top-right"
              width="125px"
            />
          </Picker>
        </ClickableOpacity>
      )}
    </Container>
  );
}

export default ThemeControl;

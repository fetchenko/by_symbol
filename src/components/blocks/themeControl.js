import React, { useState } from "react";
import styled from "styled-components";
import { GithubPicker } from "react-color";
import { MAIN_COLORS } from "constants/themes";
import PaletteIcon from "assets/icons/palette";
import ClickableOpacity from "components/blocks/clickableOpacity";

const Container = styled.div`
  display: inline-block;
  z-index: 99;
  padding: 10px;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  ${(props) => (props.active ? props.theme.primary.light : "transparent")};
  background-color: transparent;

  path {
    fill: ${(props) => props.theme.primary.light};
  }
`;

const Picker = styled.div`
  position: absolute;
  top: 44px;
  right: 10px;
`;

function ThemeControl({ color, onChangeTheme }) {
  const [openPicker, setOpenPicker] = useState(false);

  const handleChangeColor = (color, event) => {
    event.stopPropagation();

    onChangeTheme(color.hex);
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

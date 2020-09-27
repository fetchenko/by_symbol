import React from "react";
import styled from "styled-components";
import { GithubPicker } from "react-color";
import { MAIN_COLORS } from "constants/themes";
import { ReactComponent as PaletteIcon } from "icons/palette.svg";
import { useTheme } from "theme/themeContext";

const Container = styled.div`
  position: relative;
  display: inline-block;
  z-index: 9;
  padding: 10px;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 5px;
  border: none;
  background-color: ${props => props.theme.background.default};
  outline: 0;
  -webkit-tap-highlight-color: transparent;

  svg {
    fill: ${(props) => props.theme.primary.light};
    width: 32px;
    height: 32px;
  }
`;

const Picker = styled.div`
  position: absolute;
  top: 52px;
  right: 12px;
`;

function ThemeControl() {
  const {
    theme,
    onChangeTheme,
    themePickerOpen,
    setThemePickerOpen,
  } = useTheme();

  const handleChangeColor = (color, event) => {
    event.stopPropagation();

    onChangeTheme(color.hex);
  };

  return (
    <Container>
      <Button
        active={themePickerOpen}
        onClick={(event) => {
          event.preventDefault();
          setThemePickerOpen(!themePickerOpen);
        }}
        aria-label="change theme"
      >
        <PaletteIcon />
      </Button>
      {themePickerOpen && (
        <Picker>
          <GithubPicker
            color={theme.primary}
            colors={MAIN_COLORS}
            onChange={handleChangeColor}
            triangle="top-right"
            width="125px"
          />
        </Picker>
      )}
    </Container>
  );
}

export default ThemeControl;

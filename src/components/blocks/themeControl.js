import React, { useState } from "react";
import styled from "styled-components";
import { GithubPicker } from "react-color";
import { MAIN_COLORS } from "../../constants/themes";
import PaletteIcon from "../../assets/icons/palette";

const Container = styled.div`
  position: relative;
  z-index: 9;
`;

const Button = styled.button`
  position: absolute;
  border: none;
  cursor: pointer;
  top: 10px;
  right: 16px;
  padding: 5px;
  border-radius: 50%;
  border: solid 2px
    ${props => (props.active ? props.theme.primary.light : "transparent")};
  background-color: transparent;

  ${props => props.theme.mediaQueries.sm} {
    top: 180px;
    right: 20px;
  }

  path {
    fill: ${props => props.theme.primary.light};
  }
`;

const Picker = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;

  ${props => props.theme.mediaQueries.sm} {
    top: 235px;
    right: 22px;
  }
`;

function ThemeConthrol({ color, onChangedTheme }) {
  const [openPicker, setOpenPicker] = useState(false);

  const handleChangeColor = color => {
    onChangedTheme(color.hex);
  };

  return (
    <Container>
      <Button active={openPicker} onClick={() => setOpenPicker(!openPicker)}>
        <PaletteIcon />
      </Button>
      {openPicker && (
        <Picker>
          <GithubPicker
            color={color}
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

export default ThemeConthrol;

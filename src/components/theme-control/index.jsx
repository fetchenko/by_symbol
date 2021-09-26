import React from "react";
import classnames from "classnames";
import { GithubPicker } from "react-color";
import { createUseStyles } from "react-jss";

import { MAIN_COLORS } from "~/theme/themes-colors";
import Icon from "~/components/icon";
import Button from "~/components/button-link";
import { ReactComponent as PaletteIcon } from "~/icons/palette.svg";
import { useTheme } from "~/theme/themeContext";

const useStyles = createUseStyles((theme) => ({
  container: {
    position: "relative",
    display: "inline-block",
    zIndex: 9,
    padding: "0.625rem",
  },
  picker: {
    position: "absolute",
    top: "4rem",
    right: "0.75rem",
  },
  iconButton: {
    padding: "0.5rem",
  },
  iconButtonActive: {
    "& > svg": {
      fill: "var(--background-default)",
    },
  },
}));

function ThemeControl() {
  const { theme, onChangeTheme, themePickerOpen, setThemePickerOpen } =
    useTheme();

  const classes = useStyles();

  const handleChangeColor = (color, event) => {
    event.stopPropagation();

    onChangeTheme(color.hex);
  };

  return (
    <div className={classes.container}>
      <Button
        className={classnames(classes.iconButton, {
          [classes.iconButtonActive]: themePickerOpen,
        })}
        active={themePickerOpen}
        onClick={(event) => {
          event.preventDefault();
          setThemePickerOpen(!themePickerOpen);
        }}
      >
        <Icon icon={PaletteIcon} active={themePickerOpen} />
      </Button>
      {themePickerOpen && (
        <div className={classes.picker}>
          <GithubPicker
            color={theme.primary}
            colors={MAIN_COLORS}
            onChange={handleChangeColor}
            triangle="top-right"
            width="125px"
          />
        </div>
      )}
    </div>
  );
}

export default ThemeControl;

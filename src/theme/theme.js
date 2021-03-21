import { createGlobalStyle } from "styled-components";
import { Metal, bgColor } from "constants/themes";

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100%;
  }

  body {
    background-color: ${bgColor};
  }

  button {
    outline: none;
  }

  :root {
    --header-height-sm: 60px;
    --symbol-menu-height-sm: 56px;
  }
`;

export const mediaBreakpoints = [
  { name: "sm", size: 600 },
  { name: "md", size: 960 },
  { name: "lg", size: 1280 },
  { name: "xl", size: 1920 },
];

export const breakpoints = mediaBreakpoints.reduce((acc, item) => {
  return {
    ...acc,
    [item.name]: item.size,
  };
}, {});

const createMediaQuery = (n) => `@media screen and (min-width:${n}px)`;

export const mediaQueries = mediaBreakpoints.reduce((acc, item) => {
  return { ...acc, [item.name]: createMediaQuery(item.size) };
}, {});

const theme = {
  unit: 4,
  primary: Metal.primary,
  text: Metal.text,
  background: {
    paper: "#fff",
    default: bgColor,
  },
  mediaQueries,
  fonts: {
    asap: "'Asap', sans-serif",
    merriweather: "'Merriweather', serif",
  },
};

export const createTheme = (palette) => {
  return {
    ...theme,
    smbl: palette,
  };
};

export default theme;

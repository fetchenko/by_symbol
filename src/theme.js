import { createGlobalStyle } from "styled-components";
import { Red, bgColor } from 'constants/themes';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${bgColor};
  }

  button {
    outline: none;
  }
`;

export const mediaBreakpoints = [
  { name: "sm", size: 600 },
  { name: "md", size: 960 },
  { name: "lg", size: 1280 },
  { name: "xl", size: 1920 }
];

const createMediaQuery = n => `@media screen and (min-width:${n}px)`;

export const mediaQueries = mediaBreakpoints.reduce((acc, item) => {
  return { ...acc, [item.name]: createMediaQuery(item.size) };
}, {});

const theme = {
  unit: 4,
  primary: Red.primary,
  text: Red.text,
  mediaQueries,
  fonts: {
    asap: "'Asap', sans-serif",
    dancing: "'Dancing Script', cursive",
    merriweather: "'Merriweather', serif",
  }
};

export const createTheme = (palette) => {
  return {
    ...theme,
    ...palette,
  }
}

export default theme;

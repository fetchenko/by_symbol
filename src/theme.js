import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const mediaBreakpoints = [
  { name: "sm", size: 36 },
  { name: "md", size: 48 },
  { name: "lg", size: 62 },
  { name: "xl", size: 75 }
];

const createMediaQuery = n => `@media screen and (min-width:${n}em)`;

export const mediaQueries = mediaBreakpoints.reduce((acc, item) => {
  return { ...acc, [item.name]: createMediaQuery(item.size) };
}, {});

const theme = {
  unit: 4,
  primary: {
    light: "#ffcccc",
    main: "#ff6666"
  },
  typograpty: {
    primary: {
      main: "#fff"
    }
  },
  mediaQueries,
  fonts: {
    asap: "'Asap', sans-serif",
    dancing: "'Dancing Script', cursive",
    merriweather: "'Merriweather', serif",
  }
};

export const createTheme = (primary) => {
  return {
    ...theme,
    primary,
  }
}

export default theme;

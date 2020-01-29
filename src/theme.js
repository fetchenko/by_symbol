import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.fontFamily};
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

console.log({ mediaQueries });

const theme = {
  unit: 4,
  primary: {
    light: "#ffcccc",
    main: "#ff4d4d"
  },
  typograpty: {
    primary: {
      main: "#fff"
    }
  },
  fonts: {
    teko: "Teko"
  },
  mediaQueries
};

export default theme;

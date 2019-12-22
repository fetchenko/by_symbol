import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.fontFamily};
  }
`;

const theme = {
  unit: 4,
  primary: {
    main: "#ff4d4d"
  },
  typograpty: {
    primary: {
      main: "#fff"
    }
  }
};

export default theme;

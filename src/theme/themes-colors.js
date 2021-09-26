export const bgColor = "#E9EBEC";

export const Red = {
  primary: {
    main: "#d32f2f",
    light: "#ffcdd2",
  },
  text: {
    onPrimaryMain: "",
    onPrimaryLight: "#b40404",
    onWhite: "#e41a1a",
  },
};

export const Green = {
  primary: {
    main: "#009688",
    light: "#c8e6c9",
  },
  text: {
    onPrimary: "",
    onPrimaryLight: "#00695c",
    onWhite: "#004d40",
  },
};

export const Blue = {
  primary: {
    main: "#0288d1",
    light: "#90caf9",
  },
  text: {
    onPrimary: "",
    onPrimaryLight: "#0d47a1",
    onWhite: "#0d47a1",
  },
};

export const Black = {
  primary: {
    main: "#616161",
    light: "#bdbdbd",
  },
  text: {
    onPrimary: "",
    onPrimaryLight: "#212121",
    onWhite: "#212121",
  },
};

export const Pink = {
  primary: {
    main: "#8e24aa",
    light: "#e1bee7",
  },
  text: {
    onPrimary: "",
    onPrimaryLight: "#700433",
    onWhite: "#880e4f",
  },
};

export const Orange = {
  primary: {
    main: "#ef6c00",
    light: "#ffcc80",
  },
  text: {
    onPrimary: "",
    onPrimaryLight: "#5f2c01",
    onWhite: "#ef6c00",
  },
};

export const Lime = {
  primary: {
    main: "#9E9D24",
    light: "#afb42b",
  },
  text: {
    onPrimary: "#33691e",
    onPrimaryLight: "#05351b",
    onWhite: "",
  },
};

export const OldNotebook = {
  primary: {
    main: "#27a78f",
    light: "#96d5b4",
  },
  text: {
    onPrimary: "#013300",
    onPrimaryLight: "#013300",
    onWhite: "#013300",
  },
};

export const Metal = {
  primary: {
    main: "#555E62",
    light: "#B3BABD",
  },
  text: {
    onPrimary: "#546363",
    onPrimaryLight: "#384242",
    onWhite: "#546363",
  },
};
export const Wood = {
  primary: {
    main: "#5D4037",
    light: "#8D6E63",
  },
  secondary: {},
  text: {
    onPrimary: "#546363",
    onPrimaryLight: "#384242",
    onWhite: "#546363",
  },
};

export const TextConfig = {
  text: {
    color: {
      main: "",
      light: "",
      dark: "",
      onPrimary: "",
      onSecondary: "",
    },
  },
};

export const FontConfig = {
  font: { primary: "", secondary: "" },
};

export const MAIN_COLORS = [
  Red.primary.main,
  Green.primary.main,
  Blue.primary.main,
  Pink.primary.main,
  // Orange.primary.main,
  Black.primary.main,
];

export const THEME_COLORS = new Map([
  [Red.primary.main, Red],
  [Green.primary.main, Green],
  [Blue.primary.main, Blue],
  // [Orange.primary.main, Orange],
  [Pink.primary.main, Pink],
  [Black.primary.main, Black],
  [Lime.primary.main, Lime],
]);

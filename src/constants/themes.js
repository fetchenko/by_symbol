export const bgColor = "#F9FBE7"; // '#FFF8E1' // '#E0F7FA' //'#f8f9f4';

export const Red = {
  primary: {
    main: "#FF5252", // "#f44336",
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
    main: "#66bb6a",
    light: "#4db6ac",
  },
  text: {
    onPrimary: "",
    onPrimaryLight: "#011310",
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
    main: "#f06292",
    light: "#ffb3ff",
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

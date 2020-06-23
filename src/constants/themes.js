export const Red = {
  primary: {
    main: "#f44336",
    light: "#ffcdd2",
  },
  text: {
    onPrimaryMain: '',
    onPrimaryLight: '#b40404',
    onWhite: '#e41a1a',
  }
};

export const Green = {
  primary: {
    main: "#004d40",
    light: "#4db6ac"
  },
  text: {
    onPrimary: '',
    onPrimaryLight: '#011310',
    onWhite: '#004d40',
  }
};

export const Blue = {
  primary: {
    main: "#0d47a1",
    light: "#90caf9"
  },
  text: {
    onPrimary: '',
    onPrimaryLight: '#0d47a1',
    onWhite: '#0d47a1',
  }
};

export const Black = {
  primary: {
    main: "#212121",
    light: "#bdbdbd"
  },
  text: {
    onPrimary: '',
    onPrimaryLight: '#212121',
    onWhite: '#212121',
  }
};

export const Pink = {
  primary: {
    main: "#ff66ff",
    light: "#ffb3ff"
  },
  text: {
    onPrimary: '',
    onWhite: '',
  }
};

export const Orange = {
  primary: {
    main: "#ef6c00",
    light: "#ffcc80"
  },
  text: {
    onPrimary: '',
    onPrimaryLight: '#5f2c01',
    onWhite: '#ef6c00',
  }
};

export const MAIN_COLORS = [
  Red.primary.main,
  Green.primary.main,
  Blue.primary.main,
  Orange.primary.main,
  Black.primary.main
];

export const THEME_COLORS = new Map([
  [Red.primary.main, Red],
  [Green.primary.main, Green],
  [Blue.primary.main, Blue],
  [Orange.primary.main, Orange],
  [Black.primary.main, Black]
]);

export const mediaBreakpoints = [
  { name: "sm", size: 600 },
  { name: "md", size: 960 },
  { name: "lg", size: 1280 },
  { name: "xl", size: 1920 },
];

export const mediaQueries = {
  sm: `@media screen and (min-width:${600}px)`,
  md: `@media screen and (min-width:${960}px)`,
  lg: `@media screen and (min-width:${1280}px)`,
  xl: `@media screen and (min-width:${1920}px)`,
};

export const breakpoints = mediaBreakpoints.reduce((acc, item) => {
  return {
    ...acc,
    [item.name]: item.size,
  };
}, {});

export function getDevice(width) {
  switch (true) {
    case width < breakpoints.sm:
      return "sm";
    case width >= breakpoints.sm && width < breakpoints.md:
      return "md";
    case width >= breakpoints.md && width < breakpoints.lg:
      return "lg";
    case width >= breakpoints.lg:
      return "lg";
    default:
      return "lg";
  }
}

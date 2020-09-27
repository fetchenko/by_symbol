export function parseSymbolFromRoute(location) {
  return location.hash && location.hash.replace("#", "");
}

export function getSymbolId(location, options) {
  const symbolIdFromRoute = parseSymbolFromRoute(location);
  const defaultSymbolId = options.length && options[0].id;

  return symbolIdFromRoute || defaultSymbolId;
}

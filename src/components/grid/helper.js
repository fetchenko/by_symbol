const SYMBOL_SIZE = {
  sm: 240,
  md: 300,
  lg: 350,
};

export function calcRatioSize(ratio, size) {
  return Number(Number(ratio * size).toFixed(2));
}

export function calcScaledSize(ratio, size) {
  const gridSize = SYMBOL_SIZE[size];

  return ratio ? calcRatioSize(ratio, gridSize) : gridSize;
}

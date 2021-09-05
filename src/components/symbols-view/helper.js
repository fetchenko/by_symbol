export function getSymbolSizes(areas) {
  const xCoords = [];
  const yCoords = [];

  for (const area of areas) {
    const [, , y2, x2] = area.split("/");

    xCoords.push(x2);
    yCoords.push(y2);
  }

  return {
    width: Math.max(...xCoords),
    height: Math.max(...yCoords),
  };
}

export function calcVertRatio(width, height) {
  return Number(Number((height + 1) / width).toFixed(1));
}

export function calcHorizontalRatio(width, height) {
  return Number(Number(width / (height + 1)).toFixed(1));
}


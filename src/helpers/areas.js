export const changeAreas = (areas, vSize = 0, hSize = 0) => {
  return areas.map(item => {
    const [v1, h1, v2, h2] = item.split("/");

    return `${v1 - vSize} / ${h1 - hSize} / ${v2 - vSize} / ${h2 - hSize} `;
  });
};

import sortBy from 'lodash/sortBy'

export const changeAreas = (areas, vSize = 0, hSize = 0) => {
  return areas.map(item => {
    const [v1, h1, v2, h2] = item.split("/");

    return `${v1 - vSize} / ${h1 - hSize} / ${v2 - vSize} / ${h2 - hSize} `;
  });
};

const GRID_GAP = 1;

export const optimizeData = (data) => {
  let coordsData = data.map((item) => {
    const [y, x] = item.split('/');

    return {
      x: parseInt(x, 10),
      y: parseInt(y, 10),
      color: item.color,
    }
  })

  coordsData = sortBy(coordsData, ['y', 'x']);

  const optimizedData = [];

  let curr = {
    xStart: coordsData[0].x,
    xEnd: coordsData[0].x,
    y: coordsData[0].y,
    color: coordsData[0].color,
  };

  for (let i = 1; i <= coordsData.length; i++) {
    const isLastItem = (i === coordsData.length);

    if (isLastItem) {
      optimizedData.push({
        ...curr,
        xEnd: curr.xEnd + GRID_GAP,
      });

      break;
    }

    const check = ((coordsData[i].x - 1) === curr.xEnd)
      && (coordsData[i].y === curr.y)
      && (coordsData[i].color === curr.color);

    if (check) {
      curr = {
        ...curr,
        xEnd: curr.xEnd + 1,
      }
    } else {
      optimizedData.push({
        ...curr,
        xEnd: curr.xEnd + GRID_GAP,
      });

      curr = {
        xStart: coordsData[i].x,
        xEnd: coordsData[i].x,
        y: coordsData[i].y,
        color: coordsData[i].color,
      };
    }
  }

  return optimizedData.map((item) => {
    return `${item.y} / ${item.xStart} / ${item.y} / ${item.xEnd}`;
    return {
      area: `${item.y} / ${item.xStart} / ${item.y} / ${item.xEnd}`,
      color: item.color,
    }
  });
}


export const optimizeDataVert = (data) => {
  let coordsData = data.map((item) => {
    const [y, x] = item.split('/');

    return {
      y: parseInt(x, 10),
      x: parseInt(y, 10),
      color: item.color,
    }
  })

  coordsData = sortBy(coordsData, ['y', 'x']);

  const optimizedData = [];

  let curr = {
    xStart: coordsData[0].x,
    xEnd: coordsData[0].x,
    y: coordsData[0].y,
    color: coordsData[0].color,
  };

  for (let i = 1; i <= coordsData.length; i++) {
    const isLastItem = (i === coordsData.length);

    if (isLastItem) {
      optimizedData.push({
        ...curr,
        xEnd: curr.xEnd + GRID_GAP,
      });

      break;
    }

    const check = ((coordsData[i].x - 1) === curr.xEnd)
      && (coordsData[i].y === curr.y)
      && (coordsData[i].color === curr.color);

    if (check) {
      curr = {
        ...curr,
        xEnd: curr.xEnd + 1,
      }
    } else {
      optimizedData.push({
        ...curr,
        xEnd: curr.xEnd + GRID_GAP,
      });

      curr = {
        xStart: coordsData[i].x,
        xEnd: coordsData[i].x,
        y: coordsData[i].y,
        color: coordsData[i].color,
      };
    }
  }

  return optimizedData.map((item) => {
    // return `${item.y} / ${item.xStart} / ${item.y} / ${item.xEnd}`;
    return `${item.xStart} / ${item.y} / ${item.xEnd} / ${item.y}`;
    return {
      area: `${item.y} / ${item.xStart} / ${item.y} / ${item.xEnd}`,
      color: item.color,
    }
  });
}
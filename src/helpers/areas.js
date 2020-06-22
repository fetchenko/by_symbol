import sortBy from 'lodash/sortBy'
import uniq from 'lodash/uniq';

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


export const sliceUnnecessaryCells = (cells) => {
  let coords = cells.map((cell) => {
    const [y1, x1, y2, x2] = cell.split('/')

    return {
      x: parseInt(x1, 10),
      y: parseInt(y1, 10),
      x2: parseInt(x2, 10),
      y2: parseInt(y2, 10),
      color: cell.color,
    };
  });

  const xPoints = uniq(coords.map((area) => parseInt(area.x, 10)));
  const yPoints = uniq(coords.map((area) => parseInt(area.y, 10)));

  const diffX = Math.min(...xPoints) - 1;
  const diffY = Math.min(...yPoints) - 1;

  return coords.map((cell) => {
    const xPos = cell.x - diffX;
    const yPos = cell.y - diffY;

    const x2Pos = cell.x2 - diffX;
    const y2Pos = cell.y2 - diffY;

    return `${yPos} / ${xPos} / ${y2Pos} / ${x2Pos}`;

    return {
      area: `${yPos} / ${xPos} / ${yPos} / ${xPos}`,
      color: cell.color,
    }
  })
}
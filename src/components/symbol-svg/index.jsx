import React from "react";

export function calcGridSize(data, svgSize) {
  const axis = data.reduce(
    (acc, item) => {
      const [, , y2, x2] = item.split("/");
      return {
        x: [...acc.x, x2],
        y: [...acc.y, y2],
      };
    },
    { x: [], y: [] }
  );

  return { width: Math.max(...axis.x), height: Math.max(...axis.y) };
}


export default function SvgSymbol({
  data,
  svgSize = { width: 300, height: 300 },
}) {
  const gridSize = calcGridSize(data);
  const size = Math.min(
    Math.floor(svgSize.width / gridSize.width),
    Math.floor(svgSize.height / gridSize.height)
  );

  return (
    <div>
      <svg width={svgSize.width} height={svgSize.height}>
        {data.map((cell) => {
          const [y1, x1, y2, x2] = cell.split("/");
          return (
            <rect
              key={cell}
              x={size * x1}
              y={size * y1}
              width={size * (x2 - x1)}
              height={size}
            />
          );
        })}
      </svg>
    </div>
  );
}

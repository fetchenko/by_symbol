import React from "react";
import { GridContainer, GridBlock } from "../../styled/grid";

let gridAreas = [
  "13 / 5 / 13 / 5",
  "13 / 6 / 13 / 6",
  "12 / 6 / 12 / 6",
  "12 / 5 / 12 / 5",
  "12 / 4 / 12 / 4",
  "12 / 7 / 12 / 7",
  "11 / 8 / 11 / 8",
  "11 / 3 / 11 / 3",
  "10 / 2 / 10 / 2",
  "9 / 2 / 9 / 2",
  "8 / 2 / 8 / 2",
  "7 / 2 / 7 / 2",
  "8 / 1 / 8 / 1",
  "9 / 1 / 9 / 1",
  "6 / 3 / 6 / 3",
  "5 / 4 / 5 / 4",
  "5 / 6 / 5 / 6",
  "5 / 5 / 5 / 5",
  "5 / 7 / 5 / 7",
  "6 / 8 / 6 / 8",
  "7 / 9 / 7 / 9",
  "8 / 9 / 8 / 9",
  "9 / 9 / 9 / 9",
  "10 / 9 / 10 / 9",
  "9 / 10 / 9 / 10",
  "8 / 10 / 8 / 10",
  "4 / 5 / 4 / 5",
  "4 / 6 / 4 / 6",
  "8 / 4 / 8 / 4",
  "8 / 7 / 8 / 7",
  "10 / 6 / 10 / 6",
  "10 / 5 / 10 / 5",
  "5 / 8 / 5 / 8",
  "4 / 8 / 4 / 8",
  "3 / 8 / 3 / 8",
  "2 / 8 / 2 / 8",
  "5 / 3 / 5 / 3",
  "4 / 3 / 4 / 3",
  "3 / 3 / 3 / 3",
  "2 / 3 / 2 / 3",
  "1 / 2 / 1 / 2",
  "1 / 9 / 1 / 9"
];

const SymbolOfHarvest = () => {
  return (
    <GridContainer
      rows="18px"
      columns="18px"
      rowsSm="25px"
      columnsSm="25px"
      rowsMd="30px"
      columnsMd="30px"
    >
      {gridAreas.map(area => {
        return <GridBlock key={area} gridArea={area} />;
      })}
    </GridContainer>
  );
};

export default SymbolOfHarvest;

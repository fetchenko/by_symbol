import React from "react";
import { GridContainer, GridBlock } from "../../styled/grid";

const gridAreas = [
  "1 / 1 / 2 / 1",
  "1 / 3 / 2 / 6",
  "1 / 9 / 2 / 11",
  "1 / 14 / 2 / 16",
  "1 / 19 / 2 / 22",
  "1 / 23 / 2 / 24",
  "2 / 2 / 3 / 5",
  "2 / 10 / 3 / 12",
  "2 / 13 / 3 / 15",
  "2 / 20 / 3 / 23",
  "3 / 1 / 4 / 4",
  "3 / 7 / 4 / 8",
  "3 / 11 / 4 / 14",
  "3 / 17 / 4 / 18",
  "3 / 21 / 4 / 24",
  "4 / 1 / 5 / 3",
  "4 / 6 / 5 / 9",
  "4 / 12 / 5 / 13",
  "4 / 16 / 5 / 19",
  "4 / 22 / 5 / 24",
  "5 / 1 / 6 / 2",
  "5 / 7 / 6 / 10",
  "5 / 11 / 6 / 14",
  "5 / 15 / 6 / 18",
  "5 / 23 / 6 / 24",
  "6 / 4 / 7 / 5",
  "6 / 8 / 7 / 12",
  "6 / 13 / 7 / 17",
  "6 / 20 / 7 / 21",
  "7 / 4 / 8 / 6",
  "7 / 9 / 8 / 11",
  "7 / 12 / 8 / 13",
  "7 / 14 / 8 / 16",
  "7 / 19 / 8 / 21",
  "8 / 1 / 9 / 2",
  "8 / 5 / 9 / 7",
  "8 / 8 / 9 / 10",
  "8 / 11 / 9 / 12",
  "8 / 13 / 9 / 14",
  "8 / 15 / 9 / 17",
  "8 / 18 / 9 / 20",
  "8 / 23 / 9 / 24",
  "9 / 1 / 10 / 3",
  "9 / 6 / 10 / 9",
  "9 / 10 / 10 / 11",
  "9 / 12 / 10 / 13",
  "9 / 14 / 10 / 15",
  "9 / 16 / 10 / 19",
  "9 / 22 / 10 / 24",
  "10 / 1 / 11 / 2",
  "10 / 5 / 11 / 7",
  "10 / 8 / 11 / 10",
  "10 / 11 / 11 / 12",
  "10 / 13 / 11 / 14",
  "10 / 15 / 11 / 17",
  "10 / 18 / 11 / 20",
  "10 / 23 / 11 / 24",
  "11 / 4 / 12 / 6",
  "11 / 9 / 12 / 11",
  "11 / 12 / 12 / 13",
  "11 / 14 / 12 / 16",
  "11 / 19 / 12 / 21",
  "12 / 4 / 13 / 5",
  "12 / 8 / 13 / 12",
  "12 / 13 / 13 / 17",
  "12 / 20 / 13 / 21",
  "13 / 1 / 14 / 2",
  "13 / 7 / 14 / 10",
  "13 / 11 / 14 / 14",
  "13 / 15 / 14 / 18",
  "13 / 23 / 14 / 24",
  "14 / 1 / 15 / 3",
  "14 / 6 / 15 / 9",
  "14 / 12 / 15 / 13",
  "14 / 16 / 15 / 19",
  "14 / 22 / 15 / 24",
  "15 / 1 / 16 / 4",
  "15 / 7 / 16 / 8",
  "15 / 11 / 16 / 14",
  "15 / 17 / 16 / 18",
  "15 / 21 / 16 / 24",
  "16 / 2 / 17 / 5",
  "16 / 10 / 17 / 12",
  "16 / 13 / 17 / 15",
  "16 / 20 / 17 / 23",
  "17 / 1 / 18 / 1",
  "17 / 3 / 18 / 6",
  "17 / 9 / 18 / 11",
  "17 / 14 / 18 / 16",
  "17 / 19 / 18 / 22",
  "17 / 23 / 18 / 24"
];

const SymbolOfSpring = () => {
  return (
    <GridContainer
      rows="12px"
      columns="12px"
      rowsSm="20px"
      columnsSm="20px"
      rowsMd="25px"
      columnsMd="25px"
    >
      {gridAreas.map(area => {
        return <GridBlock key={area} gridArea={area} />;
      })}
    </GridContainer>
  );
};

export default SymbolOfSpring;

import React from "react";
import { GridContainer, GridBlock } from "../../styled/grid";

const gridAreas = [];

const SymbolOfMaslenica = () => {
  return (
    <GridContainer
      rows="8px"
      columns="8px"
      rowsSm="12px"
      columnsSm="12px"
      rowsMd="16px"
      columnsMd="16px"
    >
      {gridAreas.map(area => {
        return <GridBlock key={area} gridArea={area} />;
      })}
    </GridContainer>
  );
};

export default SymbolOfMaslenica;

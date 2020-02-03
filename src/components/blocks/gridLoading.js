import React from "react";
import PropTypes from "prop-types";
import { fade } from "../../styled/animation";
import { GridContainer } from "../../styled/grid";
import styled from "styled-components";
import { createArray } from "../../helpers/collection";
import { randomNumber } from "../../helpers/numbers";

const Cell = styled.div`
  width: ${props => props.width || "10px"};
  height: ${props => props.height || "10px"};
  background-color: #ff6666;
  animation: ${fade} 0.9s infinite;
`;

function GridLoading(props) {
  const { containerProps = {}, cellProps = {} } = props;
  const { rows = 5, columns = 5, rowGap = 5, columnGap = 5 } = containerProps;
  const { width, height } = cellProps;

  const colsArr = createArray(columns, 1);
  const rowsArr = createArray(rows, 1);

  return (
    <GridContainer
      rows={`${rows}px`}
      columns={`${columns}px`}
      rowsMd={`${rows}px`}
      columnsMd={`${columns}px`}
      rowsSm={`${rows}px`}
      columnsSm={`${columns}px`}
      rowGap={`${rowGap}px`}
      columnGap={`${columnGap}px`}
    >
      {rowsArr.map(col =>
        colsArr.map(row => {
          return (
            <Cell
              key={`${col} / ${row} / ${col} / ${row}`}
              width={width}
              height={height}
              style={{
                gridArea: `${col} / ${row} / ${col} / ${row}`,
                animationDelay: `${randomNumber(8)}s`
              }}
            />
          );
        })
      )}
    </GridContainer>
  );
}

GridLoading.propTypes = {
  containerProps: PropTypes.shape({
    rows: PropTypes.number,
    columns: PropTypes.number,
    rowGap: PropTypes.number,
    columnGap: PropTypes.number
  }),
  cellProps: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  })
};

export default GridLoading;

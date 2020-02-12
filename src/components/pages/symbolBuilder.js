import React, { Component } from "react";
import { createArray } from "../../helpers/collection";
import Slider from "../inputs/slider";

const styles = {
  grid: {
    display: "grid",
    gridAutoRows: 19,
    gridAutoColumns: 19,
    maxHeight: "80vh",
    overflow: "auto",
    maxWidth: "90vh"
  },
  cell: {
    width: "100%",
    height: "100%",
    border: "solid 1px #ccc"
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    display: "flex",
    margin: 20
  }
};

class SymbolBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: new Set(),
      cellSize: 15,
      columnsAmount: 50,
      rowsAmount: 50
    };
  }

  handleGridClick = event => {
    const symbol = new Set(this.state.symbol);
    const { id } = event.target;

    console.log({ id, symbol });

    if (symbol.has(id)) {
      symbol.delete(id);
    } else {
      symbol.add(id);
    }

    this.setState({
      symbol
    });
  };

  render() {
    const { symbol, cellSize, columnsAmount, rowsAmount } = this.state;

    const columns = createArray(columnsAmount, 1);
    const rows = createArray(rowsAmount, 1);

    return (
      <div style={styles.root}>
        <div style={styles.form}>
          <Slider
            min={10}
            value={cellSize}
            onChange={event => this.setState({ cellSize: event.target.value })}
            label="cell size"
          />
          <Slider
            min={10}
            value={columnsAmount}
            onChange={event =>
              this.setState({ columnsAmount: event.target.value })
            }
            label="columns amount"
          />
          <Slider
            min={10}
            value={rowsAmount}
            onChange={event =>
              this.setState({ rowsAmount: event.target.value })
            }
            label="rows amount"
          />
        </div>

        <div
          style={{
            ...styles.grid,
            gridAutoColumns: `${cellSize}px`,
            gridAutoRows: `${cellSize}px`
          }}
          onClick={this.handleGridClick}
        >
          {rows.map(col =>
            columns.map(row => {
              const area = `${col} / ${row} / ${col} / ${row}`;
              return (
                <div
                  id={area}
                  key={area}
                  style={{
                    ...styles.cell,
                    gridArea: area,
                    backgroundColor: symbol.has(area) ? "blue" : "white"
                  }}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default SymbolBuilder;

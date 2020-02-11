import React, { Component } from "react";
import { createArray } from "../../helpers/collection";
import Slider from "../inputs/slider";

const styles = {
  grid: {
    display: "grid",
    gridAutoRows: 19,
    gridAutoColumns: 19
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
  }
};

const columns = createArray(90, 1);
const rows = createArray(90, 1);

class SymbolBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: new Set()
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
    const { symbol } = this.state;

    return (
      <div style={styles.root}>
        <Slider />
        <div style={styles.grid} onClick={this.handleGridClick}>
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

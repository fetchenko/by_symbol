import React, { Component } from "react";
import { createArray } from "../../helpers/collection";

const styles = {
  grid: {
    display: "grid",
    gridAutoRows: 15,
    gridAutoColumns: 15
  },
  cell: {
    width: "100%",
    height: "100%",
    border: "solid 1px"
  }
};

const columns = createArray(70, 1);
const rows = createArray(50, 1);

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

    console.log({ id });

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
      <div>
        <h3>Symbol Builder</h3>
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

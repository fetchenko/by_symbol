import React, { useState } from "react";
import Layout from "../containers/layout";
import SymbolsMenu from "../menu/symbolsMenu";
import Symbols from "./symbols";
import SymbolComposition from "./compositions";
import { withRouter } from "react-router";

const blocks = [
  {
    theme: "symbols"
  },
  {
    theme: "composition"
  }
];

const Home = props => {
  const {
    match: {
      params: { view }
    }
  } = props;

  console.log({ view });
  const [block, setBlock] = useState(blocks[0]);

  return (
    <div>
      <SymbolsMenu />
      {block.theme === "symbols" && <Symbols />}
      {block.theme === "compositions" && <SymbolComposition />}
    </div>
  );
};

export default withRouter(Home);

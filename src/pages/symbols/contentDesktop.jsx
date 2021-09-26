import React from "react";
import SymbolsMenuDesktop from "~/components/menu/symbolsMenu/symbolsMenuDesktop";
import Symbols from "./symbolsDesktop";

export default function SymbolsContentDesktop(props) {
  const { symbolId, symbolsMenuOptions } = props;

  return (
    <>
      <SymbolsMenuDesktop value={symbolId} options={symbolsMenuOptions} />
      <Symbols symbolId={symbolId} />
    </>
  );
}

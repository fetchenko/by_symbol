import React from "react";
import { Link } from "react-router-dom";

const SymbolsMenu = () => {
  return (
    <div>
      <Link to="/:sybmols">
        <div>S</div>
      </Link>
      <Link to="/:compositions">
        <div>K</div>
      </Link>
    </div>
  );
};

export default SymbolsMenu;

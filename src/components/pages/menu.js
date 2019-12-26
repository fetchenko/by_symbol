import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="/symbols">
          <li>symbols</li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;

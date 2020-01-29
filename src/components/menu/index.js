import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuView, MenuList, MenuItem } from "../../styled/menu";
import { Burger, Cross } from "../../styled/blocks";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(open => !open);
  };

  return (
    <MenuView>
      {open ? <Cross onClick={toggleMenu} /> : <Burger onClick={toggleMenu} />}
      {open && (
        <MenuList>
          <Link to="/">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to="/symbols">
            <MenuItem>Symbols</MenuItem>
          </Link>
        </MenuList>
      )}
    </MenuView>
  );
};

export default Menu;

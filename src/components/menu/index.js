import React, { useState } from "react";
import { MenuView } from "../../styled/menu";
import { Burger, Cross } from "../../styled/blocks";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <MenuView>
      {open ? (
        <Cross
          onClick={() => {
            setOpen(false);
          }}
        />
      ) : (
        <Burger onClick={() => setOpen(true)} />
      )}
    </MenuView>
  );
};

export default Menu;

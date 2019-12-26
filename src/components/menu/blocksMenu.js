import React from "react";
import styled from "styled-components";

const mockMenuOptions = [
  {
    label: "Symbol of spring and youth",
    path: "symbol-of-spring",
    title: "spring and youth",
    img: "/assets/img/symbol-of-spring.png"
  },
  {
    label: "Symbol of wealth",
    path: "symbol-of-wealth",
    title: "wealth",
    img: "/assets/img/symbol-of-wealth.png"
  },
  {
    label: "Union of the sun and the earth. Symbol of harvest",
    path: "symbol-of-harvest",
    title: "harvest",
    img: "/assets/img/symbol-of-harvest.png"
  }
];

const BlockMenuItem = styled.li`
  width: 90px;
  height: 60px;
  border: solid 1px ${props => props.theme.primary.light};
  list-style-type: none;
  margin: 0 ${props => props.theme.unit}px;
`;

const BlockMenu = styled.ul`
  display: flex;
  flex-direction: row;
`;

const BlocksMenu = props => {
  return (
    <BlockMenu>
      {mockMenuOptions.map(option => {
        return (
          <BlockMenuItem>
            {option.img ? (
              <img src={option.img} style={{ width: "100%", height: "100%" }} />
            ) : (
              option.title
            )}
          </BlockMenuItem>
        );
      })}
    </BlockMenu>
  );
};

export default BlocksMenu;

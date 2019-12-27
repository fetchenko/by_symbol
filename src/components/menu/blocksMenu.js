import React from "react";
import styled from "styled-components";
import { SYMBOL_OPTIONS } from "../../constants";

const BlockMenuItem = styled.li`
  width: 90px;
  height: 60px;
  border: solid 2px
    ${props =>
      props.active ? props.theme.primary.main : props.theme.primary.light};
  list-style-type: none;
  margin: 0 ${props => props.theme.unit}px;
  cursor: pointer;
`;

const BlockMenu = styled.ul`
  display: flex;
  flex-direction: row;
`;

const BlocksMenu = props => {
  const { value } = props;

  const handleClick = value => () => {
    props.onChange(value);
  };

  return (
    <BlockMenu>
      {SYMBOL_OPTIONS.map(option => {
        return (
          <BlockMenuItem
            active={value === option.path}
            onClick={handleClick(option.path)}
          >
            {option.img ? (
              <img
                key={option.path}
                src={option.img}
                alt={option.label}
                style={{ width: "100%", height: "100%" }}
              />
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

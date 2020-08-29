import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import BurgerBox from "components/blocks/burgerBox";
import { Link } from "styled/links";

const BurgerMenuPoints = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 60px;
  background-color: #fff;
  box-shadow: 0 21px 35px -30px rgba(0, 0, 0, 0.75);
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  overflow-y: hidden;
  background-color: ${(props) => props.theme.background.default};
  max-height: ${(props) => (props.open ? "250px" : "0px")};
  transition-property: all;
  transition-duration: 0.5s;
`;

const ListItem = styled.li`
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #eee;
  font-size: 300;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: ${(props) => props.theme.text.onPrimaryLight};
  }
`;

const Button = styled.button`
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primary.main};
  width: 50px;
  height: 50px;
  overflow: visible;
  margin: 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
`;

export default function BurgerMenu({ options }) {
  const intl = useIntl();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>
        <BurgerBox open={open} />
      </Button>
      <BurgerMenuPoints>
        <List open={open}>
          {options.map((option) => (
            <ListItem key={option.path}>
              <Link to={option.path}>
                {intl.formatMessage({ id: option.label })}
              </Link>
            </ListItem>
          ))}
        </List>
      </BurgerMenuPoints>
    </>
  );
}

import React from "react";
import styled from "styled-components";
import { Link as RouteLink } from "styled/links";
import { useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import { SOURCES, ABOUT, SYMBOLS } from "constants/translations";
import BurgerMenu from "components/menu/burgerMenu";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "theme/theme";

const Root = styled.div`
  z-index: 19;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 5px 10px;
`;

const Link = styled(RouteLink)`
  box-shadow: ${(props) =>
    props.active
      ? "0px 0px 6px " + props.theme.primary.light + " inset"
      : "none"};
  background-color: transparent;
  color: #fff;
  font-size: 1.3rem;
  opacity: 1;
  padding: 8px 14px;
  border-radius: 16px;
  transition: 0.4s;

  &:hover {
    background-color: transparent;
    box-shadow: 0px 0px 10px ${props => props.theme.primary.light} inset;
  }
`;

const HOME_PATH = "/";

const menuOptions = [
  { label: SYMBOLS, path: HOME_PATH },
  { label: SOURCES, path: "/sources" },
  { label: ABOUT, path: "/about" },
];

export default function HeaderMenu() {
  const intl = useIntl();
  const location = useLocation();
  const windowSize = useWindowSize();

  if (!windowSize.width) {
    return null;
  }

  return (
    <Root>
      {windowSize.width > breakpoints.md ? (
        <List>
          {menuOptions.map((option) => {
            const active = option.path === location.pathname ? 1 : 0;

            return (
              <ListItem key={option.path}>
                <Link active={active} to={option.path}>
                  {intl.formatMessage({ id: option.label })}
                </Link>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <BurgerMenu options={menuOptions} />
      )}
    </Root>
  );
}

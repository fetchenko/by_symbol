import React from "react";
import styled from "styled-components";
import { Link } from "styled/links";
import { useIntl } from "react-intl";
import { HOME, SOURCES, ABOUT } from "constants/translations";
import BurgerMenu from "components/menu/burgerMenu";

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

  a {
    font-size: 1.3rem;
    color: #fff;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const DesktopView = styled.div`
  display: none;

  ${(props) => props.theme.mediaQueries.md} {
    display: block;
  }
`;

export const MobileView = styled.div`
  ${(props) => props.theme.mediaQueries.md} {
    display: none;
  }
`;

const desktopMenuOptions = [
  { label: SOURCES, path: "/sources" },
  { label: ABOUT, path: "/about" },
];

const mobileMenuOptions = [{ label: HOME, path: "/" }, ...desktopMenuOptions];

export default function HeaderMenu() {
  const intl = useIntl();

  return (
    <Root>
      <MobileView>
        <BurgerMenu options={mobileMenuOptions} />
      </MobileView>
      <DesktopView>
        <List>
          {desktopMenuOptions.map((option) => (
            <ListItem key={option.path}>
              <Link to={option.path}>
                {intl.formatMessage({ id: option.label })}
              </Link>
            </ListItem>
          ))}
        </List>
      </DesktopView>
    </Root>
  );
}

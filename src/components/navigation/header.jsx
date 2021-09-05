import React from "react";
import { FormattedMessage } from "react-intl";
import { createUseStyles } from "react-jss";

import Text, { COLORS as TEXT_COLORS, FONTS } from "~/components/text";
import HeaderMenu from "~/components/menu/headerMenu";
import Link, { TYPES as LINK_TYPES } from "~/components/button-link";
import { TAGS } from "../text";

const useStyles = createUseStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    padding: "0 0.75rem",
    backgroundColor: "var(--primary-main)",
    boxShadow: "0 0 0.75rem var(--primary-light)",
  },
}));

const MainHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Link type={LINK_TYPES.primary} to="/">
        <Text
          color={TEXT_COLORS.onPrimary}
          font={FONTS.secondary}
          tag={TAGS.h4}
        >
          <FormattedMessage id="belorussian-symbols" />
        </Text>
      </Link>
      <HeaderMenu />
    </div>
  );
};

export default MainHeader;

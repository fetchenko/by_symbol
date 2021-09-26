import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage, useIntl } from "react-intl";
import Text, { SIZES as TEXT_SIZES } from "~/components/text";
import { createUseStyles } from "react-jss";
import { useTheme } from "~/theme/themeContext";
import { breakpoints } from "~/theme/theme";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    // alignItems: "center",
    padding: "0.5rem",

    [theme.mediaQueries.md]: {
      padding: "1.5rem",
    },
  },
  description: {
    padding: "1rem 0 0 0",
    boxSizing: "border-box",

    [theme.mediaQueries.md]: {
      padding: "2rem 0 0 0",
    },
  },
}));

function SymbolSummary({ title, description }) {
  const intl = useIntl();
  const classes = useStyles();
  const { device } = useTheme();

  const intlDescription = intl.formatMessage({ id: description });

  const textSize =
    breakpoints[device] > breakpoints.md ? TEXT_SIZES.lg : TEXT_SIZES.md;

  const descriptionSize =
    breakpoints[device] > breakpoints.md ? TEXT_SIZES.md : TEXT_SIZES.sm;

  return (
    <div className={classes.container}>
      {title && (
        <Text size={textSize}>
          <FormattedMessage id={title} />
        </Text>
      )}
      {intlDescription !== "#" && (
        <Text size={descriptionSize} className={classes.description}>
          {intlDescription}
        </Text>
      )}
    </div>
  );
}

SymbolSummary.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default SymbolSummary;

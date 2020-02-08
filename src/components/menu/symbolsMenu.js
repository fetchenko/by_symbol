import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "../../styled/links";
import { Container } from "../../styled/containers";
import { CapitalLetter } from "../typography";
import { FormattedMessage } from "react-intl";

const SymbolsMenu = ({ options = [] }) => {
  return (
    <Container>
      {options.map(option => {
        return (
          <Link key={option.label} to={option.path}>
            <CapitalLetter>
              <FormattedMessage id={option.label} />
            </CapitalLetter>
          </Link>
        );
      })}
    </Container>
  );
};

export default withRouter(SymbolsMenu);

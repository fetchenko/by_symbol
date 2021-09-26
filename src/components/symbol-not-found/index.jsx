import React from "react";
import { FormattedMessage } from "react-intl";
import Text from '~/components/text'

function SymbolNotFound() {
  return (
    <div>
      <Text>
        <FormattedMessage id="symbol-not-found" />
      </Text>
    </div>
  );
}

export default SymbolNotFound;

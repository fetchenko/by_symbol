import sortBy from "lodash/sortBy";
import { SYMBOL_OPTIONS, SHORT_TITLE_PREFIX } from "constants/index";

export function translateMenuOptions(intl) {
  const options = SYMBOL_OPTIONS.map((symbol) => ({
    ...symbol,
    title: intl.formatMessage({
      id: `${SHORT_TITLE_PREFIX}-${symbol.title}`,
    }),
  }));

  return sortBy(options, ["title"]);
}

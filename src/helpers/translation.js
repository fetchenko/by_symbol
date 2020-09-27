import sortBy from "lodash/sortBy";
import { SYMBOL_OPTIONS, SHORT_TITLE_PREFIX } from "constants/index";

export function translateMenuOptions(intl) {
  let options = SYMBOL_OPTIONS.map(({items, ...symbol}) => {
    let translatedSubOptions = (items || []).map((item) => ({
      ...item,
      title: intl.formatMessage({
        id: `${SHORT_TITLE_PREFIX}-${item.title}`,
      }),
    }));

    translatedSubOptions = sortBy(translatedSubOptions, ["title"]);

    return {
      ...symbol,
      title: intl.formatMessage({
        id: `${SHORT_TITLE_PREFIX}-${symbol.title}`,
      }),
      subOptions: translatedSubOptions,
    };
  });

  return sortBy(options, ["title"]);
}

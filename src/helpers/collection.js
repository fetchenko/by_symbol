export const createArray = (size, start = 0) => {
  let arr = [];

  for (let i = start; i < size; i++) {
    arr.push(i);
  }

  return arr;
};

export function createOptionsConfig(options) {
  return options.reduce((acc, item, index, items) => {
    return {
      ...acc,
      [item.id]: {
        ...item,
        prevEl: index === 0 ? null : items[index - 1].id,
        nextEl: index + 1 === items.length ? null : items[index + 1].id,
      },
    };
  }, {});
}

export function createDirectionalObjectFromList(item) {
  return item.subOptions.reduce((acc, option, index, options) => {
    return {
      ...acc,
      [option.id]: {
        prevEl: index === 0 ? null : options[index - 1].id,
        nextEl: index + 1 === options.length ? null : options[index + 1].id,
        parentEl: { id: item.id, title: item.title },
      },
    };
  }, {});
}

export function createSubOptionsConfig(options) {
  return options.reduce((acc, item) => {
    if (item.subOptions.length) {
      const directionalObj = createDirectionalObjectFromList(item);

      return {
        ...acc,
        ...directionalObj,
      };
    }
    return acc;
  }, {});
}

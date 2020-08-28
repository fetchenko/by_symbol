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
      [item.path]: {
        ...item,
        prevEl: index === 0 ? null : items[index - 1].path,
        nextEl: index + 1 === items.length ? null : items[index + 1].path,
      },
    };
  }, {});
}

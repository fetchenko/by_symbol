export const createArray = (size, start = 0) => {
  let arr = [];

  for (let i = start; i < size; i++) {
    arr.push(i);
  }

  return arr;
};

export const getNextValue = (options, value) => {
  const currentIndex = options.findIndex(item => item.path === value.path);

  return options[currentIndex + 1];
};

export const getPrevValue = (options, value) => {
  const currentIndex = options.findIndex(item => item.path === value.path);

  return options[currentIndex - 1];
};

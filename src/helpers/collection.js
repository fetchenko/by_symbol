export const createArray = (size, start = 0) => {
  let arr = [];

  for (let i = start; i < size; i++) {
    arr.push(i);
  }

  return arr;
};

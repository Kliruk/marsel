export const getRandomNumber = (min = 1, max = 1) => {
  return Math.random() * (max - min) + min;
};

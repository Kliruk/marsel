/**
 * Returns number between {min} and {max}
 * @param {min} min of the range
 * @param {max} max of the range
 * @return {number}
 */
export const getRandomNumber = (min = 1, max = 1) => {
  return Math.random() * (max - min) + min;
};

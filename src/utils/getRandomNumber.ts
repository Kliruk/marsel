/**
 * Returns number between {min} and {max}
 * @param {min} min of the range
 * @param {max} max of the range
 * @return {number}
 */
export const getRandomNumber = (min: number = 1, max: number = 1): number => {
  return Math.random() * (max - min) + min;
};

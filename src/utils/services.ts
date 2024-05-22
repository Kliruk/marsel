/**
   * Cut off decimal number to certain numbers after decimal point
   * @param {value} value that you want to round to {digits} after decimal point
   * @param {precision} precision of numbers after decimal point
   * @return {number} with certain {precisions} after decimal point
   */
export function roundDecimalNumber(value : number, precision : number): number {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

/**
 * Returns number between {min} and {max}
 * @param {min} min of the range
 * @param {max} max of the range
 * @return {number}
 */
export const getRandomNumber = (min: number = 1, max: number = 1): number => {
  return Math.random() * (max - min) + min;
};

/**
 * Function that shuffles an array and returns it
 * @param {array} array that will be shuffled
 * @return {string[]}
 */
export function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return [...array];
}

/**
 * Find right object in array of objects
 * @param {array} array from which the search will be made
 * @param {key} key which key will be searched
 * @param {value} value to be compared
 * @return {object}
 */
export function findObject<T>(array: T[], key: keyof T, value: T[keyof T] | null): T | undefined {
  return array.find((v: T) => v[key] === value);
}

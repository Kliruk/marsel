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

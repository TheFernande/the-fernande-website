/**
 * Utility function that checks if the provided result is a RegExpExecArray.
 * @param {RegExpExecArray | null} result - The result to check.
 * @returns {boolean} True if the result is a RegExpExecArray, false otherwise.
 * @private
 */
function isRegExpMatchArray(
  result: RegExpExecArray | null
): result is RegExpExecArray {
  return result !== null;
}

/**
 * Converts a hexadecimal color code to an RGBA color string.
 * If an alpha percentage is provided, the output will include it,
 * otherwise, it defaults to an RGB color string.
 *
 * @param {string} hex - The hexadecimal color code.
 * @param {number} [alphaPercentage] - The alpha percentage for the color's opacity.
 * @returns {string} The RGBA color string if alphaPercentage is provided, otherwise an RGB color string.
 * @throws {Error} Will throw an error if the hex color is not valid.
 */
export const hexToRGBA = (hex: string, alphaPercentage?: number): string => {
  // Convert shorthand hex to full form
  const fullHex =
    hex.length === 4
      ? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
      : hex;

  // Extract RGB values
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);

  if (!isRegExpMatchArray(result)) {
    throw new Error(`Invalid HEX color: ${hex}`);
  }

  const [r, g, b] = result.slice(1, 4).map(n => parseInt(n, 16));

  // If alpha percentage is provided, include it in the output
  if (alphaPercentage) {
    const a = (alphaPercentage / 100).toFixed(2);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * Given a non-negative integer input, return true if input is a power of two.
 * Return false otherwise.
 *
 * Example #1:
 * Input: 4
 * Output: true
 * Explanation: The number 4 is a power of two.
 *
 * Example #2:
 * Input: 17
 * Output: false
 * Explanation: The number 17 is not a power of two.
 *
 * Constraints:  Your solution should run in O(1) time.
 */
const { Shifter: num } = require("../structures/binary");
const solution = (input) => {
  if (input <= 0) return false;
  return Math.log2(input) === Math.floor(Math.log2(input));
};
/**
 * this one is a little packed. The solution comes from the fact that all numbers in the computers are represented as
 * base 2. So taking log2 of the number will give me--roughtly, how many bytes I would *NEED (lower bound)* to store that number.
 * if the bytes (4 bits) is not a whole number, then it must mean that the number cannot be represented as a power
 * of two.
 * Another way to think about it. If I cannot find a whole number to raise 2 by to find the given input, then it must mean
 * that it cannot be a power of two.
 * log2(2) = 1, 2^1 = 2
 * log2(3) = 1.58.., 2^1.58... = 3 | 3 is not a power of two
 */

const solution_01 = (input) => {
  return !!input && (input & (input - 1)) === 0;
};

const solution_02 = (input) => {
  return input && (input & (input - 1)) === 0;
};

console.log(solution_02(-1)); //1073741824

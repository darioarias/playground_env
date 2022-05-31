/**
 * Given a non-negative integer input, return true if input is a power of 4. Return false otherwise.
 *
 * Example #1:
 * Input: 16
 * Output: true
 * Explanation: The number 16 is a power of four. (4^2)
 *
 * Example #2:
 * Input: 8
 * Output: false
 * Explanation: The number 8 is not a power of four. The exponent would be 3/2 which is not whole.
 *
 * Constraints:  Your solution should run in O(1) time.
 */

const { Shifter: num } = require("../structures/binary");

const solution = (number) => {
  if (number < 1) return false;
  let base = Math.log(number) / Math.log(4);
  return base == Math.floor(base);
};

// console.log(solution(16));
console.log("powers of 4");
num.show_binary(4, 2, "0");
// num.show_binary(2, 2);
// num.show_binary(3, 2);
// num.show_binary(16, 2);
// num.show_binary(15, 2);

// console.log("\npowers of 2");
// num.show_binary(2, 2);
// num.show_binary(1, 2);

const { Shifter: num } = require("../structures/binary");

/**
 * Given two strings s1 and s2 consisting of digits between 0 to 9,
 * return a string representing the sum of s1 and s2
 * when they are considered as base-10 decimal numbers.
 *
 * Example #1:
 * Input: s1 = "95", s2 = "7"
 * Output: "102"
 * Explanation: The sum of 95 and 7 is 102.
 *
 * Constraints:
 * You may not use any built-in methods that trivialize the problem (e.g. BigInteger methods),
 * and you may not convert the strings to integers.
 */

const solution = (s1, s2) => {
  let i = s1.length - 1,
    j = s2.length - 1;

  let carry = 0,
    result = "";

  while (i >= 0 || j >= 0) {
    let sum = carry;

    if (i >= 0) {
      sum += s1[i] - "0";
      i--;
    }

    if (j >= 0) {
      sum += s2[j] - "0";
      j--;
    }

    carry = parseInt(sum / 10);
    result += (sum % 10).toString();
  }

  if (carry != 0) result += carry.toString();

  return result.split("").reverse().join("");
};

const solution_01 = (string1, string2) => {
  let i_end = string1.length - 1,
    j_end = string2.length - 1;
  let result = "",
    carry = 0;
  while (i_end >= 0 || j_end >= 0) {
    let sum = carry;

    if (i_end >= 0) {
      let num = string1[i_end--] - "0";
      if (isNaN(num)) return "unable to add strings";
      sum += num;
    }

    if (j_end >= 0) {
      let num = string2[j_end--] - "0";
      if (isNaN(num)) return "unable to add strings";
      sum += num;
    }

    carry = Math.floor(sum / 10);
    result += (sum % 10).toString();
  }

  if (carry !== 0) result += carry.toString();
  return result.split("").reverse().join("");
};
console.log(solution_01("965", "7"));

//  1
// 965
// 007
// 972

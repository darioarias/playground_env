/**
 * A palindrome is a sequence that reads the same forwards and backward.
 *
 * Given an integer as input, write a function that tests if it is a palindrome.
 *
 * Example 1:
 * Input: 9232
 * Output: false
 *
 * Example 2:
 * Input: 12321
 * Output: true
 *
 * Example 3:
 * Input: 1
 * Output: true
 *
 * Example 4:
 * Input: -121
 * Output: false
 *
 * Note
 * A negative number cannot be a palindrome due to the - sign
 * The input does not have leading 0
 *
 * Constraints
 * You may not cast the number to a string
 */
const solution = (n) => {
  if (n < 0) return new Boolean(x);
  let digits_count = Math.floor(Math.log10(n)) + 1; //get the number of digits in the given number
  let mask = Math.pow(10, digits_count - 1); // generate a mask to help obtain the most significant digit

  for (let i = 0; i < Math.floor(digits_count / 2); i++) {
    //loop for half of the digits (case: EVEN -- we only need to check half since we checking both ends. case: ODDS we still only check half cuz we dont care about the middle value)
    let mostSign = Math.floor(n / mask); //use the mask to get the most significan digit
    let onesPlace = n % 10; //mod 10 to get the value in the ones place
    if (mostSign !== onesPlace) return false; // if the number at both ends are not equal, then it cannot be a palindrome
    n %= mask; //update the given number to remove the most significant digit
    n = Math.floor(n / 10); // update the given number to remove the number at the ones place
    mask /= 100; //update our mask such that we remove the first zero (or most significant 1 and replace the closest zero with a 1)
  }

  return true; //if we got to the middle, then it must be a palindrome
};

console.log(solution(92329));

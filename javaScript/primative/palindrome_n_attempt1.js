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

const solution = (number) => {
  if (number < 0) return false;
  //get the number of integers to create mask and to decide how long to loop for
  let number_of_digits = Math.floor(Math.log10(number)) + 1;
  let mask = Math.pow(10, number_of_digits - 1);

  //loop for half of the integers, working inwords. in the case that we only have 1 digit, the loop does not need to run
  for (let i = 0; i < Math.floor(number_of_digits / 2); i++) {
    let most_significant = Math.floor(number / mask);
    let least_signigicant = number % 10;
    if (most_significant !== least_signigicant) return false;

    number %= mask;
    number = Math.floor(number / 10);
    console.log("new Number", number);
    mask /= 100;
    console.log("new Mask", mask);
  }

  return true;
};

/**
 * Compute the n Fibonacci Number.
 * -- Extra: You can only use O(N) time complexity and O(N) space complexity
 *
 * Example:
 *  Fib(2) = 1
 *  Fib(5) = 5
 *  Fib(10) = 55
 */

const fib = (n, memo = {}) => {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (n in memo) return memo[n];

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(80));

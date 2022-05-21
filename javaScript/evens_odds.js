/**
 * Given an array, sort it such that all even numbers are in the front and all odds numbers are in the back.
 * -- Extra: You can only use O(N) time complexity and O(1) space complexity
 *
 * Example: Given [1, 2, 3, 4, 5, 6, 7], Result should be [6, 2, 4, 5, 3, 7, 1]
 */

const swap_at_index = (a, b, list) => ([list[a], list[b]] = [list[b], list[a]]);

const evens_odds_partition = (list = []) => {
  let e = 0,
    o = list.length - 1;

  while (e < o) {
    if (list[e] % 2 === 0) {
      e += 1;
    } else {
      swap_at_index(e, o, list);
      o -= 1;
    }
  }

  return list;
};

//           o
// [6, 2, 4, 5, 3, 7, 1]
//           e

console.log(evens_odds_partition([1, 2, 3, 4, 5, 6, 7]));

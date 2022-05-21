/**
 * Given an array, and a value k, find the first occurance of k within the array
 * and return the index
 * -- Extra: You can only use O(log(N)) time complexity and O(1) space complexity
 *
 * Example: Given [-10, -2, -1, 3, 3, 4, 5, 8, 9], k = 3. Result should be 2
 */

const first_k = (list, k) => {
  let match_idx;

  const binary_seach = (list = [], left = 0, right = list.length - 1) => {
    let mid = Math.floor((left + right) / 2);
    if (k <= list[mid]) {
      if (mid >= 0 && list[mid] === k) match_idx = mid;
      if (left < right) binary_seach(list, left, mid - 1);
    } else if (k > list[mid]) binary_seach(list, mid + 1, right);
  };
  binary_seach(list);
  return match_idx;
};

console.log(first_k([3, 3, 4, 5, 8, 9], 3));

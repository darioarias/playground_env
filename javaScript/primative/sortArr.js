/**
 * Sort array having 0,1 and 2 only
 * You are given an array nums containing only 0, 1 and 2. You need to sort the array in ascending order.
 *
 * Note:
 * Do not use any built-in sorting algorithms.
 * Interviewers usually ask to solve it in O(n) time complexity and single pass.
 * You should not use any extra memory.
 *
 * Example 1:
 * Input: [0,1,2,1,2,2,2,1,0]
 * Output: [0,0,1,1,1,2,2,2,2]
 *
 * Example 2:
 * Input: [2,2,1,1,1,0,0,0,0]
 * Output: [0,0,0,0,1,1,1,2,2]
 *
 * Constraints:
 * 0 <= nums[I] <=2
 */
const solution = (nums = []) => {
  //Three Pointers Approach
  const swap = (a, b) => ([nums[a], nums[b]] = [nums[b], nums[a]]);

  //Make a Pointer for left (0)
  let zeros = 0;

  //Make a Pointer for right (2)
  let twos = nums.length - 1;

  //Make a Pointer for current (1)
  let i = 0;

  //Iterate till i<=right
  while (i <= twos) {
    //Case if nums[i]==0
    //Swap its value with nums[left]
    //Increment left
    if (nums[i] === 0) swap(zeros++, i++);
    // nums[i] is 1, check next number
    // Increment i
    else if (nums[i] === 1) i++;
    //Case if nums[i]==2
    //Swap it with the right pointer
    //Decrement right pointer
    else swap(twos--, i);
  }

  return nums;
};

const solution_01 = (nums = []) => {
  let zeros = 0,
    current = 0,
    twos = nums.length - 1;
  const swap = (a, b) => ([nums[a], nums[b]] = [nums[b], nums[a]]);

  while (current <= twos) {
    if (nums[current] === 1) {
      current++;
      continue;
    }
    if (nums[current] === 0) {
      swap(current++, zeros++);
    } else swap(current, twos--);
  }
  return nums;
};
console.log(solution_01([0, 1, 2, 1, 2, 2, 2, 1, 0]));
// solution([2, 2, 1, 1, 1, 0, 0, 0, 0]);
/*


switch (nums[i]) {
  case 0:
    swap(zeroIdex++, i--);
    break;
  case 2:
    swap(twoIndex--, i);
    break;
  default:
    break;
}

*/

/**
 * Given a two-dimensional square matrix (n x n), rotate the matrix 90 degrees to the right (clockwise).
 * Example 1:
 * Input:
 * [
 *   [ 1,  2,  3, 4],
 *   [ 5,  6,  7, 8],
 *   [ 9, 10, 11, 12],
 *   [13, 14, 15, 16]
 * ],
 * Output:
 * [
 *  [13,  9, 5, 1],
 *  [14, 10, 6, 2],
 *  [15, 11, 7, 3],
 *  [16, 12, 8, 4]
 * ]
 *
 * Example 2:
 * Input:
 * [
 *   [10, 20],
 *   [30, 40]
 * ],
 * Output:
 * [
 *  [30, 10],
 *  [40, 20]
 * ]
 *
 * @param {Array<Array<number>>} matrix
 * @return {Array<Array<number>>}
 */
const rotate = (matrix) => {
  let size = matrix.length - 1;
  for (let layer = 0; layer < Math.floor(matrix.length / 2); layer++) {
    for (let i = layer; i < size - 1; i++) {
      let top = matrix[layer][i],
        right = matrix[i][size - layer],
        bottom = matrix[size - layer][size - i],
        left = matrix[size - i][layer];
      matrix[i][size - layer] = top;
      matrix[size - layer][size - i] = right;
      matrix[size - i][layer] = bottom;
      matrix[layer][i] = left;
    }
  }

  return matrix;
};

let m = [
  [13, 9, 5, 1],
  [14, 10, 6, 2],
  [15, 11, 7, 3],
  [16, 12, 8, 4],
];

// rotate(m);
// console.log(m);
/**
 *
 * @param {Array<Array<Number>>} matrix
 * @returns {Array<Array<Number>>}
 */
const rotate_01 = (matrix) => {
  const size = matrix.length - 1;

  for (let row = 0; row < Math.floor(matrix.length); row++) {
    for (let col = 0; col < size - 1; col++) {
      console.log(matrix[row][col]);
    }
  }
};

rotate_01(m);

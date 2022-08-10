/*
We've decided to limit each monster's scariness range to a single space, and use monsters arranged in lines to threaten greater distances.

For example, three monsters in a row can scare a player up to three spaces away.

Write a function that takes a board, and returns a list of packs.

For each pack, include the following information:
 - The location of the top-left monster
 - The maximum scariness range

Example board:
board1 = [
  ['-', 'M', 'M', '-', '-', 'M'],
  ['-', '-', '-', '-', 'M', '-'],
  ['-', 'M', '-', '-', 'M', '-'],
  ['P', 'M', '-', '-', 'M', '-'],
  ['-', 'M', '-', '-', 'M', '-'],
]
Expected output (in any format):
[
  (0,1), 2
  (0,5), 1
  (2,1), 3
  (1,4), 4
]

board2 = [
  ['-', 'M', '-', '-', '-', '-'],
  ['-', 'M', '-', '-', '-', '-'],
  ['-', 'M', '-', 'M', '-', '-'],
  ['-', 'M', '-', '-', '-', '-'],
  ['-', 'M', 'P', 'M', 'M', 'M'],
]
Expected output (in any format):
[
  (0,1), 5
  (2,3), 1
  (4,3), 3
]

board3 = [
  ['P', 'M'],
]
Expected output (in any format):
[
  (0, 1), 1  - there will always be at least one monster
]

Complexity Analysis variables:
r = number of rows
c = number of columns

*/

"use strict";

const playerPosition = (board) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i] == "P") {
      return i;
    }
  }
  //return not foud
};

const scanUntil = (board, start = 0) => {
  while (board[start] == "-") {
    start++;
  }
  return start;
};

const distance = (board) => {
  let firstChar = scanUntil(board);
  let secondChar = scanUntil(board, firstChar + 1);

  return secondChar - firstChar - 1;
};

const player_position = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] == "P") {
        return [row, col];
      }
    }
  }
  /// O(N^2), O(1)
};

// const explore
const find_nearest_monster = (matrix, [s_row, s_col]) => {
  const queue = [{ row: s_row, col: s_col, steps: 0 }]; // FIFO
  const visited = new Set([`${s_row},${s_col}`]);

  while (queue.length > 0) {
    let { row, col, steps: cSteps } = queue.shift();
    if (matrix[row][col] == "M") return cSteps;
    // console.log(`row: ${row}, col: ${col}, steps: ${cSteps}`)
    let delta = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (let [deltaRow, deltaCol] of delta) {
      let newRow = row + deltaRow,
        newCol = col + deltaCol;
      if (0 <= newRow && newRow < matrix.length) {
        if (0 <= newCol && newCol < matrix[0].length) {
          if (!visited.has(`${newRow},${newCol}`)) {
            queue.push({ row: newRow, col: newCol, steps: cSteps + 1 });
            visited.add(`${newRow},${newCol}`);
          }
        }
      }
    }
  }
};

const player_position_monster = (matrix) => {
  let player_pos = player_position(matrix);

  let steps_to_monster = find_nearest_monster(matrix, player_pos);
  return `(${player_pos[0]},${player_pos[1]}), ${steps_to_monster - 1}`; //steps_to_monster - 1;
};

const board1 = [
  ["-", "-", "-", "M", "-", "-"],
  ["-", "-", "-", "-", "M", "-"],
  ["-", "M", "-", "P", "-", "-"],
  ["M", "-", "-", "-", "-", "-"],
  ["-", "M", "-", "-", "-", "-"],
];
// returns (2,3), 1

console.log(player_position_monster(board1));

const board2 = [
  ["P", "-", "-", "M", "-", "-"],
  ["-", "-", "M", "-", "M", "-"],
  ["M", "-", "-", "-", "-", "-"],
  ["M", "-", "-", "M", "-", "-"],
  ["-", "M", "-", "-", "-", "-"],
];
// returns (0,0), 2
console.log(player_position_monster(board2));

const board3 = [
  ["M", "M", "M"],
  ["-", "-", "P"],
];
// returns (1,2), 0
console.log(player_position_monster(board3));

// const board1 = [
//   ["-", "-", "-", "-", "-", "-"],
//   ["-", "-", "M", "-", "M", "-"],
//   ["-", "-", "-", "P", "-", "-"],
//   ["M", "-", "-", "M", "-", "-"],
//   ["-", "M", "-", "-", "-", "-"],
// ];
// console.log(player_position(board1)); // returns 2,3

// const board2 = [
//   ["P", "-", "-", "-", "-", "-"],
//   ["-", "-", "M", "-", "M", "-"],
//   ["-", "-", "-", "-", "-", "-"],
//   ["M", "-", "-", "M", "-", "-"],
//   ["-", "M", "-", "-", "-", "-"],
// ];
// console.log(player_position(board2)); // returns 0,0

// const board3 = [
//   ["M", "-", "M"],
//   ["M", "-", "P"],
// ];
// console.log(player_position(board3)); // returns 1,2

// const board1 = ["-", "P", "-", "-", "M", "-"];
// console.log(distance(board1)); // returns 2

// const board2 = ["-", "M", "-", "-", "P", "-"];
// console.log(distance(board2)); // returns 2

// const board3 = ["M", "-", "-", "-", "P"];
// console.log(distance(board3)); // returns 3

// const board4 = ["P", "M"];
// console.log(distance(board4)); // returns 0

// const board1 = ["-", "-", "P", "-", "-", "-"];
// console.log(playerPosition(board1)); // returns 2

// const board2 = ["P", "-", "-"];
// console.log(playerPosition(board2)); // returns 0

// const board3 = ["-", "-", "-", "P"];
// console.log(playerPosition(board3)); // returns 3

// const board4 = ["P"];
// console.log(playerPosition(board4)); // returns 0

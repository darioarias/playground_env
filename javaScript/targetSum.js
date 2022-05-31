const twoNumberSum = (numbers, targetSum) => {
  let comp = new Set();
  for (let number of numbers) {
    if (comp.has(`${number}`)) return [number, targetSum - number];
    comp.add(`${targetSum - number}`);
  }
  return [];
};

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

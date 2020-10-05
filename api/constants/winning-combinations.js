const winningCombinations = [
  { cells: 123, bit: 7 },
  { cells: 456, bit: 56 },
  { cells: 789, bit: 448 },
  { cells: 147, bit: 73 },
  { cells: 258, bit: 146 },
  { cells: 369, bit: 292 },
  { cells: 149, bit: 265 },
  { cells: 357, bit: 84 },
];

const bitMap = {
  0: 0,
  1: 1,
  2: 2,
  3: 4,
  4: 8,
  5: 16,
  6: 32,
  7: 64,
  8: 128,
  9: 256,
};

module.exports = { winningCombinations, bitMap };

const gametable = require('../constants/game-table');
const { VALID_CELL_VALUES } = require('../constants/valid-cell-values');

module.exports.post_result = (req, res) => {
  res.json(createEmptyGameResponse(filterInvalidValues(req.body)));
};

function createEmptyGameResponse(updatedCells) {
  return {
    game: createGametable(updatedCells),
    completed: false,
  };
}

function createGametable(updatedCells) {
  return [
    ...gametable.filter(
      (cell) => !updatedCells.some((updatedCell) => updatedCell.id === cell.id)
    ),
    ...updatedCells,
  ];
}

function filterInvalidValues(updatedCells) {
  return updatedCells.filter((cell) => !VALID_CELL_VALUES.includes(cell));
}

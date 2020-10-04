const gametable = require('../constants/game-table');
const { VALID_CELL_VALUES } = require('../constants/valid-cell-values');

module.exports.post_result = (req, res) => {
  const updatedCells = req.body;
  res.json(createEmptyGameResponse(filterInvalidValues(updatedCells)));
};

function createGametable(updatedCells) {
  return { ...gametable, ...updatedCells };
}

function createEmptyGameResponse(updatedCells) {
  return {
    game: createGametable(updatedCells),
    completed: false,
  };
}

function filterInvalidValues(updatedCells) {
  const validValues = {};
  for (const cell in updatedCells) {
    if (VALID_CELL_VALUES.includes(updatedCells[cell].value)) {
      validValues[cell] = updatedCells[cell];
    }
  }
  return validValues;
}

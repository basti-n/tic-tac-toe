const initialGame = require('../constants/game-table');
const { VALID_CELL_VALUES } = require('../constants/valid-cell-values');

let currentGame;

module.exports.post_result = (req, res) => {
  if (!currentGame) {
    currentGame = createEmptyGameResponse();
  }

  currentGame = getUpdatedGameReponse(filterInvalidValues(req.body));

  return res.json(currentGame);
};

function getUpdatedGameReponse(updatedCells) {
  const updatedGame = createGametable(currentGame.game, updatedCells);
  return {
    game: updatedGame,
    completed: getIsCompleted(updatedGame),
  };
}

function createEmptyGameResponse(updatedCells) {
  return {
    game: createGametable(initialGame, updatedCells || []),
    completed: false,
  };
}

function createGametable(game, updatedCells) {
  return sortBy(
    [
      ...game.filter(
        (cell) =>
          !updatedCells.some((updatedCell) => updatedCell.id === cell.id)
      ),
      ...updatedCells,
    ],
    'id'
  );
}

function filterInvalidValues(updatedCells) {
  return updatedCells.filter((cell) => !VALID_CELL_VALUES.includes(cell));
}

function getIsCompleted(game) {
  return game.every((cell) => cell.value !== null);
}

function sortBy(arr, key, direction = 'asc') {
  if (direction === 'desc') {
    return arr.sort((a, b) => (a[key] < b[key] ? 0 : -1));
  }

  return arr.sort((a, b) => (a[key] > b[key] ? 0 : -1));
}

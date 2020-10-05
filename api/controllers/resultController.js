const initialGame = require('../constants/game-table');
const {
  winningCombinations,
  bitMap,
} = require('../constants/winning-combinations');
const { VALID_CELL_VALUES } = require('../constants/valid-cell-values');

let currentGame;

module.exports.post_restart = (_, res) => {
  currentGame = createEmptyGameResponse();

  return res.status(201).json(currentGame);
};

module.exports.post_result = (req, res) => {
  if (!currentGame) {
    currentGame = createEmptyGameResponse();
  }

  currentGame = getUpdatedGameReponse(filterInvalidValues(req.body));

  return res.json(currentGame);
};

function getUpdatedGameReponse(updatedCells) {
  const updatedGame = createGametable(currentGame.game, updatedCells);
  const winner = getWinner(updatedGame);

  return {
    game: updatedGame,
    completed: getIsCompleted(updatedGame),
    ...{ ...(winner ? { winner } : {}) },
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

function getWinner(game) {
  const getKey = (cell) => cell.id.split('_')[1];
  const getId = (cell) => Number(bitMap[getKey(cell) || 0]);

  console.log({ game });

  const cellsByValue = game
    .filter((cell) => !!cell.value)
    .reduce((acc, curr) => {
      let currentValue = Number(acc[curr.value]) || 0;
      if (currentValue) {
        console.log({ acc, curr, currentValue });
        return { ...acc, [curr.value]: currentValue + getId(curr) };
      }

      return { ...acc, [curr.value]: getId(curr) };
    }, {});

  let winner = null;

  for (const cellByValue in cellsByValue) {
    const matchingId = cellsByValue[cellByValue];

    const isValidCellValue = (value) => value === 'x' || value === 'o';
    console.log({
      BITS: winningCombinations.map((combi) => combi.bit),
      matchingId,
      cellByValue,
      results: winningCombinations
        .map((combi) => combi.bit)
        .some((w) => (w | matchingId) === matchingId),
      resultOld: winningCombinations
        .map((combi) => combi.bit)
        .some((successValue) => {
          const match = successValue | matchingId;
          return match === matchingId;
        }),
    });

    if (
      isValidCellValue(cellByValue) &&
      winningCombinations
        .map((combi) => combi.bit)
        .some((successValue) => {
          const match = successValue | matchingId;
          return match === matchingId;
        })
    ) {
      winner = cellByValue;
      console.log({ winner });
      return winner;
    }
  }

  return winner;
}

function sortBy(arr, key, direction = 'asc') {
  if (direction === 'desc') {
    return arr.sort((a, b) => (a[key] < b[key] ? 0 : -1));
  }

  return arr.sort((a, b) => (a[key] > b[key] ? 0 : -1));
}

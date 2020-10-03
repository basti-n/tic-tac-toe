const gametable = require('../constants/game-table');

module.exports.post_result = (req, res) => {
  res.json(createEmptyGameResponse());
};

function createGametable() {
  return gametable;
}

function createEmptyGameResponse() {
  return {
    game: createGametable(),
    completed: false
  }
}

const initialGame = require('../constants/game-table');

const create_mockRequest_post_result_all_completed = () => initialGame.map(
  (cell) => ({ ...cell, value: Math.random() > 0.5 ? 'x' : 'o' })
);
const create_mockRequest_post_result = (id, value) => [{ id, value }];
const mockResponse_post_result = { json: (result) => result };

module.exports = {
  create_mockRequest_post_result,
  mockResponse_post_result,
  create_mockRequest_post_result_all_completed,
};

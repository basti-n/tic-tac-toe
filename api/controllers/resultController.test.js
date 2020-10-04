const resultController = require('./resultController');
const gameplan = require('../constants/game-table');
const {
  create_mockRequest_post_result,
  mockResponse_post_result,
} = require('../mocks/result.mocks');

describe('ResultController', () => {
  describe('postResult', () => {
    beforeEach(() => {
      spyOn(mockResponse_post_result, 'json').and.callThrough();
    });

    it('should return a json response with the updated game', () => {
      const mockRequest = create_mockRequest_post_result('ttt-2', 'x');

      resultController.post_result(
        { body: mockRequest },
        mockResponse_post_result
      );

      const expected = {
        game: [
          ...gameplan.filter((cell) => cell.id !== mockRequest[0].id),
          ...mockRequest,
        ],
        completed: false,
      };

      expect(mockResponse_post_result.json).toHaveBeenCalledWith(expected);
    });
  });
});

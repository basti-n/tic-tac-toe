const resultController = require('./resultController');
const gameplan = require('../constants/game-table');
const {
  mockRequest_post_result,
  mockResponse_post_result,
} = require('../mocks/result.mocks');

describe('ResultController', () => {
  describe('postResult', () => {
    beforeEach(() => {
      spyOn(mockResponse_post_result, 'json').and.callThrough();
    });

    it('should return a json response with the updated game', () => {
      resultController.post_result(
        mockRequest_post_result,
        mockResponse_post_result
      );

      const expected = {
        game: { ...gameplan, ...mockRequest_post_result.body },
        completed: false,
      };

      expect(mockResponse_post_result.json).toHaveBeenCalledWith(expected);
    });
  });
});

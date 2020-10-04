const resultController = require('./resultController');
const gameplan = require('../constants/game-table');
const {
  create_mockRequest_post_result_all_completed,
  create_mockRequest_post_result,
  mockResponse_post_result,
} = require('../mocks/result.mocks');

describe('ResultController', () => {
  const getGame = (gameplan, mockRequest) => [
    ...gameplan.filter(
      (cell) => !mockRequest.some((mockCell) => mockCell.id === cell.id)
    ),
    ...mockRequest,
  ];

  describe('postResult', () => {
    beforeEach(() => {
      spyOn(mockResponse_post_result, 'json').and.callThrough();
    });

    it('should return a json response with the updated game', () => {
      const mockRequest = create_mockRequest_post_result('ttt_2', 'x');

      resultController.post_result(
        { body: mockRequest },
        mockResponse_post_result
      );

      const expected = {
        game: getGame(gameplan, mockRequest).sort((a, b) =>
          a.id > b.id ? 1 : -1
        ),
        completed: false,
      };

      expect(mockResponse_post_result.json).toHaveBeenCalledWith(expected);
    });
  });

  it('should set completed to false if not all cells are filled', () => {
    const mockRequest = create_mockRequest_post_result('ttt_2', 'x');

    const result = resultController.post_result(
      { body: mockRequest },
      mockResponse_post_result
    );

    expect(result.completed).toBeFalsy();
  });

  it('should set completed to true if all cells are filled', () => {
    const mockRequest = create_mockRequest_post_result_all_completed();

    const result = resultController.post_result(
      { body: mockRequest },
      mockResponse_post_result
    );

    expect(result.completed).toBeTruthy();
  });
});

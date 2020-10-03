const resultController = require('./resultController');

describe('ResultController', () => {
  const mockReq = {};
  const mockRes = {
    json: () => {},
  };

  it('should return a json object with result set to true', () => {
    expect.assertions(1);
    spyOn(mockRes, 'json').and.callThrough();

    const expected = { result: true };
    resultController.post_result(mockReq, mockRes);

    expect(mockRes.json).toHaveBeenCalledWith(expected);
  });
});

const create_mockRequest_post_result = (id, value) => [{ id, value }];
const mockResponse_post_result = { json: () => {} };

module.exports = { create_mockRequest_post_result, mockResponse_post_result };

const httpMocks = require('node-mocks-http');
const { helloWorld } = require('../index'); // Directly import the function

describe('helloWorld', () => {
  it('should return a welcome message with the provided name', () => {
    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/',
      query: {
        name: 'Test'
      }
    });
    const res = httpMocks.createResponse();
    
    helloWorld(req, res); // Directly call the function

    expect(res.statusCode).toBe(200);
    expect(res._getData()).toBe('Welcome to harness, Test! This is a sample Node.js app on Google Cloud Functions.');
  });

  it('should return a welcome message with "World" if no name is provided', () => {
    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/'
    });
    const res = httpMocks.createResponse();
    
    helloWorld(req, res); // Directly call the function

    expect(res.statusCode).toBe(200);
    expect(res._getData()).toBe('Welcome to harness, World! This is a sample Node.js app on Google Cloud Functions.');
  });
});
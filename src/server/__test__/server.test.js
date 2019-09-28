require('dotenv').config();
const port = process.env.PORT;
const request = require('supertest');
const app = require('../server');
const mongoDB = require('../database');

describe('Test the root path', () => {
    beforeAll(() => {
        mongoDB.connect();
    });

    afterAll((done) => {
        mongoDB.disconnect(done);
    });

    test('It should response the GET method', () => {
        return request(`http://localhost:${port}`).get('/').expect(200);
    });
});
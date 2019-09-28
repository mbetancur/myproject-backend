require('dotenv').config();
const port = process.env.PORT;
const request = require('supertest');
const app = require('../server');

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = (await request(`http://localhost:${port}`).get("/"));
        expect(response.statusCode).toBe(200);
    });
});
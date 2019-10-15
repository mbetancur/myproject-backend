require('dotenv').config()
const PORT = process.env.PORT
const request = require('supertest')
const app = require('../app')

const server = `http://localhost:${PORT}`

describe('Test the root path', () => {
  beforeAll(() => {
    app.listen()
  })

  afterAll(async (done) => {
    await app.close(done)
  })

  test('It should response the GET method', () => {
    return request(server).get('/').expect(200)
  })
})

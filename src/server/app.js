require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT;
let server;

app.get('/', (req, res) => {
    res.status(200).send('Hello NodeJsWorld!');
})

module.exports = {
    app,
    listen: async () => {
        server = await app.listen(PORT, () => {
            console.log(`Listening port ${PORT}`);
        });
    },
    close: async () => {
        await server.close(() => {
            console.log("Closed connection");
        });
    }
};
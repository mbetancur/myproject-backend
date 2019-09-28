require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})

module.exports = {
    app,
    listen: async () => {
        await app.listen(port, () => {
            console.log(`Listening port ${port}`);
        });
    }
};
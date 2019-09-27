require('dotenv').config();
const app = require('express')();
const database = require('./database');

const port = process.env.PORT;

app.get('/', function (req, res) {
    res.send('hihihi world')
});

app.listen(port, function () {
    console.log(`Listening port ${port}`);
});
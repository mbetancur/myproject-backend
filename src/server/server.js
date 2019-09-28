require('dotenv').config();
const port = process.env.PORT;
const app = require('./app');
const database = require('./database');

app.listen(port, () => {
    console.log(`Listening port ${port}`);
})
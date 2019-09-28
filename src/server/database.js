require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.DEV_DB;

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI).then(() => {
    console.log("Connected to mLab database");
}, err => {
    console.log(err.stack);
});
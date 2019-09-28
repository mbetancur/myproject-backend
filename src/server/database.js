require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.DEV_DB;

module.exports = {
    mongoose,
    connect: () => {
        mongoose.Promise = Promise;
        mongoose.connect(MONGO_URI).then(() => {
            console.log("Connected to mLab database");
        }, err => {
            console.log(err.stack);
        });
    },
    disconnect: (done) => {
        mongoose.disconnect(done);
    },
};
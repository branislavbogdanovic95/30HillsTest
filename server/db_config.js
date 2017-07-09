"use strict";

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const config = {
    dbPort: '51082',
    dbAddress: "ds151082.mlab.com",
    dbName: 'test30hills',
    dbUser: "hills30",
    dbPassword: "test30hills"
};

let connString = "mongodb://" + config.dbUser + ":" + config.dbPassword + "@" + config.dbAddress + ":" + config.dbPort + "/" + config.dbName;
mongoose.connect(connString);

let dbConnection = mongoose.connection;

dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = dbConnection;
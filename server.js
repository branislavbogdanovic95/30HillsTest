"use strict";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const api = require('./server/routes/api');
const db = require('./server/db_config');
const SERVER_CONFIG = require('./server/server_config');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.set('port', SERVER_CONFIG.PORT);

app.listen(SERVER_CONFIG.PORT, () => {
    console.log("Server started at: http://" + SERVER_CONFIG.SERVER_ADDRESS + ":" + SERVER_CONFIG.PORT);
});
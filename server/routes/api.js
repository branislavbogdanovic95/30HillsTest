"use strict";

const express = require('express');
const router = express.Router();

const socialApi = require('./social_api');

router.use('/api', [
    socialApi
]);

module.exports = router;
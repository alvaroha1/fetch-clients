const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/clients', controller.getClients)

module.exports = router;
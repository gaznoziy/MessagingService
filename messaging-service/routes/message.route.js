const express = require('express');
const router = express.Router();

const controller = require('../controllers/message.controller');

router.post('/message', controller.create);

module.exports = router;
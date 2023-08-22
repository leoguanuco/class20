const express = require('express');
const router = express.Router();
const path = require('path');
const mainController = require('../controllers/mainController.js')

router.get('/', mainController.home)

router.get('/test', mainController.test)

router.get('/details/:id', mainController.details)

module.exports = router;
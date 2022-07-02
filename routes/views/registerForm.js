const express = require('express');
const router = express.Router();
const {display} = require('../../controllers/registerFormController.js');

router.get('/', display);

module.exports = router;
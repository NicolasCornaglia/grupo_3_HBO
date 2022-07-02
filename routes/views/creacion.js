const express = require('express');
const router = express.Router();
const {display} = require('../../controllers/views/creacionController.js');

router.get('/', display);

module.exports = router;
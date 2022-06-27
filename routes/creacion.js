const express = require('express');
const router = express.Router();
const {display} = require('../controllers/creacionController');

router.get('/', display);

module.exports = router;
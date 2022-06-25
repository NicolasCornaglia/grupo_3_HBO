const express = require('express');
const router = express.Router();
const {display} = require('../controllers/productCartController');

router.get('/', display);

module.exports = router;
const express = require('express');
const router = express.Router();
const {display} = require('../../controllers/productDetailController.js');

router.get('/', display);

module.exports = router;
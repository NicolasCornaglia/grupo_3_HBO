const express = require('express');
const router = express.Router();
const { display } = require('../../controllers/views/productDetailController');

router.get('', display);

module.exports = router;
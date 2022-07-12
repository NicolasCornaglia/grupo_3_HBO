const express = require('express');
const router = express.Router();
const { display } = require('../../controllers/views/productCartController');

router.get('', display);

module.exports = router;
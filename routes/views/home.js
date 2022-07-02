const express = require('express');
const router = express.Router();
const homeController = require('../../controllers/views/homeController');

router.get('/', homeController.display);

module.exports = router;
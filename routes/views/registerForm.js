const express = require('express');
const router = express.Router();
const { display } = require('../../controllers/views/registerFormController');

router.get('', display);

module.exports = router;
const express = require('express');
const router = express.Router();
const { display } = require('../../controllers/views/editarController');

router.get('/:id', display);

module.exports = router;
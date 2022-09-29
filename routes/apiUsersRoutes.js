const express = require('express');
const router = express.Router();

const apiUsersController = require('../controllers/apiUsersController');

// vistas generales 
router.get('/', apiUsersController.index);
router.get('/:id', apiUsersController.show);

module.exports = router;
const express = require('express');
const router = express.Router();

const homeController = require('../controllers/views/homeController');

// vistas generales 
router.get('/', homeController.display);


module.exports = router;

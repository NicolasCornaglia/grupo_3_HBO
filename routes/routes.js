const express = require('express');
const router = express.Router();

const productController = require('../controllers/productsController');

// vistas generales 
router.get('/', productController.displayHome);

module.exports = router;

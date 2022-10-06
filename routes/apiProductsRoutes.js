const express = require('express');
const router = express.Router();

const apiProductsController = require('../controllers/apiProductsController');

// vistas generales 
router.get('/', apiProductsController.index);
router.get('/categories', apiProductsController.getAllCategories);
router.get('/products-sold', apiProductsController.getAmountProductsSold)
router.get('/:id', apiProductsController.show);



module.exports = router;
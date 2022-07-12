const router = require('express').Router();
const productController = require('../../controllers/data/productsController');

router.post('/', productController.createProduct);
router.get('/', productController.getProducts);

module.exports = router;
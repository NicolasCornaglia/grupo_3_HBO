const router = require('express').Router();
const productController = require('../../controllers/data/productsController');

router.post('/', productController.createProduct);
router.get('/', productController.getProducts);

router.put('/:id', productController.editProducts);

module.exports = router;
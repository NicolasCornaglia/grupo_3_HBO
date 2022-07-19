const router = require('express').Router();
const productController = require('../../controllers/data/productsController');


router.get('/', productController.getProducts);

router.post('/', productController.createProduct);

router.put('/:id/', productController.editProducts);

router.delete('/:id/', productController.destroy);

module.exports = router;


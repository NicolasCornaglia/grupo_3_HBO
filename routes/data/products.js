const router = require('express').Router();
const productController = require('../../controllers/data/productsController');
const uploadFile = require('../../middlewares/multerMiddleware')

router.get('/', productController.getProducts);

router.post('/', uploadFile.single('image'), productController.createProduct);

router.put('/:id/', productController.editProducts);

router.delete('/:id/', productController.destroy);

module.exports = router;


const express = require('express');
const router = express.Router();

const productController = require('../controllers/productsController');
const uploadFile = require('../middlewares/multerMiddleware')
const { validationsCreateProduct, validationsEditProduct, validate } = require('../middlewares/validatorMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const productCartController = require('../controllers/productCartController');

//  productos
router.get('/create', productController.displayCreate);
router.get('/edit/:id', productController.productToEdit);
router.get('/productCart', authMiddleware, productController.displayProductCart);
router.get('/productDetail/:id', productController.detailProduct);

router.get('/order/:id', authMiddleware, productCartController.order )

router.get('/api/products', productController.renderSearchView);
router.post('/api/products', uploadFile.single('image'), validate(validationsCreateProduct), productController.createProduct);
router.put('/api/products/:id', uploadFile.single('image'), validate(validationsEditProduct), productController.editProducts);
router.delete('/api/products/:id', productController.destroy);

// api for product cart
router.get('/api/productCartItem/:id', productCartController.productById);
router.post('/api/checkout', productCartController.checkout);

module.exports = router;
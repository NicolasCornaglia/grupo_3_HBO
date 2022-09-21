const express = require('express');
const router = express.Router();

const productController = require('../controllers/productsController');
const uploadFile = require('../middlewares/multerMiddleware')
const { validationsCreateProduct, validate } = require('../middlewares/validatorMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//  productos
router.get('/create', productController.displayCreate);
router.get('/edit/:id', productController.productToEdit);
router.get('/productCart', authMiddleware, productController.displayProductCart);
router.get('/productDetail/:id', productController.detailProduct);
/* router.get('/searchproduct', productController.) */

router.get('/api/products', productController.getProducts);
router.post('/api/products', uploadFile.single('image'), validate(validationsCreateProduct), productController.createProduct);
router.put('/api/products/:id', validate(validationsCreateProduct), productController.editProducts);
router.delete('/api/products/:id', productController.destroy);


module.exports = router;
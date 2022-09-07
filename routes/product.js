const express = require('express');
const router = express.Router();

const productController = require('../controllers/productsController');
const uploadFile = require('../middlewares/multerMiddleware')
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//  productos
router.get('/create', productController.displayCreate);
router.get('/edit/:id', productController.productToEdit);
router.get('/productCart', authMiddleware, productController.displayProductCart);
router.get('/productDetail/:id', productController.detailProduct);

router.get('/api/products', productController.getProducts);
router.post('/api/products', uploadFile.single('image'), productController.createProduct);
router.put('/api/products/:id', productController.editProducts);
router.delete('/api/products/:id', productController.destroy);


module.exports = router;
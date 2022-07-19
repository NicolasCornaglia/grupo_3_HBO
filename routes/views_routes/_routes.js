/* const router = require('express').Router(); */
const express = require('express');
const router = express.Router();
const creationController = require('../../controllers/views/creacionController');
const editarController = require('../../controllers/views/editarController');
const homeController = require('../../controllers/views/homeController');
const loginController = require('../../controllers/views/loginController');
const productCartController = require('../../controllers/views/productCartController');
const registerFormController = require('../../controllers/views/registerFormController');

const productController = require('../../controllers/data/productsController');

/* router.use('', require('./home.js'));
router.use('/productDetail', require('./productDetail.js'));
router.use('/login', require('./login.js'));
router.use('/register', require('./registerForm.js'));
router.use('/productCart', require('./productCart.js'));
router.use('/creacion', require('./creacion.js'));
router.use('/editar', require('./editar.js'));
*/

router.get('/', productController.getProducts);
router.get('/creacion', creationController.display);
router.get('/editar/:id', productController.productToEdit);
router.get('/login', loginController.display);
router.get('/productCart', productCartController.display);
router.get('/productDetail/:id', productController.detailProduct);
router.get('/register', registerFormController.display);

module.exports = router;



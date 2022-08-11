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
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authMiddleware = require("../../middlewares/authMiddleware");

// vistas generales 
router.get('/', productController.getProducts);


// vistas de productos
router.get('/creacion', creationController.display);
router.get('/editar/:id', productController.productToEdit);
router.get('/productCart', authMiddleware, productCartController.display);
router.get('/productDetail/:id', productController.detailProduct);


// vistas de usuarios
router.get('/login', loginController.display);
router.get('/register', guestMiddleware, registerFormController.display);



module.exports = router;



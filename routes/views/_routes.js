const router = require('express').Router();

router.use('/', require('./home.js'));
router.use('/productDetail', require('./productDetail.js'));
router.use('/login', require('./login.js'));
router.use('/register', require('./register.js'));
router.use('/productCart', require('./productCart.js'));
router.use('/creacion', require('./creacion.js'));

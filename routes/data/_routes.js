const router = require('express').Router();

router.use('/products', require('./products'));

// Acá abajo van a ir el resto de rutas que conecten con la base de datos

module.exports = router;
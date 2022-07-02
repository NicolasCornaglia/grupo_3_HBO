const router = require('express').Router();

router.use('/products', require('./products/_routes'));

module.exports = router;
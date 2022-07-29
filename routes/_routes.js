const router = require('express').Router();

// Views Routes

router.use('/', require('./views_routes/_routes'));
router.use('/api/products', require('./data/products'));
router.use('/api/users', require('./data/users'));

module.exports = router;
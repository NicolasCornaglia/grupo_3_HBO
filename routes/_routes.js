const router = require('express').Router();

// Views Routes

router.use('/', require('./views_routes/_routes'));
router.use('/api/products', require('./data/products'));

module.exports = router;
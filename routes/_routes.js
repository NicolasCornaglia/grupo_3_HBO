const router = require('express').Router();

// Views Routes

router.use('/', require('./views_routes/_routes'));
router.use('/api', require('./data/_routes'));

module.exports = router;
const router = require('express').Router();

// Views Routes

router.use('/', require('./views/_routes'));
router.use('/api', require('./data/_routes'));

module.exports = router;
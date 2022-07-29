const router = require('express').Router();  

const usersController = require('../../controllers/data/usersController');

router.post('/register',/* upload.single('Imagen de Perfil'), */ usersController.processRegister); 

module.exports = router

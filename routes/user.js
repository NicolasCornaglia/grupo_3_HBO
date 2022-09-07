const express = require('express');
const router = express.Router();

const userController = require('../controllers/usersController');
const uploadFile = require('../middlewares/multerMiddleware')
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


// usuarios
router.get('/login', guestMiddleware,userController.displayLogin);
router.get('/register', guestMiddleware, userController.displayRegisterForm);
router.get('/profile', authMiddleware,userController.displayProfile);
router.get('/editUser', authMiddleware, userController.editView)

router.post("/api/users/register", uploadFile.single("avatar"), validations, userController.processRegister);
router.post("/api/users/login", userController.loginProcess);
router.get("/api/users/logout", userController.logOut)
router.put("/api/users/editUser", userController.editUser)


module.exports = router;
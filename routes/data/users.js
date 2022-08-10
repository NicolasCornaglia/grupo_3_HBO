const express = require("express");
const router = express.Router();

//Controller
const userController = require("../../controllers/data/usersController");

//Middlewares
const uploadFile = require("../../middlewares/multerMiddleware");
//const validations = require("../middlewares/validateRegisterMiddleware");
//const guestMiddleware = require("../middlewares/guestMiddleware");
//const authMiddleware = require("../middlewares/authMiddleware");

//Procesar el Registro
router.post("/register", uploadFile.single("avatar") ,userController.processRegister);

//Proceso de Login
router.post("/login", userController.loginProcess);

//Perfil de Usuario
//router.get("/profile/", authMiddleware, userController.profile);//Si no hay nadie logueado, sera dirijido a Login, de lo contrario continua el proceso de peticion

//Logout
//router.get("/logout", userController.logOut)

module.exports = router; 
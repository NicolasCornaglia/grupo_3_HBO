const express = require("express");
const router = express.Router();

//Controller
const userController = require("../../controllers/data/usersController");

//Middlewares
const uploadFile = require("../../middlewares/multerMiddleware");
const validations = require("../../middlewares/validateRegisterMiddleware");

//Procesar el Registro
router.post("/register", uploadFile.single("avatar"), validations, userController.processRegister);

//Proceso de Login
router.post("/login", userController.loginProcess);

//Logout
router.get("/logout", userController.logOut)

//Edit user
router.put("/edit-user", userController.editUser)

module.exports = router; 
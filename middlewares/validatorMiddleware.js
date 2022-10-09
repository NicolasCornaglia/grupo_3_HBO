const { body } = require("express-validator");
const path = require("path");
const db = require('../database/models');
const User = db.User;
const { validationResult } = require('express-validator');

const validate = validations => {
   return async (req, res, next) => {
      /* console.log("Body from middleware", req.body) */
      await Promise.all(validations.map(validation => validation.run(req)));
      
      return next();
   }
};

const validationsRegister = [
   body("firstname").notEmpty().withMessage("Su nombre debe tener al menos 2 caracteres").bail()
      .isLength({ min: 2, max: 99 }).withMessage("Su nombre debe tener entre 2 y 99 caracteres"),
   body("lastname").notEmpty().withMessage("Su apellido debe tener al menos 2 caracteres").bail()
      .isLength({ min: 2, max: 99 }).withMessage("Su capellido debe tener entre 2 y 99 caracteres"),
   body("email").notEmpty().withMessage("Tienes que escribir un correo electronico").bail()
      .isEmail().withMessage("Debes escribir un formato de correo valido").bail()
      .custom(value => {
         return User.findOne({ where: { email: value } }).then(user => {
            console.log('Usuario: ', user)
            if (user) {
               return Promise.reject('El email ya se encuentra registrado');
            }
         })
      }),
   body("password").isLength({ min: 8, max: 99 }).withMessage("Su contraseña debe tener entre 8 y 99 caracteres"),
   body("password").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i").withMessage("Su contraseña debe contener caracteres alfanumericos"),
   body("phonenumber").isMobilePhone().withMessage("Debe ser un numero telefonico"),
   body("city").notEmpty().withMessage("Escribe tu ciudad de origen"),
   body("gender").notEmpty().withMessage("Tienes que elegir un genero"),
   body("avatar").custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];

      if (!file) {
         throw new Error("Debes elegir una imagen de perfil");
      } else {
         let fileExtension = path.extname(file.originalname);
         if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`)
         }
      }
      return true;
   })
]

const validationsLogin = [
   body("email").notEmpty().withMessage("Tienes que escribir un correo electronico").bail()
      .isEmail().withMessage("Debes escribir un formato de correo valido"),
   body("password").notEmpty().withMessage("Tienes que escribir una contraseña").bail()
]

const validationsCreateProduct = [
   body("name").notEmpty().withMessage("El nombre debe tener al menos 5 caracteres").bail()
      .isLength({ min: 5, max: 35 }).withMessage("El nombre debe tener entre 5 y 35 caracteres"),
   body("description")
      .isLength({ min: 20, max: 99 }).withMessage("La descripcion debe tener entre 20 y 99 caracteres"),
   body("image").custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"];

      if (!file) {
         throw new Error("Debes subir una imagen del producto");
      } else {
         let fileExtension = path.extname(file.originalname);
         if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`)
         }
      }
      return true;
   }),
   body("dimensions").isLength({ min: 5, max: 99 }).withMessage("Debe ingesar las dimensiones del producto")
]

const validationsEditProduct = [
   body("name").notEmpty().withMessage("El nombre debe tener al menos 5 caracteres").bail()
      .isLength({ min: 5, max: 50 }).withMessage("El nombre debe tener entre 5 y 35 caracteres"),
   body("description")
      .isLength({ min: 20, max: 99 }).withMessage("La descripcion debe tener entre 20 y 99 caracteres"),
   body("image").custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"];

      if (!file) {
         // fue validada la extension del archivo al crear el producto
      } else {
         let fileExtension = path.extname(file.originalname);
         if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`)
         }
      }
      return true;
   }) ,
   body("dimensions").isLength({ min: 5, max: 99 }).withMessage("Debe ingesar las dimensiones del producto")
]

module.exports = {
   validationsLogin,
   validationsRegister,
   validationsCreateProduct,
   validationsEditProduct,
   validate
};
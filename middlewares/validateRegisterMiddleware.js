const { body } = require("express-validator");
const path = require("path");
const User = require("../database/models/users");

const validations = [
   body("firstname").notEmpty().withMessage("Su nombre debe tener al menos 2 caracteres").bail()
      .isLength({ min: 2, max:99 }).withMessage("Su nombre debe tener entre 2 y 99 caracteres"),
   body("lastname").notEmpty().withMessage("Su apellido debe tener al menos 2 caracteres").bail()
      .isLength({ min: 2, max:99 }).withMessage("Su capellido debe tener entre 2 y 99 caracteres"),
   body("email").notEmpty().withMessage("Tienes que escribir un correo electronico").bail()
      .isEmail().withMessage("Debes escribir un formato de correo valido").bail()
      .custom(value => {
         return User.findOne({where: {email: value}}).then(user => {
         console.log('Usuario: ',user)
           if (user) {
         return Promise.reject('El email ya se encuentra registrado');
           }
         })}),
   body("password").notEmpty().withMessage("Tienes que escribir una contraseña").bail()
      .isLength({ min: 8, max: 99}).withMessage("Su contraseña debe tener entre 8 y 99 caracteres").bail()
      .isAlphanumeric().withMessage("Su contraseña debe contener caracteres alfanumericos"),
   body("phonenumber").isInt().withMessage("Debe ser un numero telefonico"),
   body("city").notEmpty().withMessage("Escribe tu ciudad de origen"),
   body("gender").notEmpty().withMessage("Tienes que elegir un genero"),
   body("avatar").custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = [".jpg", ".png", ".gif", "jpeg"];

      if (!file) {
         throw new Error("Tienes que subir una imagen");
      } else {
         let fileExtension = path.extname(file.originalname);
         if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`)
         }
      }
      return true;
   })
]

module.exports = validations;
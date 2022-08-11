const { body } = require("express-validator");
const path = require("path");

const validations = [
   body("firstname").notEmpty().withMessage("Tiene que escribir tu nombre"),
   body("lastname").notEmpty().withMessage("Tiene que escribir tu apellido"),
   body("email").notEmpty().withMessage("Tienes que escribir un correo electronico").bail()
      .isEmail().withMessage("Debes escribir un formato de correo valido"),
   body("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
   body("phonenumber").isInt().withMessage("Debe ser un numero telefonico"),
   body("city").notEmpty().withMessage("Escribe tu ciudad de origen"),
   body("gender").notEmpty().withMessage("Tienes que elegir un genero"),
   body("avatar").custom((value, { req }) => {
      let file = req.file;
      let acceptedExtensions = [".jpg", ".png", ".gif"];

      if (!file) {
         throw new Error("Tienes que subir una imagen");
      } else {
         let fileExtension = path.extname(file.originalname);
         if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones de arhcivo permitidas son ${acceptedExtensions.join(", ")}`)
         }
      }
      return true;
   })
]

module.exports = validations;
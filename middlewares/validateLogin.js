const { body } = require("express-validator");


const validations = [
   body("email").notEmpty().withMessage("Tienes que escribir un correo electronico").bail()
      .isEmail().withMessage("Debes escribir un formato de correo valido"),
   body("password").notEmpty().withMessage("Tienes que escribir una contraseña").bail()
   /* contraseña debe coincidir con la existente en base, no lo hicimos en el controllador ya? */,
]
module.exports = validations;
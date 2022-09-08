const { body } = require("express-validator");
const path = require("path");
const User = require("../database/models/users");

const validations = [
   body("name").notEmpty().withMessage("El nombre debe tener al menos 5 caracteres").bail()
      .isLength({ min: 5, max:35 }).withMessage("El nombre debe tener entre 5 y 35 caracteres"),
   body("description").notEmpty().withMessage("La descripcion no puede estar vacia").bail()
      .isLength({ min: 20, max:99 }).withMessage("La descripcion debe tener entre 20 y 99 caracteres"),
   body("image").custom((value, { req }) => {
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
   }),
   body("dimensions").isLength({ min: 5, max:99 }).withMessage("Debe ingesar las dimensiones del producto")
]

module.exports = validations;
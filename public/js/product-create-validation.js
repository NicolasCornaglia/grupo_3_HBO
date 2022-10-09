

window.onload = function () {
   let name = document.querySelector('#name');
   let description = document.querySelector('#description');
   let image = document.querySelector('#image');
   let price = document.querySelector('#price');
   let dimensions = document.querySelector('#dimensions')

   let nameError = document.querySelector('.name-error');
   let descriptionError = document.querySelector('.description-error');
   let imageError = document.querySelector('.image-error');

   /* var validator = require('validator') */
   /* Usar esto para validar el mail no lo de abajo y seguir con validaciones como en el login

      var validator = require('validator');

      validator.isEmail('foo@bar.com'); //=> true */

   let errors = {};

   function ValidateEmail(mail) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
         return (true)
      }
      return (false)
   }


   name.addEventListener("input", () => {
      if (name.value.length < 5) {
         nameError.innerHTML = ""
         name.classList.add("is-invalid");
         errors.name = "El nombre debe contener al menos 5 caracteres"
         nameError.innerHTML += errors.name;
         nameError.style.display = "block";
      } 
      if (name.value.length >= 5) {
         name.classList.remove("is-invalid");
         name.classList.add("is-valid");
         nameError.style.display = "none";
         nameError.innerHTML = "";
      }
   });

  description.addEventListener("input", () => {
      if (description.value.length < 20) {
         descriptionError.innerHTML = ""
         description.classList.add("is-invalid");
         errors.description = "La descripción debe contener al menos 20 caracteres"
         descriptionError.innerHTML += errors.description;
         descriptionError.style.display = "block";
      } else {
         description.classList.remove("is-invalid");
         description.classList.add("is-valid");
         descriptionError.style.display = "none";
         descriptionError.innerHTML = "";
      }
   });

   price.addEventListener("input", () => {
      if (price.value.length < 3) {
         price.classList.add("is-invalid");
      } else {
         price.classList.remove("is-invalid");
         price.classList.add("is-valid");
      }
   })

   dimensions.addEventListener("input", () => {
      if (dimensions.value.length < 3) {
         dimensions.classList.add("is-invalid");
      } else {
         dimensions.classList.remove("is-invalid");
         dimensions.classList.add("is-valid");
      }
   })

   image.addEventListener("input", () => {
      var _validFileExtensions = [".jpg", ".jpeg", ".gif", ".png"]
      function ValidateSingleInput(oInput) {
         if (oInput.type == "file") {
            var sFileName = oInput.value;
            if (sFileName.length > 0) {
               var blnValid = false;
               for (var j = 0; j < _validFileExtensions.length; j++) {
                  var sCurExtension = _validFileExtensions[j];
                  if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                     blnValid = true;
                     break;
                  }
               }
   
               if (!blnValid) {
                  /* alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", ")) */
                  oInput.value = "";
                  return false;
               }
            }
         }
         return true;
      }
      if (!ValidateSingleInput(image)) {
         imageError.innerHTML = ""
         image.classList.add("is-invalid");
         errors.image = "Debes ingresar un archivo con alguna de las siguientes extensiones permitidas: .jpg .jpeg .gif .png "
         imageError.innerHTML += errors.image;
         imageError.style.display = "block";
      } else {
         image.classList.remove("is-invalid");
         image.classList.add("is-valid");
         imageError.style.display = "none";
         imageError.innerHTML = "";
      }
   });

   image.addEventListener("change", () => {
      if (image.value.length == 0) {
         imageError.innerHTML = ""
         image.classList.add("is-invalid");
         errors.image = "Debes ingresar un archivo con alguna de las siguientes extensiones permitidas: .jpg .jpeg .gif .png "
         imageError.innerHTML += errors.image;
         imageError.style.display = "block";
      } else {
         image.classList.remove("is-invalid");
         image.classList.add("is-valid");
         imageError.style.display = "none";
         imageError.innerHTML = "";
      }
   });

}
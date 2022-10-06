

window.onload = function () {
   let firstname = document.querySelector('#firstname');
   let lastname = document.querySelector('#lastname');
   let email = document.querySelector('#email');
   let password = document.querySelector('#password');
   let avatar = document.querySelector('#avatar');

   let firstnameError = document.querySelector('.firstname-error');
   let lastnameError = document.querySelector('.lastname-error');
   let emailError = document.querySelector('.email-error');
   let passwordError = document.querySelector('.password-error');
   let avatarError = document.querySelector('.avatar-error');
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



   email.addEventListener("input", () => {
      if (!ValidateEmail(email)) {
         emailError.innerHTML = ""
         email.classList.add("is-invalid");
         errors.email = "Debes ingresar un email valido"
         emailError.innerHTML += errors.email;
         emailError.style.display = "block";
      } else {
         email.classList.remove("is-invalid");
         email.classList.add("is-valid");
         emailError.style.display = "none";
         emailError.innerHTML = "";
      }
   });

   firstname.addEventListener("input", () => {
      if (firstname.value.length < 2) {
         firstnameError.innerHTML = ""
         firstname.classList.add("is-invalid");
         errors.firstname = "Su nombre debe contener al menos 2 caracteres"
         firstnameError.innerHTML += errors.firstname;
         firstnameError.style.display = "block";
      } else {
         firstname.classList.remove("is-invalid");
         firstname.classList.add("is-valid");
         firstnameError.style.display = "none";
         firstnameError.innerHTML = "";
      }
   });

   lastname.addEventListener("input", () => {
      if (lastname.value.length < 2) {
         lastnameError.innerHTML = ""
         lastname.classList.add("is-invalid");
         errors.lastname = "Su apellido debe contener al menos 2 caracteres"
         lastnameError.innerHTML += errors.lastname;
         lastnameError.style.display = "block";
      } else {
         lastname.classList.remove("is-invalid");
         lastname.classList.add("is-valid");
         lastnameError.style.display = "none";
         lastnameError.innerHTML = "";
      }
   });

   password.addEventListener("input", () => {
      if (password.value.length < 8) {
         passwordError.innerHTML = ""
         password.classList.add("is-invalid");
         errors.password = "Debes ingresar una contraseña de al menos 8 caracteres, con numeros y letras."
         passwordError.innerHTML += errors.password;
         passwordError.style.display = "block";
      } else {
         password.classList.remove("is-invalid");
         password.classList.add("is-valid");
         passwordError.style.display = "none";
         passwordError.innerHTML = "";
      }
   });

   avatar.addEventListener("input", () => {
      var _validFileExtensions = [".jpg", ".gif", ".png", ".jpeg"]
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
      if (!ValidateSingleInput(avatar)) {
         avatarError.innerHTML = ""
         avatar.classList.add("is-invalid");
         errors.avatar = "Debes ingresar un archivo con alguna de las siguientes extensiones permitidas: .jpg .jpeg .gif .png "
         avatarError.innerHTML += errors.avatar;
         avatarError.style.display = "block";
      } else {
         avatar.classList.remove("is-invalid");
         avatar.classList.add("is-valid");
         avatarError.style.display = "none";
         avatarError.innerHTML = "";
      }
   });

/*    avatar.addEventListener("input", () => {
      if (avatar.value.length == 0) {
         avatarError.innerHTML = ""
         avatar.classList.add("is-invalid");
         errors.avatar = "Debes ingresar un imagen de perfil con extension permitida: .jpg .jpeg .gif .png"
         avatarError.innerHTML += errors.avatar;
         avatarError.style.display = "block";
      } else {
         avatar.classList.remove("is-invalid");
         avatar.classList.add("is-valid");
         avatarError.style.display = "none";
         avatarError.innerHTML = "";
      }
   }); */

}
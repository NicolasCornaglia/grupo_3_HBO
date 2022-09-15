window.onload = function () {
   let email = document.querySelector('#email')
   let password = document.querySelector('#password')
   let emailError = document.querySelector('.email-error');
   let passwordError = document.querySelector('.password-error')

   let errors = {};

   function ValidateEmail(mail) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
         return (true)
      }
      return (false)
   }

   email.addEventListener("blur", () => {
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

   password.addEventListener("input", () => {
      if (password.value == "") {
         passwordError.innerHTML = ""
         password.classList.add("is-invalid");
         errors.password = "Debes ingresar una contraseña"
         passwordError.innerHTML += errors.password;
         passwordError.style.display = "block";
      } else {
         password.classList.remove("is-invalid");
         password.classList.add("is-valid");
         passwordError.style.display = "none";
         passwordError.innerHTML = "";
      }
   });

   password.addEventListener("blur", () => {
      if (password.value == "") {
         passwordError.innerHTML = ""
         password.classList.add("is-invalid");
         errors.password = "Debes ingresar una contraseña"
         passwordError.innerHTML += errors.password;
         passwordError.style.display = "block";
      } else {
         password.classList.remove("is-invalid");
         password.classList.add("is-valid");
         passwordError.style.display = "none";
         passwordError.innerHTML = "";
      }
   });

}
window.onload = function() {

   let goToProfile = document.querySelector('.backToProfileButton')
   goToProfile.addEventListener('click', (e) => {
      e.preventDefault();
      location.href = `/u/profile`
   })
}
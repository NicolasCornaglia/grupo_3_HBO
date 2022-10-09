window.onload = function() {
   let logOut = document.querySelector('#logOut')
   
   logOut.addEventListener('click', () => {
      if (localStorage.carrito) {
         localStorage.removeItem("carrito");
      }
   })
      
}
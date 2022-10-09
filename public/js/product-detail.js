window.onload = function () {

   let cantidad = document.querySelector('#cuantity')
   let priceWithCuantity = document.querySelector('#priceWithCuantity')
   let productPrice = document.querySelector('#productPrice')
   let btnAgregarCarrito = document.querySelector('#agregar_carrito')

   cantidad.addEventListener("input", () => {
      priceWithCuantity.innerHTML = ""
      if (cantidad.value > 1) {
         priceWithCuantity.innerHTML = "Precio total para " + cantidad.value + " unidades: $ " + Number(productPrice.innerText) * cantidad.value
      } else if (cantidad.value == 1) {
         priceWithCuantity.innerHTML = "Precio total para " + cantidad.value + " unidad: $ " + productPrice.innerText
      } else {
         priceWithCuantity.innerHTML = "Precio para 1 unidad: $ " + productPrice.innerText
      }

      btnAgregarCarrito.addEventListener('click', (e) => {
         if (localStorage.carrito && cantidad.value>0) {
            let carrito = JSON.parse(localStorage.carrito)
   
            let index = carrito.findIndex(
               (prod) => (prod.id == e.target.dataset.id)
            );
   
            console.log("cantidad en carrito, index, cantidad:", carrito[index].quantity, index, cantidad.value)
   
            if (index !== -1) {
               carrito[index].quantity = Number(cantidad.value)
               localStorage.setItem('carrito', JSON.stringify(carrito))
            } else {
               carrito.push({ id: e.target.dataset.id, quantity: 1 })
            }
         } else {
            localStorage.setItem('carrito', JSON.stringify([{ id: e.target.dataset.id, quantity: 1 }]));
         }
   
      })

   });






}
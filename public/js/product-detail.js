window.onload = function () {

   let cantidad = document.querySelector('#cuantity')
   let priceWithCuantity = document.querySelector('#priceWithCuantity')
   let productPrice = document.querySelector('#productPrice')

   cantidad.addEventListener("input", () => {
      priceWithCuantity.innerHTML = ""
      if (cantidad.value > 1) {
         priceWithCuantity.innerHTML = "Precio total para "+ cantidad.value + " unidades: $ " + Number(productPrice.innerText)*cantidad.value
      } else if (cantidad.value == 1) {
         priceWithCuantity.innerHTML = "Precio total para "+ cantidad.value + " unidad: $ " + productPrice.innerText
      } else {
         priceWithCuantity.innerHTML = "Precio para 1 unidad: $ "+ productPrice.innerText
      }
   });


}
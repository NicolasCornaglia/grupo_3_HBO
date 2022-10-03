window.onload = function () {

   let cantidad = document.querySelector('#cuantity')
   let priceWithCuantity = document.querySelector('#priceWithCuantity')
   let applyButton = document.querySelector('#applyButton')
   let cancelButton = document.querySelector('#cancelButton')
   let productPrice = document.querySelector('#productPrice')

   applyButton.addEventListener("click", () => {
      priceWithCuantity.innerHTML = ""
      if (cantidad.value > 1) {
         priceWithCuantity.innerHTML = "Precio total para "+ cantidad.value + " unidades: $ " + Number(productPrice.innerText)*cantidad.value
      } else if (cantidad.value == 1) {
         priceWithCuantity.innerHTML = "Precio total para "+ cantidad.value + " unidad: $ " + productPrice.innerText
      } else {
         priceWithCuantity.innerHTML = "Precio para 1 unidad: $ "+ productPrice.innerText
      }
   });

   cancelButton.addEventListener("click", () => {
      let productPrice = document.querySelector('#productPrice')
      priceWithCuantity.innerHTML = "Precio para 1 unidad: $ "+ productPrice.innerText
   });

}
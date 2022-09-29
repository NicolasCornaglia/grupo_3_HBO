
  function setCarritoVacio() {
    cartRows.innerHTML = `
      <tr>     
          <td colspan="5"><div class="alert alert-warning my-2 text-center">No tienes products en el carrito</div></td>
      </tr>            
      `;
  }
  function vaciarCarrito() {
    localStorage.removeItem("carrito");
  }

  function calcularTotal(products) {
    return products.reduce(
      (acum, product) => (acum += product.price * product.quantity),
      0
    );
  }

  let cartRows = document.querySelector('.cartRows')

  if (localStorage.carrito) {
    carrito = JSON.parse(localStorage.carrito);

    carrito.forEach((item,index) => {
      fetch(`/p/api/productCartItem/${item.id}`)
        .then(res => {res.json()})
        .then(product => {
          console.log(product)
          cartRows.innerHTML += `
          <tr id="row${index}">
                <th scope="row">${index+1}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${item.quantity}</td>
                <td>${parseFloat(product.price * item.quantity,2).toFixed(2)}</td>
                <td><button class="btn btn-warning btn-sm" onClick=removeItem(${index})><i class="fas fa-eye"></i></button></td>
              </tr>
          `;
        });
    })
  }


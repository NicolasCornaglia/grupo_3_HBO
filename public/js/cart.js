
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

  function removeItem(index) {
    carrito.splice(index,1)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    location.reload();
  }

  function calcularTotal(products) {
    return products.reduce(
      (acum, product) => (acum += (Number(product.price.toFixed(2)) * Number(product.quantity))),
      0
    );
  }

  let cartRows = document.querySelector('.cartRows')
  let products = [];

  if (localStorage.carrito) {
    carrito = JSON.parse(localStorage.carrito);
    /* console.log(carrito) */
    carrito.forEach((item, index) => {
      fetch(`/p/api/productCartItem/${item.id}`)
        .then(res => res.json())
        .then(product => {
          if (product) {
            cartRows.innerHTML += `
            <tr id="row${index}">
                  <th scope="row">${index + 1}</th>
                  <td>${product.name}</td>
                  <td>$ ${product.price.toFixed(2)}</td>
                  <td>${item.quantity}</td>
                  <td>${parseFloat(product.price * item.quantity, 2).toFixed(2)}</td>
                  <td><button class="btn" onclick="removeItem(${index})">Eliminar Item</button></td>
                </tr>
            `;
            products.push({
              productId: product.id,
              nameame: product.name,
              price: product.price,
              quantity: item.quantity,
            });
          } else {
            carrito.splice(index,1)
            localStorage.setItem("carrito", JSON.stringify(carrito))
          }
        }).then( () => {
          document.querySelector('.totalAmount').innerText = `$ ${calcularTotal(products).toFixed(2)}`;
        })
    })
  }

  let checkoutCart = document.querySelector("#checkoutCart");

  checkoutCart.onsubmit = (e) => {
    e.preventDefault();
    const formData = {
      orderItems: products,
      paymentMethod: checkoutCart.paymentMethod.value,
      shippingMethod: checkoutCart.shippingMethod.value,
      total: calcularTotal(products),
    };
    //fetch()
    console.log(formData)

  }

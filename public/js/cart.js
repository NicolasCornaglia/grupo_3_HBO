
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

  function plusQuantity(i) {
    carrito = JSON.parse(localStorage.carrito);
    carrito[i].quantity += 1
    localStorage.setItem("carrito", JSON.stringify(carrito))
    location.reload();
  };

  function minusQuantity(i) {
    carrito = JSON.parse(localStorage.carrito);
    carrito[i].quantity -= 1
    if (carrito[i].quantity == 0) {
      removeItem(i)
    }
    localStorage.setItem("carrito", JSON.stringify(carrito))
    location.reload();
  };

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
    carrito.forEach((item, index) => {
      fetch(`/p/api/productCartItem/${item.id}`)
        .then(res => res.json())
        .then(product => {
          if (product) {
            cartRows.innerHTML += `
            <tr id="row${index}">
                  <th scope="row">${index + 1}</th>
                  <td>${product.name}</td>
                  <td>$${product.price.toFixed(2)}</td>
                  <td> <button class="btnPM" onclick="plusQuantity(${index})"> + </button> ${item.quantity}  <button class="btnPM" onclick="minusQuantity(${index})"> - </button> </td>
                  <td>${parseFloat(product.price * item.quantity, 2).toFixed(2)}</td>
                  <td><button class="btn" onclick="removeItem(${index})">Eliminar Item</button></td>
                </tr>
            `;
            products.push({
              productId: product.id,
              name: product.name,
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
    fetch(`/p/api/checkout`,{
      method: "POST",
      headers: {
        "content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r=>r.json())
      .then((res) => {
        if (res.ok) {
          vaciarCarrito()
          location.href = `/p/order/${res.order.id}`
        }
      });

    console.log(formData)
  }
 


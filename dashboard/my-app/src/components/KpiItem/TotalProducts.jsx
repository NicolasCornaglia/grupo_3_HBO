import React from "react";
import { useState, useEffect } from 'react'

function TotalProducts() {
   const [products, setProducts] = useState({});

	useEffect(() => {
		fetch(`http://localhost:3000/api/products`)
			.then(response => response.json())
			.then(data => {
				setProducts(data)
			})
			.catch(error => console.error(error));
	}, [])

   return (
      <>
         <div className="kpi-container">
            <h1>Total de Productos: {products.count}</h1>
         </div>
      </>
   )
}

export default TotalProducts;
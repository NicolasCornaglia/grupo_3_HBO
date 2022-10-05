import React from 'react';
import { useState, useEffect } from 'react'


function KpiLastProduct() {
   const [lastProduct, setLastProduct] = useState(null);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      fetch(`http://localhost:3001/api/products/`)
         .then(response => response.json())
         .then(data => {

            console.log("data api products:", data)
            if (data.products.length > 0) {
               setLastProduct(data.products[data.products.length-1])
            }
         })
         .catch(error => console.error(error))
         .finally(() => setIsLoading(false))
   }, [])

   if (isLoading) {
      return (
         <div className="kpi-container">
            <h1>Cargando Producto...</h1>
         </div>
      )
   }

   return (
      <div>
         <div className="kpi-container">
            {lastProduct ? 
            <>
               <h1>Ultimo producto creado: </h1> 
               <p>{lastProduct.name}</p>
            </>
            : 
            <h1>No se encontraron productos</h1>
            }
         </div>
      </div>
   )

}

export default KpiLastProduct
import React from 'react';
import { useState, useEffect } from 'react'


function KpiLastProduct() {
   const [lastProduct, setLastProduct] = useState({});

   useEffect(() => {
      fetch(`http://localhost:3001/api/products/`)
         .then(response => response.json())
         .then(data => {
            setLastProduct(data.products)
         })
         .catch(error => console.error(error));
   }, [])

   return (
      <div>
         <div className="kpi-container">
            <h1>Ultimo producto creado: {lastProduct.length} es una lista pero no me esta funcionando mostrar el ultimo elemento (KpiLastProduct)</h1>
         </div>
      </div>
   )

}

export default KpiLastProduct
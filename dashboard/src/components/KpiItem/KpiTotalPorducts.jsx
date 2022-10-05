import React from 'react';
import { useState, useEffect } from 'react'


function KpiTotalPorudcts() {
   const [products, setProducts] = useState({});

   useEffect(() => {
      fetch(`http://localhost:3001/api/products/`)
         .then(response => response.json())
         .then(data => {
            setProducts(data)
         })
         .catch(error => console.error(error));
   }, [])

   return (
      <div>
         <div className="kpi-container">
            <h1>Total de productos: {products.count}</h1>
         </div>
      </div>
   )

}

export default KpiTotalPorudcts
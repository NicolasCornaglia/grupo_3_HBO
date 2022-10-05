import React from 'react';
import { useState, useEffect } from 'react'


function KpiTotalCategories() {
   const [categories, setCategories] = useState({});

   useEffect(() => {
      fetch(`http://localhost:3001/api/products/categories`)
         .then(response => response.json())
         .then(data => {
            setCategories(data)
         })
         .catch(error => console.error(error));
   }, [])

   return (
      <div>
         <div className="kpi-container">
            <h1>Total de categorias: {categories.count}</h1>
         </div>
      </div>
   )

}

export default KpiTotalCategories
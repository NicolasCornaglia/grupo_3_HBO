import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/product-service"
import './Products.css'

function Products() {
   const [lastProduct, setLastProduct] = useState({})
   const [AllProducts, setAllProducts] = useState([])

   useEffect(() => {
      // LAST PRODUCT 
      getAllProducts().then(res => {
         setLastProduct(res.data.products[res.data.products.length-1])
      })
      // ALL PRODUCTS
      getAllProducts().then(res => {
         setAllProducts(res.data.products)
      })
      

   }, [])




   return (
      <div className="container">
         <div className="title"> Ultimo producto creado </div>
         <table className="styled-table">
            <thead>
               <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Detalle</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <th className="content" scope="row">
                     {lastProduct.id}
                  </th>
                  <td className="content">
                     {lastProduct.name}
                  </td>
                  <td className="content">
                     {lastProduct.description}
                  </td>
                  <td className="content">
                     {lastProduct.detail}
                     aca va la url a lo q devuelve la api del detalle o deberia ir la vista de detalle del rod
                  </td>
               </tr>
            </tbody>
         </table>   

         <span></span>

         <div className="title"> Listado de productos </div>
         <table className="styled-table">
         <thead>
               <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Detalle</th>
               </tr>
            </thead>
            <tbody>
               <>Aca irian las filas como en lo de arriba</>
            </tbody>
         </table>   





      </div>
   )
}

export default Products;
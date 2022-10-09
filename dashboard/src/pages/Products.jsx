import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/product-service"
import './Products.css'

function Products() {
   const [lastProduct, setLastProduct] = useState({})
   const [AllProducts, setAllProducts] = useState([])
   const [countByCategory, setCountByCategory] = useState([])

   useEffect(() => {
      // LAST PRODUCT 
      getAllProducts().then(res => {
         setLastProduct(res.data.products[res.data.products.length-1])
      })
      //PRODUCTS BY CATEGORY
      getAllProducts().then(res => {
         setCountByCategory(res.data.countByCategory)
      })
      // ALL PRODUCTS
      getAllProducts().then(res => {
         setAllProducts(res.data.products)
      })
      
   }, [])



   return (
      <div className="container">
         <div className="title"> Último producto creado </div>
         <table className="styled-table">
            <thead>
               <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
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
                  <td className="content detail">
                     <a href={lastProduct.detail}> Detalle del producto </a>
                  </td>
               </tr>
            </tbody>
         </table>   

         <div className="title"> Cantidad de productos por categoría </div>
         <table className="styled-table">
         <thead>
               <tr>
                  <th>Id</th>
                  <th>Categoría</th>
                  <th>Cantidad de productos</th>
               </tr>
            </thead>
            <tbody>
               {countByCategory.map(category => {
                  return (
                     <tr>
                     <th className="content" scope="row">
                        {category.id}
                     </th>
                     <td className="content">
                        {category.name}
                     </td>
                     <td className="content amount">
                        {category.productsInThisCategory}
                     </td>
                  </tr>
                  )
               })}
            </tbody>
         </table>   



         <div className="title"> Listado de productos </div>
         <table className="styled-table">
         <thead>
               <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Detalle</th>
               </tr>
            </thead>
            <tbody>
               {AllProducts.map(product => {
                  return (
                     <tr>
                     <th className="content" scope="row">
                        {product.id}
                     </th>
                     <td className="content">
                        {product.name}
                     </td>
                     <td className="content">
                        {product.description}
                     </td>
                     <td className="content detail">
                        <a href={product.detail}> Detalle del producto </a>
                     </td>
                  </tr>
                  )
               })}
            </tbody>
         </table>   
      </div>
   )
}

export default Products;
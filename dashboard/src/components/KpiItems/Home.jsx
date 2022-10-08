import React, { useEffect, useState } from "react";

import KpiItem from '../KpiItem/KpiItem';
import { getAllProducts, getAllProductsSold } from "../../services/product-service";
import { getAllUsers } from "../../services/user-service"
import { getAllCategories } from "../../services/category-service"

function Home() {
  const [kpiTotalProducts, setkpiTotalProducts] = useState(0)
  const [kpiTotalUsers, setkpiTotalUser] = useState(0)
  const [kpiTotalCategories, setkpiTotalCategories] = useState(0)
  const [kpiTotalProductsSold, setkpiTotalProductsSold] = useState(0)

  useEffect(() => {
    //KPI PRODUCTS AMOUNT
    getAllProducts().then(res => {
      setkpiTotalProducts(res.data.count)
    })

    //KPI USERS AMOUNT
    getAllUsers().then(res => {
      setkpiTotalUser(res.data.count)
    })

    //KPI CATEGORIES AMOUNT
    getAllCategories().then(res => {
      setkpiTotalCategories(res.data.count)
    })

    //KPI CATEGORIES AMOUNT
    getAllProductsSold().then(res => {
      setkpiTotalProductsSold(res.data.amount)
    })

  }, [])

  console.log(kpiTotalProductsSold)

  return (<>
    <div className='grid-col'>
      <div className='grid-row'>
        <KpiItem titulo="Cantidad de productos: " valor={kpiTotalProducts} />
        <KpiItem titulo="Cantidad de usarios: " valor={kpiTotalUsers} />
        <KpiItem titulo="Cantidad de categorias: " valor={kpiTotalCategories} />
        <KpiItem titulo="Cantidad de productos vendidos: " valor={kpiTotalProductsSold}/>
       {/*<KpiItem titulo="Cantidad de productos: " valor={KpiPorduct}/>
       <KpiItem titulo="Cantidad de productos: " valor={KpiPorduct}/>
       <KpiItem titulo="Cantidad de productos: " valor={KpiPorduct}/> */}
      </div>
    </div>
  </>
  )
}

export default Home;
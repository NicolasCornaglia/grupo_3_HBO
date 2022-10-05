import React from "react";
import { Routes, Route} from 'react-router-dom';
import KpiItem from '../KpiItem/KpiItem';
import KpiTotalCategories from "../KpiItem/KpiTotalCategories";
import KpiTotalPorudcts from "../KpiItem/KpiTotalPorducts";
import KpiTotalUsers from "../KpiItem/KpiTotalUsers";
import KpiLastProduct from "../KpiItem/KpiLastProduct";


function KpiItems() {
    return (
      <Routes>
        <Route path="/" element={
            <div className='grid-col'>
              <div className='grid-row'>
                <KpiTotalPorudcts />
                <KpiTotalUsers />
                <KpiTotalCategories />
                <KpiLastProduct />
                <KpiItem />
                <KpiItem />
              </div>
            </div>
          }>

        </Route>
      </Routes>
    )
}

export default KpiItems;
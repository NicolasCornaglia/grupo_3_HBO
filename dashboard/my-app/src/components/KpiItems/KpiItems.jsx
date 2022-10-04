import KpiItem from '../KpiItem/KpiItem';
import { Routes, Route } from 'react-router-dom';
import TotalProducts from '../KpiItem/TotalProducts';

function KpiItems() {
  return (
    <div>
      <Routes>
        <Route path="/" element=
          {

            <div className='grid-col'>
              <div className='grid-row'>

                <TotalProducts />
                <KpiItem />
                <KpiItem />
                <KpiItem />
                <KpiItem />
                <KpiItem />
              </div>
            </div>
          }>

        </Route>
      </Routes>
    </div>
  )

}

export default KpiItems

import './App.css';
import KpiItem from './components/KpiItem/KpiItem';
import Users from './pages/Users'
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<Users />}>
        </Route>
      </Routes>

      <Routes>
        <Route path="/" element={
          
            <div className='grid-col'>
              <div className='grid-row'>
                <KpiItem />
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
  );
}

export default App;

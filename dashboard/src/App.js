
import './App.css';
import KpiItems from './components/KpiItems/KpiItems';
import Users from './pages/Users'
import { Routes, Route} from 'react-router-dom';
import Products from './pages/Products'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<Users />}>
        </Route>
      </Routes>
      <Routes>
        <Route path="/products" element={<Products />}>
        </Route>
      </Routes>

      <KpiItems/>

    </div>
  );
}

export default App;

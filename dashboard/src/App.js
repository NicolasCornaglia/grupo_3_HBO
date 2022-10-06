
import './App.css';
import Home from './components/KpiItems/Home';
import Users from './pages/Users'
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/users" element={<Users />}>
        </Route>
        <Route path="/products" element={<Products />}>
        </Route>
      </Routes>

    </div>
  );
}

export default App;


import './App.css';
import Users from './pages/Users'
import { Routes, Route, Link } from 'react-router-dom';
import KpiItems from './components/KpiItems/KpiItems';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<Users />}>
        </Route>
      </Routes>

      <Routes>
        <Route path="/" element={<KpiItems />}>
        </Route>
      </Routes>
    

    </div>
  );
}

export default App;

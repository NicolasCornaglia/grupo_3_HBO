
import './App.css';
import KpiItems from './components/KpiItems/KpiItems';
import Users from './pages/Users'
import { Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<Users />}>
        </Route>
      </Routes>

      <KpiItems/>

    </div>
  );
}

export default App;

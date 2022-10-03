import logo from './logo.svg';
import './App.css';
import Sidebar from './components/SideBar'
import KpiItem from './components/KpiItem/KpiItem';

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
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
    </div>
  );
}

export default App;

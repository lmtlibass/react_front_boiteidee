import './App.css';

import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import IdeeApprouve from './pages/IdeeApprouve'
import Listeidee from './pages/Listeidee'
import Addidee from './pages/Addidee'
import Stats from './pages/Stats'

function App(){
  return (
    <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<Addidee />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/add" element={<Addidee />} />
          <Route path="/approuve" element={<IdeeApprouve />} /> 
          <Route path="/liste" element={<Listeidee />} /> 
        </Routes>
    </div>
  );
}

export default App;

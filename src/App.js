import './App.css';

import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IdeeApprouve from './pages/IdeeApprouve'
import Listeidee from './pages/Listeidee'
import Addidee from './pages/Addidee'

function App(){
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Routes>
          <Route path="/add" element={<Addidee />} /> 
        </Routes>

        <Routes>
          <Route path="/approuve" element={<IdeeApprouve />} /> 
        </Routes>

        <Routes>
          <Route path="/liste" element={<Listeidee />} /> 
        </Routes>

      </Router> 
    </div>
  );
}

export default App;

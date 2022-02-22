import './App.css';

import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ideeapprouve from './Ideeapprouve'
import Listeidee from './Listeidee'
import Addidee from './Addidee'

function App(){
  return (
    <div className="App">
      <Router>
        <Header />
          
          
            <Routes>
              <Route path="/add" element={<Addidee />} /> 
            </Routes>

            <Routes>
              <Route path="/approuve" element={<Ideeapprouve />} /> 
            </Routes>

            <Routes>
              <Route path="/liste" element={<Listeidee />} /> 
            </Routes>

      </Router> 
    </div>
  );
}

export default App;

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Eateasy from './pages/eateasy';
import Home from './pages/home';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eateasy" element={<Eateasy />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

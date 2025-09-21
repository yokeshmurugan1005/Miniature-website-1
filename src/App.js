import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Price from './Pages/Price';
import AboutContact from './Pages/About';
import logo6 from './Assets/logo6.png';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">
            <img src={logo6} alt="Logo" />
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/price">Pricing</Link></li>
            <li><Link to="/about-contact">About & Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/price" element={<Price />} />
          <Route path="/about-contact" element={<AboutContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

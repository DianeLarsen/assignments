import React from 'react';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';

function App() {
  
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Main />
      <Footer />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/services" element={<Services />}/>
    </Routes>
    </div>
  );
}

export default App;

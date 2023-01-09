import React from "react";

import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Checkout from "./components/Checkout";
import Products from "./components/Services";
import ProductDetails from "./components/ProductDetails";
import styled from "styled-components";

function App() {
  const StyledLink = styled(Link)`
  color: aqua;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;
  return (
    <div className="App">
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/services">Services</StyledLink>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
      <footer>
        <img
          loading="lazy"
          className="facebook"
          src="https://www.beaconplumbing.net/wp-content/uploads/2019/07/Seattle.png"
          alt="Facebook logo"
        />
         <img
          loading="lazy"
          className="facebook"
          src="https://www.beaconplumbing.net/wp-content/uploads/2019/07/Seattle-Plumber.png"
          alt="Facebook logo"
        />
         <img
          loading="lazy"
          className="facebook"
          src="https://www.beaconplumbing.net/wp-content/uploads/2019/07/Seattle-Plumbers.png"
          alt="Facebook logo"
        />
         <img
          loading="lazy"
          className="facebook"
          src="https://www.beaconplumbing.net/wp-content/uploads/2019/07/Plumber-Seattle.png"
          alt="Facebook logo"
        />
        <p>A Seattle Plumbing Company </p>
      </footer>
    </div>
  );
}

export default App;

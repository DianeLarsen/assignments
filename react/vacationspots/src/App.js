import React from 'react';
import './App.css';
import Spot from './Spot.js';
import Navbar from "./Navbar.js"
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
        <Spot
            key={item.name}
            {...item}
            
        />
    )
})       
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        
      </header>
      <section className="cards-list">
                {cards}
      </section>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import data from "./data.js";
import Friend from "./components/Friend";


import Header from "./components/Header";

function App() {
  const friends = data.map((item) => {
    return <Friend key={item.name} {...item} />;
  });

  return (
    <div className="App">
      <Header />
     
      <section className="cards-list">{friends}</section>
    </div>
  );
}

export default App;

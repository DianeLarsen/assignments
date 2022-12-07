import React, { useState } from "react";
import "./App.css";
// import Color from './Color';

function App() {
  const [colors, setColors] = useState(["white", "white", "white", "white"]);
  //if clicked turns all black or white depending on if 
  function setBlack() {
  
      if (colors[0] !== "black") {
        setColors(["black", "black", "black", "black"]);
      } else if (colors[0] !== "white") {
        setColors(["white", "white", "white", "white"]);
      }
    
  }
  //if clicked turns top 2 purple
  function setPurple() {
    const changePurple = colors.map((c, i) => {
      if (i < 2) {
        // chan
        return "purple";
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setColors(changePurple);
  }
  //doesnt work
  function setBlueRight() {
    setColors((prevColors) => [...prevColors, "blue"]);
  }
  function setBlueLeft() {
    setColors((prevColors) => (prevColors[2] = "blue"));
  }

  return (
    <div className="App">
      <div className="colorSquares">
        <div
          className="coloredSquareOne"
          style={{ backgroundColor: colors[0] }}
        />
        <div
          className="coloredSquareOne"
          style={{ backgroundColor: colors[1] }}
        />
        <div
          className="coloredSquareOne"
          style={{ backgroundColor: colors[2] }}
        />
        <div
          className="coloredSquareOne"
          style={{ backgroundColor: colors[3] }}
        />
      </div>
      <div>
        <button onClick={setBlack}>DJ Small</button>
        <button onClick={setPurple}>Party DJ </button>
        <button onClick={setBlueLeft}>Left Blue</button>
        <button onClick={setBlueRight}>Right Blue</button>
        <button>Big DJ one</button>
        <button>Big DJ two</button>
        <button>Big DJ three</button>
        <button>Big DJ four</button>
        <button>Make Noise</button>
      </div>
    </div>
  );
}

export default App;

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
        // changes only first 2 indexes
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
    const changeBlue = colors.map((c, i) => {
      if (i === 3) {
        // changes only first 2 indexes
        return "blue";
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setColors(changeBlue);
  }
  function setBlueLeft() {
    const changeBlue = colors.map((c, i) => {
      if (i === 2) {
        // changes only first 2 indexes
        return "blue";
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setColors(changeBlue);
  }
  function setOne() {
    const changeBlue = colors.map((c, i) => {
      if (i === 0) {
        // changes only first 2 indexes
        return "green";
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setColors(changeBlue);
  }function setTwo() {
    const changeBlue = colors.map((c, i) => {
      if (i === 1) {
        // changes only first 2 indexes
        return "pink";
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setColors(changeBlue);
  }
  function setThree() {
    const changeBlue = colors.map((c, i) => {
      if (i === 2) {
        // changes only first 2 indexes
        return "orange";
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setColors(changeBlue);
  }
  function setFour() {
    const changeBlue = colors.map((c, i) => {
      if (i === 3) {
        // changes only first 2 indexes
        return "red";
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setColors(changeBlue);
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
        <button onClick={setOne}>Big DJ one</button>
        <button onClick={setTwo}>Big DJ two</button>
        <button onClick={setThree}>Big DJ three</button>
        <button onClick={setFour}>Big DJ four</button>
        <button onClick={setBlueRight}>Make Noise</button>
      </div>
    </div>
  );
}

export default App;

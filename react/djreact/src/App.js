import React, { useState } from "react";
import "./App.css";
// import Color from './Color';

function App() {
  const [colors, setColors] = useState(["white", "white", "white", "white"]);
  //need to make each turn black or white depending, if its not black or white it turns black or white but if its white
  function setBlack() {
    const colorChange = colors.map((c) => {
      if (c !== "white" && c !== "black") {
        return "black";
      } else if (c === "black") {
        return "white";
      } else if (c === "white") {
        return "black";
      }
    });
    setColors(colorChange);
  }

  //if clicked turns top 2 purple
  function setPurple() {
    const changePurple = colors.map((c, i) => {
      if (i < 2) {
        // changes only first 2 indexes
        return "purple";
      } else {
        return c;
      }
    });
    setColors(changePurple);
  }

  function setBlueRight() {
    const changeBlue = colors.map((c, i) => {
      if (i === 3) {
        return "blue";
      } else {
        return c;
      }
    });
    setColors(changeBlue);
  }
  function setBlueLeft() {
    const changeBlue = colors.map((c, i) => {
      if (i === 2) {
        return "blue";
      } else {
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
        return c;
      }
    });
    setColors(changeBlue);
  }
  function setTwo() {
    const changeBlue = colors.map((c, i) => {
      if (i === 1) {
        // changes only first 2 indexes
        return "pink";
      } else {
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

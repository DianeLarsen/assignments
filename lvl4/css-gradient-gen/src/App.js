import "./App.css";
import Display from "./Display";
import Options from "./Options";
import React from "react";


function App() {
  const [input1, setInput1] = React.useState("#ffffff")
const [input2, setInput2] = React.useState("#ff69b4")
const [pct, setPct] = React.useState("50")
const [colors, setColors] = React.useState([input1, input2])
 
  return (
    <div className="App">
      <header>CSS Gradient Code Generator</header>
      <div className="color-picker">
        <Display setColor1={setInput1} setColor2={setInput2} setPct={setPct} color1={input1} color2={input2} pct={pct} colors={colors} setColors={setColors}/>
        <Options setColor1={setInput1} setColor2={setInput2} setPct={setPct} color1={input1} color2={input2} pct={pct} colors={colors} setColors={setColors}/>
      </div>
     
    </div>
  );
}

export default App;

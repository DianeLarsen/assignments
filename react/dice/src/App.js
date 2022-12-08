import './App.css';
import DiceBox from "./component/DiceBox"

// const dice = DiceBox.map(die=> {return <DiceBox key={die.name} {...die} />})
function App() {
  return (
    <div className="App">
      <div id="placeholder">
          <DiceBox />
          {/* {dice} */}
      </div>
      {/* <button id="button" onClick={DiceBox}>Roll Dice</button> */}
    </div>
  );
}

export default App;

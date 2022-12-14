import './App.css';
import React from "react"
import Name from "./Name"

function App() {
  const {name, setName} = []
  const updateList = name.map(setName(prevName => {return {...prevName, newName}}))
  
  return (
    <div className="App">
      {/* user will type into input box */}
      <input></input>
      {/* {data will show up in h1} */}
        <h1>Test: {name}</h1>
        <button></button> 
        {/* when button is clicked an li will apear below with the name in it and each name will be added to the list  */}
        <ol>
          {name}<Name />
        </ol>
    </div>
  );
}

export default App;

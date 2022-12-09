import { useState } from "react";
import Dice1 from "../assets/1.png";
import Dice2 from "../assets/2.png";
import Dice3 from "../assets/3.png";
import Dice4 from "../assets/4.png";
import Dice5 from "../assets/5.png";
import Dice6 from "../assets/6.png";

export default function DiceBox() {
  const [numbers, setNumbers] = useState([null, null, null, null, null]);

  window.onload = createNew;

  function createNew() {
    const numChange = numbers.map((num) => {
      num = Math.floor(Math.random() * 6) + 1;
      if (num === 1) {
        num = Dice1;
      } else if (num === 2) {
        num = Dice2;
      } else if (num === 3) {
        num = Dice3;
      } else if (num === 4) {
        num = Dice4;
      } else if (num === 5) {
        num = Dice5;
      } else if (num === 6) {
        num = Dice6;
      }
      return num;
    });

    setNumbers(numChange);
  }
  var btn = document.getElementById("btn");
  function changeTextBtn() {
    if (btn.innerHTML === "Roll to Start") {
      btn.innerHTML = "2 Rolls left";
    } else if (btn.innerHTML === "2 Rolls left") {
      btn.innerHTML = "1 Roll left";
    } else if (btn.innerHTML === "1 Roll left") {
      btn.innerHTML = "Reset to play again";
    }
  }
  function onBtnClick() {
    createNew();
    changeTextBtn();
  }

  
  function selectDie(event) {
     const id = event.target.id;
    let toggle = document.getElementById(id)
    if (toggle.style.borderColor === "rgb(0, 0, 255)"){
        toggle.style.borderColor = "transparent";
        
     } else {
        toggle.style.border = "2px solid #0000FF";
    }
}
  
  return (
    <div className="results">
      <div className="disNum">
        {numbers.map((item, index) => (
          <img
            key={index}
            src={item}
            id={index}
            className="die"
            alt="Die"
            onClick={selectDie}
          />
        ))}
      </div>
      <button id="btn" onClick={onBtnClick}>
        Roll to Start
      </button>
    </div>
  );
}

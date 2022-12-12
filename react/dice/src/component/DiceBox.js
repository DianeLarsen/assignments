import { useState } from "react";
import Dice1 from "../assets/1.png";
import Dice2 from "../assets/2.png";
import Dice3 from "../assets/3.png";
import Dice4 from "../assets/4.png";
import Dice5 from "../assets/5.png";
import Dice6 from "../assets/6.png";
import DiceNull from "./null.png";
import Die from "./Die";

export default function DiceBox() {
  const [numbers, setNumbers] = useState([
    { id: 0, dice: DiceNull, lockStatus: false },
    { id: 1, dice: DiceNull, lockStatus: false },
    { id: 2, dice: DiceNull, lockStatus: false },
    { id: 3, dice: DiceNull, lockStatus: false },
    { id: 4, dice: DiceNull, lockStatus: false },
  ]);

  window.onload = createNew;

  function createNew() {
    const numChange = numbers.map((num) => {
      let roll = Math.floor(Math.random() * 6) + 1;

      if (num.lockStatus === true) {
        return num;
      } else {
        if (roll === 1) {
          num.dice = Dice1;
        } else if (roll === 2) {
          num.dice = Dice2;
        } else if (roll === 3) {
          num.dice = Dice3;
        } else if (roll === 4) {
          num.dice = Dice4;
        } else if (roll === 5) {
          num.dice = Dice5;
        } else if (roll === 6) {
          num.dice = Dice6;
        }
        
        return num;
      }
    });

    setNumbers(numChange);
  }

  var btn = document.getElementById("btn");
  function changeTextBtn() {
    if (btn.innerHTML === "Roll to Start") {
      btn.innerHTML = "2 Rolls left";
      createNew();
    } else if (btn.innerHTML === "2 Rolls left") {
      btn.innerHTML = "1 Roll left";
      createNew();
    } else if (btn.innerHTML === "1 Roll left") {
      btn.innerHTML = "Reset to play again";
      createNew();
    } else if (btn.innerHTML === "Reset to play again") {
      btn.innerHTML = "Roll to Start";
      clearSelection();
    }
  }
  function clearSelection() {
    const clearDice = numbers.map(
      (item) => {
        return { ...item, dice: DiceNull, lockStatus: false };
      }
   
    );
    setNumbers(clearDice);
  }
  function toggle(id) {
    setNumbers((prevNumbers) => {
      return prevNumbers.map((number)=>{
        return number.id === id ? {...number, lockStatus: !number.lockStatus} : number
      })
      
    });
  }

  const die = numbers.map((item) => (
    <Die
      key={item.id}
      lockStatus={item.lockStatus}
      imgDice={item.dice}
      toggle={toggle}
      id={item.id}
    />
  ));

  return (
    <div className="results">
      <div className="disNum">{die}</div>

      <button id="btn" onClick={changeTextBtn}>
        Roll to Start
      </button>
    </div>
  );
}

import { useState } from "react";
import Dice1 from "../assets/1.png";
import Dice2 from "../assets/2.png";
import Dice3 from "../assets/3.png";
import Dice4 from "../assets/4.png";
import Dice5 from "../assets/5.png";
import Dice6 from "../assets/6.png";

export default function DiceBox() {
  const [numbers, setNumbers] = useState([
    { key: 0, dice: null, lockStatus: false },
    { key: 1, dice: null, lockStatus: false },
    { key: 2, dice: null, lockStatus: false },
    { key: 3, dice: null, lockStatus: false },
    { key: 4, dice: null, lockStatus: false },
  ]);

  window.onload = createNew;

  function createNew() {
    const numChange = numbers.map((num) => {
      let roll = Math.floor(Math.random() * 6) + 1;
      // console.log("Lock Status:  "+ JSON.stringify(num.lockStatus))

      console.log("Lock Status:  " + JSON.stringify(num.lockStatus));
      let toggle = document.getElementById(num.key);
      if (
        toggle.style.borderColor === "rgb(0, 0, 255)" 
      ) {
        num.lockStatus = true
        
      } else {
        num.lockStatus = false
      }
      if (num.lockStatus === true) {
        return num
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
    //console.log("check numChange:  " + JSON.stringify(numChange))
  
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
    } else if (btn.innerHTML = "Reset to play again"){
       
        for (let i = 0; i < 5; i++) {
          let toggle = document.getElementById(i);
          toggle.style.borderColor = "transparent";
       }
       btn.innerHTML = "Roll to Start";
    }
  }
  function onBtnClick() {
    createNew();
    changeTextBtn();
  }

  function selectDie(event) {
  
    const id = event.target.id;
    let toggle = document.getElementById(id);
    if (toggle.style.borderColor === "rgb(0, 0, 255)") {
      toggle.style.borderColor = "transparent";
      
    } else {
      toggle.style.border = "2px solid #0000FF";
    }
    
  
    

  }



  console.log("Lock Status 0:  "+ JSON.stringify(numbers[0].lockStatus))
  console.log("Lock Status 1:  "+ JSON.stringify(numbers[1].lockStatus))
  console.log("Lock Status 2:  "+ JSON.stringify(numbers[2].lockStatus))
  console.log("Lock Status 3:  "+ JSON.stringify(numbers[3].lockStatus))
  console.log("Lock Status 4:  "+ JSON.stringify(numbers[4].lockStatus))
  //console.log("Dice results: "+ JSON.stringify(numbers[0].dice))
//
  return (
    <div className="results">
      <div className="disNum">
        {numbers.map((item, index) => (
          <img
            key={index}
            src={item.dice}
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

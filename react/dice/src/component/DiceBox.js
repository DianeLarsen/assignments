import { useState } from "react";

export default function DiceBox() {
  const [numbers, setNumbers] = useState([null, null, null, null, null]);

  function createNew() {
    const numChange = numbers.map((num) => {
      num = Math.floor(Math.random() * 6) + 1;

      return num;
    });
    console.log(numChange);
    setNumbers(numChange);
  }
  return (
    <div className="disNum">
      <ul>
        {numbers.map((item, index) => (
          <li key={index}> {item}</li>
        ))}
      </ul>
      <button onClick={createNew}>Add Item</button>
    </div>
  );
}

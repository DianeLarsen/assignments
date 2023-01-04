import React from "react";

export default function Options(props) {

  const handleChange1 = (event) => {
    // 👇 Get input value from "event"
    props.setColor1(event.target.value)
   
  };
  const handleChange2 = (event) => {
    // 👇 Get input value from "event"
    props.setColor2(event.target.value)
    
  };
  const handleChangePct = (event) => {
    // 👇 Get input value from "event"
    props.setPct(event.target.value)
  };

  return (
    <div className="options-box">
      <ul>
        <li>Color 1<span>{props.color1}</span>
        <input type="color" id="input1" name="color" value={props.color1}  onInput={handleChange1} /></li>
        
        <li>Color 2<span>{props.color2}</span>
        <input type="color" id="input2" name="color" value={props.color2} onInput={handleChange2}/></li> 
      </ul>
      <input className="angle-input" placeholder="50" value={props.pct} onChange={handleChangePct}/>
    </div>
  );
}

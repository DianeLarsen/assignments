import React from "react";

export default function Display(props) {
  let background1 = `background:linear-gradient(${props.pct}deg, ${props.colors})\n-moz-background:linear-gradient(${props.pct}deg, ${props.colors} )\n-webkit:linear-gradient(${props.pct}deg, ${props.colors})`;
  function auto_grow() {
    let textArea = document.querySelector("#autoresizing")
    console.log(textArea)
    if(textArea){
    console.log(textArea)
    }
}

let scrollHeight = "20px"
  return (
    <div className="display-box">
      <div
        className="color-box"
        style={{
          background: `linear-gradient(${props.pct}deg, ${props.colors})`,
        }}
      ></div>
      
        <textarea readOnly row={5} onInput={auto_grow} style={{height: {scrollHeight}}}id="autoresizing" value={background1}></textarea>
       
      
    </div>
  );
}

import React from "react"

export default function Display(props){

let background = `background:linear-gradient(${props.pct}deg,${props.color1}, ${props.color2})\n`+`-moz-background:linear-gradient(${props.pct}deg, ${props.color1}, ${props.color2} )\n`+ `-webkit:linear-gradient(${props.pct}deg, ${props.color1}, ${props.color2})`

    return(
        <div className="display-box">
            <div className="color-box" style={{background: `linear-gradient(${props.pct}, ${props.color1}, ${props.color2})`}}></div>
            <textarea readOnly rows={3} value={background}></textarea> 
        </div>
    )
}

// setInput1={setInput1} setInput2={setInput2} setPct={setPct} color1={input1} color2={input2} pct={pct}/>
import React from "react"


export default function Display(props){

let background1 = `background:linear-gradient(${props.pct}deg, ${props.color1}, ${props.color2})\n-moz-background:linear-gradient(${props.pct}deg, ${props.color1}, ${props.color2} )\n-webkit:linear-gradient(${props.pct}deg, ${props.color1}, ${props.color2})`

    return(
        <div className="display-box">
            <div className="color-box" style={{background: `linear-gradient(${props.pct}deg, ${props.color1}, ${props.color2})`}}></div>
            <textarea readOnly rows={3} value={background1}></textarea> 
        </div>
    )
}


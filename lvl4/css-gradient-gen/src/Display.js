import React from "react"


export default function Display(props){

let background1 = `background:linear-gradient(${props.pct}deg, ${props.colors})\n-moz-background:linear-gradient(${props.pct}deg, ${props.colors} )\n-webkit:linear-gradient(${props.pct}deg, ${props.colors})`

    return(
        <div className="display-box">
            <div className="color-box" style={{background: `linear-gradient(${props.pct}deg, ${props.colors})`}}></div>
            <textarea readOnly rows={3} value={background1}></textarea> 
        </div>
    )
}


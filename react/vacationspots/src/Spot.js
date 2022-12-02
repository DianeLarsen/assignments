import React from "react"

export default function Card(props) {
    const bucks = props.price;
    let dollarSign = "$";
    if (bucks < 500){
        dollarSign = "$"
    } else if (bucks > 1000){
        dollarSign = "$$$"
    } else {
        dollarSign = "$$"
    }
    return (
        <div className="card">
                <div className={`spot--season ${props.timeToGo}`}>
                    <h4 className="text place">{props.place + "   /"}</h4>
                    
                    <h4 className="text price">{dollarSign + " " +props.price + "   /"}</h4>
                    <h4 className="text time">{props.timeToGo}</h4>
                </div>
                <img src={props.imgUrl} alt="place" className="card--image" />
         
        </div>
    )
}



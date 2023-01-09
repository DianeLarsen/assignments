import React from "react";
import {AxioContext} from "./axioContext"

export default function Card(props) {
    const {handleDelete} = React.useContext(AxioContext)
//console.log(props[0].id)
  return (
    <div className="card-container">
      <h1>{props.title}</h1>
      <h6>{props.description}</h6>
      <img src={props.imgUrl} alt="none" />

      <span className="delete-btn" onClick={()=> handleDelete(props.id)}>&times;</span>
    </div>
  );
}

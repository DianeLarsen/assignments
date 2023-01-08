import React from "react";


export default function Card(props) {

  return (
    <div className="card-container">
      <h1>{props.title}</h1>
      <h6>{props.description}</h6>
      <img src={props.imgUrl} alt="none" />
    </div>
  );
}

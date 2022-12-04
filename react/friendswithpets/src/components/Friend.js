import React from "react";
import Pet from "./Pet"
import Icon from "./Icons"

export default function Friend({name, age, pets}) {
  let pet = pets.map((pet, i) => <Pet key={i}{...pet}/>)
  return (
    <div className="friendInfo">
      
      <h1> Name: {name} /  Age: {age} </h1>
      
      <h3>Pets: </h3>
      {pet}
      <Icon />
    </div>
  );
}

import React from "react";

export default function Friend(props) {
  return (
    <div className="friendInfo">
      <h1> {props.name} </h1>
      <h2> {props.age} </h2>
    </div>
  );
}

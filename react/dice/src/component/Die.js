import React from "react";

export default function Die(props) {
    
  const styles = {
    border: props.lockStatus ? "2px solid #0000FF" : "transparent",
  };

  return (
    <img
      style={styles}
      src={props.imgDice}
      onClick={() => props.toggle(props.id)}
      className="die"
      alt="Die"
    ></img>
  );
}

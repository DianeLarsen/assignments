import React from "react";
import Color from "./Color";

export default function Options(props) {
  const handleChange1 = (event) => {
    // 👇 Get input value from "event"
    props.setColor1(event.target.value);
  };
  const handleChange2 = (event) => {
    // 👇 Get input value from "event"
    props.setColor2(event.target.value);
  };
  const handleChangePct = (event) => {
    // 👇 Get input value from "event"
    props.setPct(event.target.value);
  };

  return (
    <div className="options-box">
      <div className="color-choice">
        <h3 className="label">Color 1</h3>
        <span className="color-text">{props.color1}</span>
        <input
          type="color"
          id="input1"
          className="color-palette"
          name="color"
          value={props.color1}
          onInput={handleChange1}
        />
      </div>
      <div className="color-choice">
        <h3 className="label">Color 2</h3>
        <span className="color-text">{props.color2}</span>
        <input
          type="color"
          id="input2"
          className="color-palette"
          name="color"
          value={props.color2}
          onInput={handleChange2}
        />
      </div>
      <Color
        handleChange2={handleChange2}
        color1={props.color1}
        color2={props.color2}
        colors={props.colors}
        setColors={props.setColors}
      />
      <div className="color-choice" id="angle-input">
        <label>Enter angle degree</label>
        <input
          type="number"
          id="pct-input"
          className="angle-input"
          placeholder="50"
          value={props.pct}
          onChange={handleChangePct}
        />
      </div>
    </div>
  );
}

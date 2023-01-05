import React from "react";

export default function Color(props) {
  function handleChange(event) {
    let items = [...props.colors];
    let item = items[event.target.name];
    item = event.target.value;
    console.log(item);
    items[event.target.name] = item;
    console.log(items);
    props.setColors(items);
  }
  function addColor() {
    props.setColors((prevcolor) => [...prevcolor, "#ffffff"]);
  }
  function removeColor(index) {
    const items = props.colors.filter((_, i) => i !== index);

    // delete items[event.target.name]
    // console.log(items)
    props.setColors(items);
  }
  return (
    <>
      {props.colors.map((colors, i) => {
        // console.log(colors, i)
        if (i > 1) {
          return (
            <div key={i} className="newColor">
              <h3 className="newLabel">Color {i + 1}</h3>
              <span className="newColor-text">{colors}</span>
              <input
                type="color"
                id="input2"
                className="newColor-palette"
                name={i}
                value={colors}
                onInput={handleChange}
              />
              <button id="delete-btn" onClick={() => removeColor(i)}>
                X
              </button>
            </div>
          );
        }
      })}
      <button className="add-btn" onClick={addColor}>
        +
      </button>
    </>
  );
}

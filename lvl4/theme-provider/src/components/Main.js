import React from "react";
import { ThemeContext } from "../themeContext";

export default function Main() {
  const { color, changeColor } = React.useContext(ThemeContext);
  return (
    <main className={`${color}-theme`}>
      <h1>Select from the dropdown to choose a color Theme!</h1>
      {/* <button onClick={toggleTheme} className="toggle-theme">
        Toggle Theme
      </button> */}
      <select onChange={changeColor}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="pink">Pink</option>
      </select>
    </main>
  );
}

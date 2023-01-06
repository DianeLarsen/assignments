import React, { useContext } from "react";
import {ThemeContext} from "../themeContext";

export default function Navbar() {
  const {color} = useContext(ThemeContext);
  return (
    <nav className={`${color}-theme`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

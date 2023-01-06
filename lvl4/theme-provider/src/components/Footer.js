import React from "react";
import { ThemeContext } from "../themeContext";

export default function Footer() {
  const { color } = React.useContext(ThemeContext);
  return (
    <footer className={`${color}-theme`}>
      <h4>The amazing Footer</h4>
    </footer>
  );
}

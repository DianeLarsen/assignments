import React from "react"

const ThemeContext = React.createContext()
function ThemeContectProvider(props){

    const [color, setColor] = React.useState("dark");
  const toggleTheme = () => {
    setColor((prevColor) => (prevColor === "dark" ? "light" : "dark"));
  };
  const changeColor =(event) => {
    console.log(event.target.value)
    setColor(event.target.value)
  }
  return(
    <ThemeContext.Provider value={{ color, toggleTheme, changeColor }}>
  {props.children}
  </ThemeContext.Provider>
  )
}
export {ThemeContext, ThemeContectProvider}

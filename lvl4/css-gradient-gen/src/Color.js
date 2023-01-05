import React from "react"

export default function Color(props){
  
  
    function handleChange(event){
        let items = [...props.colors]
        let item = items[event.target.name]
        item = event.target.value
        console.log(item)
        items[event.target.name] = item
        console.log(items)
        props.setColors(items)
    }
    function addColor(){
        props.setColors (prevcolor => [...prevcolor,  "#ffffff"])
    }
    return(
        <div>
           
        {props.colors.map((colors, i)=> {
            console.log(colors, i)
           if (i>1){
            
          
            return(
        <div key={i}className="color-choice">
        <h3 className="label">Color {i+1}</h3>
        <span className="color-text">{colors}</span>
        <input
          type="color"
          id="input2"
          className="color-palette"
          name={i}
          value={colors}
          onInput={handleChange}
        />
        
      </div>
        )}
    return}
      )}
       <button className="add-btn" onClick={addColor}>+</button>
      </div>
    )
}
import React, {useState} from 'react';




export default function Color(){
    const [color, setColor] = useState(false)
    const [people, setPeople] = useState([
        {
            firstName: "John",
            lastName: "Smith"
        }
    ])
    // const newPerson = {
    //     firstName: "Jane", lastName: "Smythe"
    // }
    
    function setNewColor(){
        setColor(prevState => !prevState);
        // setPeople(prevPeople => ({
        //     ...prevPeople, newPerson
        //     }))
        setPeople(prevPeople => ({...prevPeople, age: 30}))
        console.log(people)
    }
    
    // const [colorsN, setColorsN] = useState(["pink", "blue"])

    // setColorsN(prevColors => [...prevColors, "green"])     
       
  
   
  return (
    <div className="block" style={{ backgroundColor: color ? `pink` : `green`}}>
        <button onClick={setNewColor}>Change Color</button>
        
    </div>

  )
}
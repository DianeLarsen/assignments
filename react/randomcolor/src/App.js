import React from "react"
import "./App.css"
import axios from 'axios';

export default function App() {
    const [colors, setColors] = React.useState({})
    const [count, setCount] = React.useState(1)
   // console.log(`#${colors.data.new_color}`)
    /**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!
     */
    
    React.useEffect(function() {
      axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            //.then(res => res.json())
            .then(data => setColors(data))
            .catch(error => console.log(error)) 
        
        // fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        //     .then(res => res.json())
        //     .then(data => setColors(data))
        //     .catch(error => console.log(error))
    }, [count])
    
    return (
        <div style={{backgroundColor: `#${colors.data.new_color}`}}>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Color</button>
            <pre>{JSON.stringify(colors, null, 2)}</pre>
        </div>
    )
}



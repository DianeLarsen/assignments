import React from "react"
import "./App.css"
import axios from 'axios';

export default function App() {
    const [colors, setColors] = React.useState({})
    const [count, setCount] = React.useState(1)
   
   
    
    React.useEffect(function() {
      axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            //.then(res => res.json())
            .then(data => {
                setColors(data.data.colors[0].hex)
        })
            .catch(error => console.log(error)) 
        
        // fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        //     .then(res => res.json())
        //     .then(data => setColors(data))
        //     .catch(error => console.log(error))
    }, [count])
    
    return (
        <div style={{backgroundColor: `#${colors}`}}>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Color</button>
            <pre>{JSON.stringify(colors, null, 2)}</pre>
        </div>
    )
}



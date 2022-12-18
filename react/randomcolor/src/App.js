import React from "react"
import "./App.css"

export default function App() {
    const [colors, setColors] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    /**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!
     */
    
    React.useEffect(function() {
        console.log("Effect ran")
        console.log(`#${colors.new_color}`)
        fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(res => res.json())
            .then(data => setColors(data))
    }, [count])
    
    return (
        <div style={{backgroundColor: `#${colors.new_color}`}}>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(colors, null, 2)}</pre>
        </div>
    )
}



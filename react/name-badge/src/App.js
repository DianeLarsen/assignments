import React from 'react'
import './App.css';
import Display from "./components/Display.js"
import Forms from "./components/Forms.js"

function App() {
  const [badge, setBadge] = React.useState([{fName:"",lName:"", email:"", birthPlace:"", phone: null, favFood:"", aboutSelf:""}])
  console.log(badge.fName)
  function handleChange(event) {
    const {name, value} = event.target
    setBadge(prevFormData => ({
        ...prevFormData,
        [name]: value
    }))
}
  return (
    <div className="App">
      <Forms handleChange={handleChange} fName={badge.fName} lName={badge.lName} email={badge.email} birthPlace={badge.birthPlace} phone={badge.phone} favFood={badge.favFood} aboutSelf={badge.aboutSelf}/> 
        <Display />
    </div>
  );
}

export default App;

import React from "react";

export default function Name() {
    //let currentName 
  const [formName, setFormName] = React.useState([]);
  let name
  console.log(formName.name)
  function handleChange(event) {
    
    const {value} = event.target;
    //currentName = formName.name
    
    setFormName((prevFormName) => {
      return [
        ...prevFormName,
        value
      ];
    });
  }
  const enteredName = "Cow"
  function handleSubmit(event) {
    event.preventDefault()
    return <li>{item} </li>}
    // submitToApi(formData)
    //console.log(formName)
    
}
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="name"
        value={formName.name}
      />
      <button>Submit</button>
      <h1>{formName.name}</h1>
      <ol>{name}</ol>
    </form>
  );
}

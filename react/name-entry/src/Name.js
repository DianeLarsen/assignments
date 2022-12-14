import React from "react";

export default function Name() {
  const [formName, setFormName] = React.useState([]);

  console.log(formName);
  function handleChange(event) {
    const { value } = event.target;

    document.getElementById("confirmName").textContent = value;
    setFormName((prevFormName) => [...prevFormName, value]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    document.getElementById("confirmName").textContent = "";
    for (let i = formName.length - 1; i < formName.length; i++) {
      var ul = document.getElementById("list");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode([formName[i]]));
      ul.appendChild(li);
    }
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
      <h1 id="confirmName"> </h1>
      <ol id="list"></ol>
    </form>
  );
}

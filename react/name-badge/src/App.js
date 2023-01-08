import React from "react";
import "./App.css";
import Display from "./components/Display.js";
import Forms from "./components/Forms.js";

function App() {
  const [badge, setBadge] = React.useState({
    fName: "",
    lName: "",
    email: "",
    birthPlace: "",
    phone: "",
    favFood: "",
    aboutSelf: "",
  });
  const [createBadge, setCreateBadge] = React.useState([
    {
      id: 0,
      fName: "",
      lName: "",
      email: "",
      birthPlace: "",
      phone: "",
      favFood: "",
      aboutSelf: "",
    },
  ]);
  console.dir(badge);
  console.dir(createBadge);
  console.log(createBadge.length > 0 ? "true" : "false");
  function handleChange(event) {
    const { name, value } = event.target;
    setBadge((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newBadge = {
      id: createBadge.length,
      fName: badge.fName,
      lName: badge.lName,
      email: badge.email,
      birthPlace: badge.birthPlace,
      phone: badge.phone,
      favFood: badge.favFood,
      aboutSelf: badge.aboutSelf,
    };

    setCreateBadge((prevData) => [...prevData, newBadge]);

    //clear fields
    setBadge({
      fName: "",
      lName: "",
      email: "",
      birthPlace: "",
      phone: "",
      favFood: "",
      aboutSelf: "",
    });
  }

  return (
    <div className="App">
      <Forms
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        fName={badge.fName}
        lName={badge.lName}
        email={badge.email}
        birthPlace={badge.birthPlace}
        phone={badge.phone}
        favFood={badge.favFood}
        aboutSelf={badge.aboutSelf}
      />

      {createBadge.length > 0 &&
        createBadge.map((disBad) => {
          console.log(disBad.fName === "" ? "true" : "false");
          if (disBad.fName === "") {
            return;
          } else {
            return (
              <Display
                fName={disBad.fName}
                lName={disBad.lName}
                email={disBad.email}
                birthPlace={disBad.birthPlace}
                phone={disBad.phone}
                favFood={disBad.favFood}
                aboutSelf={disBad.aboutSelf}
                key={disBad.id}
                {...disBad}
              />
            );
          }
        })}
    </div>
  );
}

export default App;

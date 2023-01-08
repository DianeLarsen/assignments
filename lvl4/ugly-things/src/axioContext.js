import React, { useState } from "react";
import axios from "axios";

const AxioContext = React.createContext();

function AxioContextProvider(props) {
  // info from form
  const [newCard, setNewCard] = useState({
    title: "",
    description: "",
    imgUrl: "",
  });

  // console.log(props.card)
  React.useEffect(() => {
    axios
      .get("https://api.vschool.io/dianel/thing")
      .then((res) => {
        const newCard = res.data;
        props.setCard(newCard);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [newCard]);
  function handleChange(event) {
    const { name, value } = event.target;
    setNewCard((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const uglyThings = {
      title: newCard.title,
      description: newCard.description,
      imgUrl: newCard.imgUrl,
    };
    console.log(uglyThings);

    axios
      .post("https://api.vschool.io/dianel/thing", uglyThings)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setNewCard({ title: "", description: "", imgURL: "" });
  }

  return (
    <AxioContext.Provider
      value={{
        handleChange: handleChange,
        handleSubmit: handleSubmit,
        nTitle: newCard.title,
        nDescription: newCard.description,
        nImgUrl: newCard.imgUrl,
      }}
    >
      {props.children}
    </AxioContext.Provider>
  );
}

export { AxioContext, AxioContextProvider };

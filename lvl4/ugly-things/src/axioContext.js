import React, { useEffect, useState } from "react";
import axios from "axios";

const AxioContext = React.createContext();

function AxioContextProvider(props) {
  // info from form
  const [newCard, setNewCard] = useState({
    title: "",
    description: "",
    imgUrl: "",
  });
  const [status, setStatus] = useState(null);
  // console.log(props.card)
  function getData() {
    axios
      .get("https://api.vschool.io/dianel/thing")
      .then((res) => {
        const newCard = res.data;
        props.setCard(newCard);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

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
    //console.log(uglyThings);

    axios
      .post("https://api.vschool.io/dianel/thing", uglyThings)
      .then((res) => {
        getData(res);
      })
      .catch((err) => console.log(err));

    setNewCard({ title: "", description: "", imgUrl: "" });
  
  }
  function handleDelete(id) {
    axios
      .delete(`https://api.vschool.io/dianel/thing/${id}`)
      .then(() => {setStatus("Delete successful");  getData()});
    console.log(status);
  }

  return (
    <AxioContext.Provider
      value={{
        handleChange: handleChange,
        handleSubmit: handleSubmit,
        handleDelete,
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

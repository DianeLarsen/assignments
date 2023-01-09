import Form from "./Form";
import Card from "./Card";
import "./App.css";
import React from "react";

import { AxioContextProvider } from "./axioContext";

function App() {
  const [card, setCard] = React.useState({});
  if (card[0] !== undefined){
console.log(card[0]._id)
  }
  return (
    <AxioContextProvider card={card} setCard={setCard}>
      
      <Form />
      <div className="display-cards">
      {card.length > 0 &&
        card.map((disBad, i) => {
          console.log(disBad._id)
          if (disBad.title === "") {
            return;
          } else {
            return (
              <Card
                title={disBad.title}
                description={disBad.description}
                urlImg={disBad.urlImg}
                id={disBad._id}
                key={i}
                {...disBad}
              />
            );
          }
        })}
        </div>
    </AxioContextProvider>
  );
}

export default App;

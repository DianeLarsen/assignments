import Form from "./Form";
import Card from "./Card";
import "./App.css";
import React from "react";

import { AxioContextProvider } from "./axioContext";

function App() {
  const [card, setCard] = React.useState({});

  return (
    <AxioContextProvider card={card} setCard={setCard}>
      <Form />
      {card.length > 0 &&
        card.map((disBad, i) => {
          
          if (disBad.title === "") {
            return;
          } else {
            return (
              <Card
                title={disBad.title}
                description={disBad.description}
                urlImg={disBad.urlImg}
                key={i}
                {...disBad}
              />
            );
          }
        })}
    </AxioContextProvider>
  );
}

export default App;

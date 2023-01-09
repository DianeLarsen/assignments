import React from "react";
import {useNavigate} from "react-router-dom"

export default function Checkout() {
    const navigate = useNavigate()
  return (
    <div className="checkout">
      
      <h1>Checkout Page!</h1>
      <button onClick={() => navigate("/")}>Return to Home</button>
      <button onClick={() => navigate(-1)}>Go Back 1</button>
      <button onClick={() => navigate(-2)}>Go Back 2</button>
    </div>
  );
}


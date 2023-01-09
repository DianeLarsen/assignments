import React from "react";
import {useNavigate, Link} from "react-router-dom"
import productData from "./productData"

export default function Products() {
    const navigate = useNavigate()
    const products = productData.map(product => (
        <h3 key={product._id}>
            <Link to={`/products/${product._id}`}>{product.name}</Link> - ${product.price}
        </h3>
    ))
  return (
    <div className="products">
      
     
      <button onClick={() => navigate("/checkout")}>Go to Products page</button>
      <button onClick={() => navigate("/")}>Return to Home</button>
      <button onClick={() => navigate(1)}>Go Forward 1</button>
      <button onClick={() => navigate(-1)}>Go back 1</button>
      <div>
        <h1>Services List Page</h1>
        {products}
      </div>
    </div>
  );
}
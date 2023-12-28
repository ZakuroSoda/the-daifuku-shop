import React, { useState, useEffect } from "react";
import './Menu.css';

import Card from "./Card/Card";

function Menu() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/get-products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [products]);

  return (
    <div className="menu">
      {products.map(product => {
        return (
          <Card
            key={product.product_id}
            name={product.name}
            stock={product.stock}
            price={product.price}
            image_url={product.image_url}
          />
        );
      })}
    </div>
  );
}

export default Menu;
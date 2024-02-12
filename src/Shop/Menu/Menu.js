import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import Card from "./Card/Card";
import './Menu.css';

function Menu({ user, setUser, cartVisible, setCartVisible }) {

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

  function addToCart(user, productId) {
    fetch('/api/user/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': user.token
      },
      body: JSON.stringify({ user, productId })
    })
      .then(res => {
        if (res.status === 200) {
          toast.dismiss();
          toast.success('Added to cart!');
        } else {
          toast.dismiss();
          toast.error('Something went wrong. Please try again.');
          return
        }
        return res.json();
      })
      .then(user => {
        if (!user) return;
        setCartVisible(true);
        setUser(user);
      })
  }

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
          addToCart={() => addToCart(user, product.product_id)}
        />
      );
    })}
  </div>
);
}

export default Menu;
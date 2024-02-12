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
    if (!user) {
      toast.dismiss()
      toast.error('You must be logged in to add an item to cart.');
      return;
    }

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
      {products
        .sort((a, b) => {
          if (a.out_of_stock && !b.out_of_stock) {
            return 1;
          } else if (!a.out_of_stock && b.out_of_stock) {
            return -1;
          } else {
            return 0;
          }
        })
        .map(product => {
          return (
            <Card
              key={product.product_id}
              name={product.name}
              stock={product.stock}
              price={product.price}
              outOfStock={product.out_of_stock}
              image_url={product.image_url}
              addToCart={() => addToCart(user, product.product_id)}
            />
          );
        })
      }
    </div>
  );
}

export default Menu;
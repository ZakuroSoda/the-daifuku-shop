import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { UserContext } from '../Context/UserContext';
import cross from './cross.svg'
import './Cart.css';

function Cart({ cartVisible, setCartVisible }) {

  const { user, setUser } = useContext(UserContext);

  const [cart, setCart] = useState(user?.cart ?? []); // for some reason i cant use ?? here
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    setCart(user?.cart ?? []);
  }, [user]);

  function updateItemQuantity(index, quantity) {
    let newCart;

    if (quantity < 1) {
      newCart = cart.filter((item, itemIndex) => itemIndex !== index);
    }
    else {
      newCart = cart.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            quantity: quantity
          }
        }
        return item;
      })
    }

    setCart(newCart);
    setUser({
      ...user,
      cart: newCart
    });

    fetch('/api/user/update-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': user.token
      },
      body: JSON.stringify({ user, cart: newCart })
    })
      .then(res => {
        if (res.status === 200) {
        } else {
          toast.dismiss();
          toast.error('Something went wrong. Please try again.');
          return
        }
        return res.json();
      })
      .then(user => {
        if (!user) return;
        setUser(user);
      });
  }

  return (
    <>
      <div
        className="cart"
        style={{
          height: "100%",
          width: cartVisible ? "30vw" : "0",
          visibility: cartVisible ? "visible" : "hidden",
          minWidth: cartVisible ? "400px" : "0",
          position: "fixed",
          zIndex: "1",
          top: "10vh",
          right: "0",
          backgroundColor: "#FACACF",
          transition: "0.2s",
          padding: "0 1.5rem",
        }}
      >
        {cartVisible &&
          <>
            <div className="cart-header">
              <div className="cart-title">Your Cart</div>
              <img src={cross} onClick={() => setCartVisible(false)} alt="Close" className="cart-close" />
            </div>
            {cart.length === 0 ?
              <div className="cart-items">
                {user ? "Your cart is empty" : "Log in to see your cart"}
              </div>
              :
              <div className="cart-items">
                <table>
                  <colgroup>
                    <col span="1" className="cart-items-header-item" />
                    <col span="1" className="cart-items-header-price" />
                  </colgroup>
                  <tr>
                    <th className="cart-items-header">Item</th>
                    <th className="cart-items-header">Price</th>
                  </tr>

                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="cart-items-item">
                          <img src={item.image_url} alt={`Item ${index}`} className="cart-items-item-image" />
                          <div className="cart-items-item-text">{item.name}</div>
                        </div>
                      </td>
                      <td>
                        <div className="cart-items-price">
                          <div className="cart-items-price-text">${(item.price * item.quantity).toFixed(2)}</div>
                          <div className="quantity-box">
                            <div
                              onClick={() => updateItemQuantity(index, item.quantity - 1)}
                            >
                              -
                            </div>
                            <div>{item.quantity}</div>
                            <div
                              onClick={() => updateItemQuantity(index, item.quantity + 1)}
                            >
                              +
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}

                </table>
              </div>
            }
            <div className="cart-checkout">
              <a className="cart-checkout-button">Checkout &#183; ${total.toFixed(2)} SGD</a>
            </div>
          </>
        }
      </div>
    </>
  );
}

export default Cart;
import React from 'react';
import './Cart.css';
import cross from './cross.svg'
import strawberry from './strawberry.jpg'

function Cart({ cartVisible, setCartVisible }) {
  return (
    <>
      <div
        className="cart"
        style={{
          height: cartVisible ? "100%" : "0",
          width: cartVisible ? "30vw" : "0",
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
              <tr>
                <td>
                  <div className="cart-items-item">
                    <img src={strawberry} alt="Item 1" className="cart-items-item-image" />
                    <div className="cart-items-item-text">Strawberry Mochi</div>
                  </div>
                </td>
                <td>
                  <div className="cart-items-price">
                    <div className="cart-items-price-text">$1.00</div>
                    <div className="quantity-box">
                      <div>-</div>
                      <div>1</div>
                      <div>+</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cart-items-item">
                    <img src={strawberry} alt="Item 1" className="cart-items-item-image" />
                    <div className="cart-items-item-text">Strawberry Mochi</div>
                  </div>
                </td>
                <td>
                  <div className="cart-items-price">
                    <div className="cart-items-price-text">$1.00</div>
                    <div className="quantity-box">
                      <div>-</div>
                      <div>1</div>
                      <div>+</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cart-items-item">
                    <img src={strawberry} alt="Item 1" className="cart-items-item-image" />
                    <div className="cart-items-item-text">Strawberry Mochi</div>
                  </div>
                </td>
                <td>
                  <div className="cart-items-price">
                    <div className="cart-items-price-text">$1.00</div>
                    <div className="quantity-box">
                      <div>-</div>
                      <div>1</div>
                      <div>+</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cart-items-item">
                    <img src={strawberry} alt="Item 1" className="cart-items-item-image" />
                    <div className="cart-items-item-text">Strawberry Mochi</div>
                  </div>
                </td>
                <td>
                  <div className="cart-items-price">
                    <div className="cart-items-price-text">$1.00</div>
                    <div className="quantity-box">
                      <div>-</div>
                      <div>1</div>
                      <div>+</div>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="cart-checkout">
            <a className="cart-checkout-button">Checkout &#183; $1.00 SGD</a>
          </div>
        </>
        }
      </div>
    </>
  );
}

export default Cart;
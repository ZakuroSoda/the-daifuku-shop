import React from 'react';

function Cart({ cartVisible, setCartVisible }) {
  return (
    <>
      {cartVisible && <div>Cart</div>}
    </>
  );
}

export default Cart;
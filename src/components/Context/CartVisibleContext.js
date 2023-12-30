import { createContext, useState } from 'react';

const CartVisibleContext = createContext();

function CartVisibleProvider({ children }) {
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <CartVisibleContext.Provider value={{ cartVisible, setCartVisible }}>
      {children}
    </CartVisibleContext.Provider>
  );
};

export { CartVisibleContext, CartVisibleProvider };

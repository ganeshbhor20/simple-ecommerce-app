// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productId, productName, productPrice) => {
    setCart((prevCart) => [...prevCart, { id: productId, name: productName, price: parseFloat(productPrice) }]);
  };

  return (
    <div>
      <h1>Simple E-Commerce App</h1>
      <ProductList onAddToCart={handleAddToCart} />
      <div className="upper-right-corner">
        <ShoppingCart cart={cart} />
        <Checkout />
      </div>
    </div>
  );
};

export default App;

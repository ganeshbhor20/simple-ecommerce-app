// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderPage from './components/OrderPage';
import './App.css'; 

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handlePlaceOrder = (orderDetails) => {
    
    alert(`Order Placed!\nOrder Summary:\n${JSON.stringify(orderDetails, null, 2)}`);
  };

return (
    <Router>
      <div>
        <nav>
          <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', padding: 0 }}>
            <li style={{ marginRight: '20px' }}>
              <Link to="/" style={buttonStyle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" style={buttonStyle}>
                Your Cart
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                onAddToCart={(id, name, price) => {
                  const updatedCart = [...cartItems, { id, name, price }];
                  setCartItems(updatedCart);
                  setTotalAmount((prevTotal) => prevTotal + price);
                }}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} totalAmount={totalAmount} onPlaceOrder={handlePlaceOrder} />}
          />
          <Route path="/order" element={<OrderPage onPlaceOrder={handlePlaceOrder} />} />
        </Routes>
      </div>
    </Router>
  );
};

const buttonStyle = {
  backgroundColor: 'skyblue',
  padding: '10px 20px',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
};

export default App;

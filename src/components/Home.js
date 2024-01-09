// Home.js file

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Home = () => {
  return (
  <div>
    {/* Header section */}
    <div style={{ backgroundColor: '#005c99', padding: '10px', textAlign: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none', margin: '0 10px' }}>
        <button style={{ color: '#fff', border: 'none', background: 'none', fontWeight: 'bold', fontSize: '16px' }}>
          Home
        </button>
      </Link>
      <Link to="/cart" style={{ textDecoration: 'none', margin: '0 10px' }}>
        <button style={{ color: '#fff', border: 'none', background: 'none', fontWeight: 'bold', fontSize: '16px' }}>
          Your Cart
        </button>
      </Link>
    </div>

    {}
    {}
  </div>
);

export default Home;

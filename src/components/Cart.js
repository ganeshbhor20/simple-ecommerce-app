// src/components/Cart.js
import React from 'react';
import PlaceOrderButton from './PlaceOrderButton';

const Cart = ({ cartItems, totalAmount, onPlaceOrder }) => {
  return (
    <div>
      <h2>Items In Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{ marginBottom: '10px' }}>
              <p style={{ fontWeight: 'bold' }}>{item.name}</p>
              <p style={{ fontWeight: 'bold' }}>${item.price.toFixed(2)}</p>
            </div>
          ))}
          <hr />
          <p style={{ fontWeight: 'bold' }}>Total Amount: ${totalAmount}</p>
          <PlaceOrderButton onPlaceOrder={onPlaceOrder} />
        </div>
      )}
    </div>
  );
};

export default Cart;

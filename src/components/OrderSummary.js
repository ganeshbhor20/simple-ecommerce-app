// OrderSummary.js

import React from 'react';

const OrderSummary = ({ cartItems, customerInfo, previousStep, placeOrder }) => {
  return (
    <div>
      <h2>Checkout - Step 2: Order Summary</h2>
      {/* Display order summary and customer information */}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
      <p>Name: {customerInfo.name}</p>
      <p>Address: {customerInfo.address}</p>
      <p>Payment Type: {customerInfo.paymentType}</p>
      <p>Payment ID or Card Number: {customerInfo.paymentId}</p>
      <button onClick={previousStep}>Previous</button>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default OrderSummary;

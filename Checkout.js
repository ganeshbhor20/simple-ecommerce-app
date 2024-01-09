// src/components/Checkout.js
import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentDetails: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the checkout simulation logic
    // Display a confirmation message with order summary
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

        <label>Address: </label>
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} />

        <label>Payment Details: </label>
        <input
          type="text"
          name="paymentDetails"
          value={formData.paymentDetails}
          onChange={handleInputChange}
        />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;

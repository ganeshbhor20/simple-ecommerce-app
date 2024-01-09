// CheckoutForm.js

import React from 'react';

const CheckoutForm = ({ customerInfo, handleChange, nextStep }) => {
  return (
    <div>
      <h2>Checkout - Step 1: Customer Information</h2>
      {/* Add form fields for customer information */}
      <input
        type="text"
        name="name"
        value={customerInfo.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        value={customerInfo.address}
        placeholder="Address"
        onChange={handleChange}
      />
      <select
        name="paymentType"
        value={customerInfo.paymentType}
        onChange={handleChange}
      >
        <option value="">Select Payment Type</option>
        <option value="upi">UPI</option>
        <option value="creditCard">Credit Card</option>
        <option value="debitCard">Debit Card</option>
      </select>
      <input
        type="text"
        name="paymentId"
        value={customerInfo.paymentId}
        placeholder="Payment ID or Card Number"
        onChange={handleChange}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default CheckoutForm;

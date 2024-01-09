// src/components/OrderPage.js
import React, { useState } from 'react';
import './OrderPage.css';
import OrderSummaryPopup from './OrderSummaryPopup';

const OrderPage = ({ onPlaceOrder }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    pincode: '',
    phoneNumber: '',
    paymentDetails: '',
  });

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlaceOrderClick = () => {
    
    if (formData.name && formData.address && formData.pincode && formData.phoneNumber && formData.paymentDetails) {
      onPlaceOrder(formData);
      setIsOrderPlaced(true);
    } else {
      alert('Please fill in all the details before placing the order.');
    }
  };

  const handleClosePopup = () => {
    setIsOrderPlaced(false);
  };

  return (
    <div className="order-container">
      <h2 className="order-heading">Place Your Order</h2>
      <form className="order-form">
        <label className="order-label">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label className="order-label"> 
          
        Address:  <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            rows={4} 
          />
        </label>
        <label className="order-label">
          Pin Code:
          <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} />
        </label>
        <label className="order-label">
          Phone Number:
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
        </label>
        <label className="order-label">
          Payment Details:
          <input type="text" name="paymentDetails" value={formData.paymentDetails} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handlePlaceOrderClick} className="order-btn">
          Place Order
        </button>
      </form>

      {isOrderPlaced && <OrderSummaryPopup orderDetails={formData} onClose={handleClosePopup} />}
    </div>
  );
};

export default OrderPage;

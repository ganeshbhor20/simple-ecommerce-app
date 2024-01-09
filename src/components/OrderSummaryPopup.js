// src/components/OrderSummaryPopup.js
import React from 'react';
import './OrderSummaryPopup.css';

const OrderSummaryPopup = ({ orderDetails, onClose }) => {
  return (
    <div className="order-summary-popup">
      <div className="popup-content">
        <span className="close-icon" onClick={onClose}>
          &times;
        </span>
        <h2>Order Summary</h2>
        <div className="summary-details">
          <p>
            <strong>Name:</strong> {orderDetails.name}
          </p>
          <p>
            <strong>Address:</strong> {orderDetails.address}
          </p>
          <p>
            <strong>Pin Code:</strong> {orderDetails.pincode}
          </p>
          <p>
            <strong>Phone Number:</strong> {orderDetails.phoneNumber}
          </p>
          <p>
            <strong>Payment Details:</strong> {orderDetails.paymentDetails}
          </p>
        </div>
        <p className="thank-you-message">Thank you for your order!</p>
      </div>
    </div>
  );
};

export default OrderSummaryPopup;

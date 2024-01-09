// src/components/PlaceOrderButton.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderSummaryPopup from './OrderSummaryPopup';

const PlaceOrderButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePlaceOrder = () => {
   
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
      <Link to="/order">
        <button
          className="btn btn-primary"
          style={{ backgroundColor: 'skyblue', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px' }}
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </Link>
      {isPopupOpen && <OrderSummaryPopup onClose={closePopup} />}
    </div>
  );
};

export default PlaceOrderButton;

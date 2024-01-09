// Checkout.js

import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';

const Checkout = ({ cartItems, onPlaceOrder }) => {
  const [step, setStep] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    paymentType: '',
    paymentId: '',
  });

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const placeOrder = () => {
    // You can perform any additional logic here before placing the order
    // For example, validate the customer information, handle the payment, etc.

    // After processing, invoke the onPlaceOrder function to update the parent component
    onPlaceOrder({
      customerInfo,
      cartItems,
    });

    // Move to the next step (order confirmation)
    nextStep();
  };

  return (
    <div>
      {step === 1 && (
        <CheckoutForm
          customerInfo={customerInfo}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <OrderSummary
          cartItems={cartItems}
          customerInfo={customerInfo}
          previousStep={previousStep}
          placeOrder={placeOrder}
        />
      )}

      {/* Add more steps as needed */}
    </div>
  );
};

export default Checkout;

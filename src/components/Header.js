// src/components/Header.js
import React from 'react';

const Header = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  const currentTime = currentDate.toLocaleTimeString();

  return (
    <div style={{ backgroundColor: 'skyblue', padding: '10px', textAlign: 'center', color: '#fff' }}>
      <span>Contact Us</span> | <span>Customer Support</span> | <span>{formattedDate} {currentTime}</span>
    </div>
  );
};

export default Header;

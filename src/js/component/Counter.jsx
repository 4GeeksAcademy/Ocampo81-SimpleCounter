import React from 'react';

function getRandomNumber() {
    return Math.floor(Math.random() * 1000000);
  }
  
  export function Counter() {
    const randomNumber = getRandomNumber();
    const digits = randomNumber.toString().padStart(6, '0').split('');
  
    return (
      <div className="container">
        <div className="counter">
            <i className="fas fa-clock clock-icon"></i>
          {digits.map((digit, index) => (
            <div key={index} className="digit">
              {digit}
            </div>
          ))}
        </div>
      </div>
    );
  }
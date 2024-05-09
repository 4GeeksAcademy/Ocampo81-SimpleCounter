import React, { useState, useEffect } from 'react';

export function Counter() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prevNumber => prevNumber + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const digits = number.toString().padStart(6, '0').split('');

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
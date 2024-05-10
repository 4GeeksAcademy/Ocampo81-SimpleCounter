import React from 'react';

const SecondsCounter = ({ seconds }) => {
  const digitArray = Array.from(String(seconds).padStart(6, '0'), Number);

  return (
    <div className="container">
      <div className="counter">
        <i className="fas fa-clock clock-icon"></i>
        <div className="digits">
          {digitArray.map((digit, index) => (
            <div key={index} className="digit">{digit}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondsCounter;
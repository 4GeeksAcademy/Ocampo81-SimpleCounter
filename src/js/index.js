import React from 'react';
import ReactDOM from 'react-dom';
import SecondsCounter from './component/SecondCounter';
import '../styles/index.css'



const startSecondsCounter = () => {
  let seconds = 0;
  setInterval(() => {
    ReactDOM.render(
      <SecondsCounter seconds={seconds} />,
      document.getElementById('app')
    );
    seconds++;
  }, 1000);
};

window.onload = startSecondsCounter;
import React from 'react';
import ReactDOM from 'react-dom';
import SecondsCounter from './component/SecondCounter';
import '../styles/index.css'


// Define una función para iniciar el contador de segundos
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

// Inicia el contador de segundos al cargar la página
window.onload = startSecondsCounter;
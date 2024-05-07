//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./component/Counter";

// include your styles into the webpack bundle
import "../styles/index.css";


function renderCounter() {
  ReactDOM.render(<Counter />, document.getElementById('app'));
}

setInterval(renderCounter, 1000); // Actualiza el contador cada segundo
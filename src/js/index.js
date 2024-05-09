//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./component/Counter";

// include your styles into the webpack bundle
import "../styles/index.css";


ReactDOM.render(<Counter />, document.getElementById('app'));
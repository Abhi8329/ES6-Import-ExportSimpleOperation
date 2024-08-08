// Simple operartion
import React from "react";
import ReactDOM from "react-dom";
import * as calculator from "./calculator";

ReactDOM.render(
  <ul>
    <li>Addition : {calculator.add(1, 2)}</li>
    <li>Multiplication : {calculator.multiply(2, 3)}</li>
    <li>Subtraction : {calculator.subtract(7, 2)}</li>
    <li>Division : {calculator.divide(5, 2)}</li>
    <li>Modularity : {calculator.modular(10, 5)}</li>
  </ul>,
  document.getElementById("root")
);

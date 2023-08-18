/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Declaración de arrays
  const suites = ["♦", "♥", "♠", "♣"];
  const number = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  //Selecciono un suite aleatorio
  const randomIndex = Math.floor(Math.random() * suites.length);
  const randomSuite = suites[randomIndex];

  //Coloco el suite dentro del HTML (arriba y abajo).
  const symbolElement = document.getElementById("simbolo");
  symbolElement.innerText = randomSuite;
  const symbolElement2 = document.getElementById("simboloInferior");
  symbolElement2.innerText = randomSuite;

  //Doy color al suite dependiendo del orden
  if (randomIndex === 0 || randomIndex === 1) {
    document.getElementById("simbolo").style.color = "red";
    document.getElementById("simboloInferior").style.color = "red";
  } else {
    document.getElementById("simbolo").style.color = "black";
    document.getElementById("simboloInferior").style.color = "black";
  }

  //Selecciono un numero aleatorio
  const randomIndexNumber = Math.floor(Math.random() * number.length);
  const randomNumber = number[randomIndexNumber];

  //Coloco el number dentro del HTML.
  const numberElement = document.getElementById("valor");
  numberElement.innerText = randomNumber;
};

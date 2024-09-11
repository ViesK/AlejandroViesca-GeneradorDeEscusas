/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var excuses = {
    who: ["The dog", "My grandma", "The mailman", "My bird"],
    action: ["ate", "peed", "crushed", "broke"],
    what: ["my homework", "my phone", "the car"],
    when: [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ]
  };

  //Esta función se inicia con la llamada de excuses[key] del bucle for in
  //lo que recibe es directamente el array de uno de los elementos del objeto excuse
  //usando return arr[] lo que le estoy diciendo es que me devuelva un elemento aleatorio de dicho array
  //es como poner directamente who[1] o what[3] dependiendo de la iteración del bucle y el numero random.
  function randomExcuseElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  //Recorre cada elemento del objeto por orden y en cada uno llama a la funcion random
  // por lo que en la primera iteracion dara Who[aleatorio], en la segunda action[aleatorio]
  function excusesGenerator() {
    let excuseFrase = "";
    for (let key in excuses) {
      let randomElement = randomExcuseElement(excuses[key]);
      excuseFrase += randomElement + " ";
    }
    return excuseFrase.trim();
  }
  console.log(excusesGenerator());
  document.getElementById("excuse").textContent = excusesGenerator();
  console.log("Hello Rigo from the console!");
};

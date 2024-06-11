"use strict";

let number = [
  2,
  4,
  6,
  8,
];

function multiply(number) {

  for (let i = 0; i < number.length; i++) {

  let mult = number[i] *3;

    alert (number[i] + " multiplicado por 3 es:" + mult);

    };

  };

multiply(number)
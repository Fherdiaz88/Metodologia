"use strict";

let number = [
    2,
    4,
    6,
    8,
]

function suma(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
      sum += number[i];
    }
    return sum;
  }
let sum = suma(number);
alert ("2+4+6+8= " + sum);


"use strict";

let array = [0,2,4,8];

//Ejercicio #3
function sum() {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let result = array[i] + "" + array[j];
      alert(result);
    }
  }
}

sum();



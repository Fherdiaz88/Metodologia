"use strict";

let nums = [13.676767, 3.123432, 5.34543543, 10.3452345];

function filters(nums) {
  return nums
      .filter(num => num > 10.00)  
      .map(num => num.toFixed(2)); // Redondear a 2 decimales y convertir a string
}
alert()

let result = filters(nums);
alert(result);  


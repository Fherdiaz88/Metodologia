"use strict";

let califications = [10, 8, 3.6, 2.4, 8.7, 9.9, 6.75, 9.52];
   
function calculate(califications) {
    let total = califications.reduce((sum, grade) => sum + grade, 0); // Sumar todas las calificaciones
    let average = total / califications.length; // Calcular el promedio
    return Math.floor(average); // Devolver solo la parte entera del promedio
}

let result = calculate(califications);
alert(result);  // Muestra el promedio
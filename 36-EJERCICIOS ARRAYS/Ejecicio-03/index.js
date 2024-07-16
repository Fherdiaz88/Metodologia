"use strict";

function palabrasMasDeTresLetras(frase) {
   
    const palabras = frase.split(' ');

    
    const palabrasLargas = palabras.filter(palabra => palabra.length > 3);

    return palabrasLargas;
}


let frase = prompt("Ingrese la frase");
const resultado = palabrasMasDeTresLetras(frase);
alert(resultado);
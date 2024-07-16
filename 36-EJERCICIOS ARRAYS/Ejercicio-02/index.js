"use strict";

let array = "La programación web es fundamental para el progreso";

function words(array) {
    let element = array.split(' ');
    return element.length;
}

let quantity = words(array);
alert(`La frase: "${array}" tiene ${quantity} palabras.`);

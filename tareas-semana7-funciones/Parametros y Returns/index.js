"use strict";

function showText() { //No parametros ni return
    alert("Hola");
}
showText("Hola");

//2.-
function showName(name) { //Con parámetros, sin valor retorno.
    alert(name);
}

showName("Fer");

//3.-
function show() {//Sin parámetros, con valor retorno.
    return (result);
}

let result = ("Bienvenido");
alert(result);

//4.-
function showFullText(text, name) {//Con parámetros y con valor retorno.
    return text + name;
}

let result2 = showFullText("Bienvenido ", "Fer");
alert(result2);
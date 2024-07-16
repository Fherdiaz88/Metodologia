"use strict";

let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];

function searchName(namesList, wantedName) {
    if (namesList.includes(wantedName)) {
        alert("Si se encuentra");
    } else {
        alert("No se encuentra"); 
    }
}

let wantedName = prompt("Ingrese el nombre que desea buscar");

searchName(students, wantedName);


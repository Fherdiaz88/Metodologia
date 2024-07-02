"use strict";

function getClasses(classes, level) {
  return classes
      .filter(c => c.level === level)
      .map(c => c.name);  // Retorna solo los nombres de las asignaturas
}

let classes = [
  { name: "Metodologia", level: 1 },
  { name: "Interfacez", level: 1 },
  { name: "TICS", level: 1 },
  { name: "Base de Datos", level: 1 },
  { name: "Matematicas", level: 1 },
  { name: "PIENSA", level: 1 },
  { name: "Sistemas digitales programables", level: 2 },
  { name: "Sistemas de informacion", level: 2 },
  { name: "PIENSA2", level: 2 },
  { name: "Programacion orientada a objetos", level: 2 },
  { name: "Procesos controlables", level: 2 },
  { name: "Gestion de base de datos", level: 2 },
  { name: "Gestion de base de datos", level: 2 },
  { name: "Software aplicativo", level: 3 },
  { name: "PIENSA3", level: 3 },
  { name: "Programacion para dispositivos", level: 3 },
  { name: "Probabilidades y procesos estocasticos", level: 3 },
  { name: "Herramientas informaticas", level: 3 },
  { name: "Aplicaciones tecnologicas autonomas", level: 3 },
  { name: "Tendecias tecnologicas", level: 4 },
  { name: "Sistemas operativos", level: 4 },
  { name: "Herramientas case", level: 4 },
  { name: "Desarrollos de proyectos software", level: 4 },
  { name: "Derecho y seguridad informatica", level: 4 },
  { name: "Comunicaciones y redes de datos", level: 4 }
];

let level = 4;
let result = getClasses(classes, level);
alert(result);  // Muestra los nombres de las asignaturas del nivel 4

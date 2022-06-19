const name = window.prompt("Nombre");
alert(`Hola ${name}`);

const numberOne = prompt("Ingresa el primer número");
const numberTwo = prompt("Ingresa el Segundo número");
const operacion = Number(numberOne) + Number(numberTwo);

alert(operacion);

const firtNumber = prompt("ingrese  un numero");
const secondNumber = prompt("ingrese  otro numero");
let dobleDeLaSuma = (Number(firtNumber) + Number(secondNumber)) * Number(2);

alert(dobleDeLaSuma);

let width = prompt("Ingrese ancho");
let hight = prompt("ingrese altura");
let calculo = Number(width) * Number(hight);

alert("La superficie es de " + calculo + " Mts cuadrados");

const nombreMinuscula = prompt("Ingresa tu nombre en Mayusculas");
alert(nombreMinuscula.toLowerCase());

const nombreMayusculaa = prompt("Ingresa tu nombre en Minusculas");
alert(nombreMayusculaa.toUpperCase());

const named = prompt("Ingresa tu nombre");
const surnamed = prompt("ingresa tu apellido");
const age = prompt("ingresa tu edad");

alert(`Tus datos son:
Nombre: ${named},
 Apellido: ${surnamed}
 Edad: ${age}`);

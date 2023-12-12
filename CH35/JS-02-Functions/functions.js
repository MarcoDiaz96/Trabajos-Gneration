/*
Funcion para saludar */

function saludar(){
    console.log("Hola desde una función");
}
// ejectar la funcion
saludar();

//funciones que retornan algo
//hoisting: caracteristica de una función que nos permite invocarla desde antes de su inicialización, es decir, se puede invocar antes del bloque de codigo o despues Nota: Las funciones normales se llaman funciones por declaración

// se invoca en la linea 8 y en la 20

function saludar() {
    console.log("Hola, invocando la funcion con hoisting");

}

saludar();

//Funciones que retornan algo. Para que una funcion retorne algo(un String,una operacion,una variable,etc..) necesitamos indicarle al codigo de la funcion que vamos a retonar mediante una palabra return

function greeting(){
 return "Hola desde una funcion que retorna";
}

console.log(greeting());

//Funcion que retorna y recibe parametros

function suma(x, y){
    return x+y;

}
let resultado = suma(255,245);
console.log(`El resultado de sumar x + y es ${resultado} segundos`);

//Calcular el cuadrado de un numero

function calcCuadrado(numero){
    return numero*numero;

}

let resultadoCuadrado = calcCuadrado(5);
console.log(resultadoCuadrado);

//Funciones flecha (arrow function) manera de declarar una funcion por declaracion , sintetizando codigo  y haciendolo más legible.

//funcion flecha para calcular el cubo de un numero

const calcCubo = (number) => {
    return number * number * number;
}

let resultCubo = calcCubo(3);
console.log(resultCubo);

//Funciones anonimas.Son un tipo de funciones que se declaran sin nombre de funcion que se van a alojar en el interior de una variable. se hace referencia a ellas cada que ña utilizamos, las funciones anonimas no permite hoisting, no se pueden invocar antes de iicializarlas.

const mensaje = function(){
    return "Este es un mensaje desde una funcion anonima";
}
console.log(mensaje());

//callbacks.Es pasar una funcion B por parametro a una funcion A de modo que la funcion A pueda ejecutar esa función B de forma generica desde su codigo.

//Funcion B
const functionB = function (){
    console.log("Ejecutando funcion B");
}

// Function A que mandara a llamar la funcion B

const functionA = function(callback){
    callback();

}

functionA(functionB);

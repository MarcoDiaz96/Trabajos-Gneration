//Operador
/* Es un signo que especifica que debe efectuar una determinada operación 

Operadores aritmeticos: (+,-,*,/,%,++,--)
Operadores de asignción (=)
Operadores logicos (&&,||,!)
Operadores de comparación (==,===,!=,<,>,>=.<=)
Operadores de cadena(toLowerCase,ToUpperCase,trim,toString,concat,+)
*/

/* 
Operadores aritmeticos 
(+) se utiliza para sumar dos numeros
(-) se utiliza para restar dos numeros 
(*) multiplicación, se utiliza para multiplicar un numero por otro
(/) dicision: se utiliza para dicidir un numero entre otro
(%) residuo: sirve para comprobar si un numero es par o no, da el resto de una division.
(++) incremento, aumemta de uno e uno la cantidad del numero
(--) decremento, disminuye de uno en uno la cantidad del numero 
*/

/*let numero1 =10;
let numero2 = 8;

suma = numero1 + numero2;

console.log(suma);

let precioReal = 1000;
let porcentajeDescuento = 20;
let cantidadDesc =(precioReal * porcentajeDescuento)/100;
let precioconDesc = (precioReal-cantidadDesc);

console.log("El precio Real es $: " + precioReal);
console.log("El porcentaje de descuento es :  " + porcentajeDescuento + "%");
console.log(" Tu cantidad de descuento fue : $"+ cantidadDesc);
console.log("El precio a pagar con descuento es : $" + precioconDesc);

//Operadores de Asignación

/*
=: Este operador no compara, lo que hace es asignar
*/

//let frutas = "manzana";

// Operadores de comparación 

/**
 * (==) : Igualdad compara si nuestros valores son iguales 
 */

//let numero3 = 10;
//let texto = "10";

//console.log(numero3===texto);

/*(===): igualdad estricta compara si los valores son iguales y el tipo de dato


*/

/**
 * (!=): Desigualdad o distinto este operador verifica si dos valores no son iguales y de ser necesario realiza la conversion 
 
 */

/*let precioCaja = 1499;
let precioMaximo = 1500;

if (precioCaja!=precioMaximo){
    console.log("El precio no es el mismo")
}else{
    console.log("Los precios estan bien ajustados");
}


let numero5 = 40;
let numero6= "40";

if(numero5!=numero6){
    console.log("son diferentes");
}else{
    console.log("son iguales");
}

/* Desigualdad estricta
(!===) este operador verifica si dos valores no son iguales pero a diferencia de (!==) , en este caso ambos valores deben tener el mismo tipo de dato y valor
 */

/*let num7 = 41;
let num8= "50";

if(num7!== num8){
    console.log("los valores son  diferentes");


}else{
    console.log("Los valores son iguales");
}

// (>) mayor que. nos dice si un valor es mayor que el otro
let puntFinal = 85;
let puntreq = 102;

if(puntFinal>puntreq){
    console.log("Estas dentro papi");

}else{
    console.log("Vete a un conalep carnal");
}

// (<) menor que. nos dice si un valor es menor que el otro

let edad = 20;
let edadlimite = 30;

console.log(edad<edadlimite);

// (>=)Mayor o igual que : nos dice si un valor es mayor o igual que el otro.

let edad1=16;
let edadperm=18;

if(edad1>=edadperm){
    console.log("Pasa y diviertete sanamente");

}else{
    console.log("Lo lamento no puedes pasar");
}

//Meor igual que (<=) nos indica si un valor es menor o igual a otro

let temp = 14;
let tempMax = 21;

console.log(temp<=tempMax);




// Ejercico 1


/*let numero9 = parseFloat(prompt("Ingrese el primer número:"));
let numero10 = parseFloat(prompt("Ingrese el segundo número:"));


if (isNaN(numero9) || isNaN(numero10)) {
  console.log("Por favor, ingrese números válidos.");
} else if (numero9 === numero10) {
  console.log("Los números son iguales.");
} else if (numero9 > numero10) {
  console.log("El primer número es mayor que el segundo.");
} else {
  console.log("El segundo número es mayor que el primero.");
}*/



//Ejercico 2


/*let palabra1 = prompt("Ingrese la primera palabra:");
let palabra2 = prompt("Ingrese la segunda palabra:");

// Verificar si las palabras son iguales o no
if (palabra1 === palabra2) {
  console.log("Las palabras son iguales.");
} else {
  console.log("Las palabras no son iguales.");
}*/

//OPERADORES LOGICOS.

/*
AND (&&) Este operador se utiliza cuando las dos condiciones deben cumplirse
*/ 

/*let id = true;
let mayorEdad = 17;

if(id === true && mayorEdad === 18){
    console.log("Puedes rentar el espacio");
}else{
    console.log("Lo sentimos, no cumples con los requisitos");
}

/*
OR (||) se utiliza cuando se debe cumplir una condicion u ortra
*/ 

/*let isUser = false;
let reba = true;

if(isUser === true|| reba === true){
    console.log("califica para descuento");
}else{
    console.log("no califica para descuento");
}

//NOT (!) se utiliza para negar el valor de una condicion

let freeDay = false;
if(!freeDay){
    console.log("Se chambea");
}else{
    ("descansa papi");
}

//Operadores de cadena

//toLowerCase hace el cambio de nuestro string a minusculas

let messUser = ("HOLA AMIGO COMO ESTAS?");
let changueMin = messUser.toLowerCase();

console.log(changueMin);

//toUpperCase : Hace el cambio a mayusculas

let messUser2 = ("hola amigo como estas?");
let changueMay = messUser2.toUpperCase();

console.log(changueMay);

// trim quita los espacios

let notice =("     ch35     ");
let newnotice = notice.trim();

console.log(newnotice);

//toString convierte un tipo de dato number a string

let num10 = 31;
let cadena = num10.toString();
console.log(cadena);

//concat: concatena variables

let nombre = ("Marco");
let nombre3 = ("Antonio");
let apellido = ("Díaz");
let apellido2 = ("Luna");

let fullName = (nombre + " " + nombre3 + " " + apellido + " " + apellido2);

console.log(fullName);

//Expresiones : 

//expresion artmetica :

// 12 + 34 * 3

// Expresion de cadena
 // let notify = "Casi" + "Navidad" + "familia"

 // Expresion logica : 

 /*
 let esMayorEdad = (23>18) && (23 < 65); tiene comparadores logicos y de comparación


 ** EXPRESION DE ASIGNACION

 let frasco = chocolates;asigna el valor a la variable

 */


 //PROGRAMA ELABORACIÓN DE HOTCAKES.

// Definos que ingredientes vamos a utilizar y tambien las cantidades 

let harina = 2; 
let huevos = 2; 
let leche = 1; 
let azucar = 2; 
let polvoDeHornear = 1; 
let mantequilla = 1;
let instrucciones = (" Revuelva en un bowl las 2 tazas de harina,2 huevos,1 taza de leche, azucar al gusto y 1 cucharada de polvo para hornear hasta incorporar bien. Posteriormente agrere mantequilla derretida a la sartén y vierta una porción de la mezcla, retire hasta que este totalmente cocinado y repita el proceso con otra porción de la mezcla")

// Obtener las cantidades de los ingredientes que se tienen
let cantHarina = prompt("Ingrese la cantidad de tazas de harina:");
let cantHuevos = prompt("Ingrese la cantidad de huevos:");
let cantLeche = prompt("Ingrese la cantidad de taza de leche:");
let cantAzucar = prompt("Ingrese la cantidad de cucharadas de azúcar:");
let cantPolvoDeHornear = prompt("Ingrese la cantidad de cucharaditas de polvo de hornear:");
let cantMantequilla = prompt("Ingrese la cantidad de cucharaditas de mantequilla");

let tieneIngredientes =
  cantHarina >= harina &&
  cantHuevos >= huevos &&
  cantLeche >= leche &&
  cantAzucar >= azucar &&
  cantPolvoDeHornear >= polvoDeHornear &&
  cantMantequilla >= mantequilla;


if (tieneIngredientes) {
  console.log("¡Genial! Tienes los ingredientes necesarios para hacer hot cakes.");
  console.log(instrucciones);
  
} else {
  console.log("Lo siento, no tienes suficientes ingredientes para hacer hot cakes.");
}


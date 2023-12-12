//Comentarios de una sola linea 

/*Comentario 
de
varias
lineas*/

//alert("Hola mundo");

//console.log("Este es un mensaje por consola");

//var nombre = prompt("Ingresa tu nombre");
//alert("Hola "+ nombre + " Bienvendio a la ch5" );

//var numero1 = parseInt(prompt("Ingresa el primer numero:"));
//var numero2 = parseInt(prompt("Ingresa el segundo numero:"));


//console.log("suma:"+(numero1 + numero2));
/*var respuesta = prompt("¿necesitas saber si eres mayor de edad?; si/no");
while(respuesta == "si"){

alert("Programa para ver que tan viejo eres ");
console.log("Programa para ver que tan viejo eres ");

var nombre = prompt("Ingresa tu nombre");
var edad = parseInt(prompt(nombre + " Por favor ingresa tu edad:"));

if (edad>=18){

prompt("Hola " + nombre + " Ya eres mayor de edad");
console.log("Hola " + nombre+ " Ya eres mayor de edad");


    
} else {

    prompt("Hola " + nombre + " Lo lamentamos, aún eres menor de edad");
    console.log("Hola " + nombre + " Lo lamentamos, aún eres menor de edad");
}

}*/

/*TIPOS DE DATOS Y VARIABLES -.

scope es el alcance de nuestras variables

var,let,const: la diferencia es el alcance
    -var tiene un alcance global
    -let tiene un alcance local
    -const se mantiene sin ningun cambio

    string:cadena de texto(lleva comillas)
    numbre: numero
    boolean: true/false
    null:nulo
    undefinied:no esta asignado o definido*/

/* Todas nuestras variables deben ser declaradas con nombres especificos y claros,sin espacios,no deben iniciar con numeros*/


/*let nombre = "Daniel";

let ivitadxsExtras = 2;

let esMayorEdad = true;

let edad =24;

let invitadxEspecial = null;

let horaDeSalida = undefined;
document.write(nombre);

/*Encasillamiento o tipado
nos es util para ek mantenimiento del codigo ya que lo hace más legible y facil de entender
Nos ayuda a la prevención de errores para reducir la probabilidad de los mismos
mejora el rendimiento de nuestro programa*/

//let numero = 15;
//let texto = "hola";

//encasillamiento

//let numeroEncasillada = number = 15;
//let textoEncasillada = string = "hola";

//typeof palabra reservada para saber que tipo de datos tenemos

/*console.log(typeof(nombre));

conversion de string a number

let funcionNumber = console.log(typeof Number(nombre));
metodoParseInt = console.log(typeof parseInt (nombre));
metodoParseFloat = console.log(typeof parseFloat (nombre));*/

/*parseInt y parseFloat son funciones que se utilizan para convertir cadenas de texto en numeros,ambas nos ayudan en este cambio*/

//conversion de number a string

/*console.log(typeof String(edad));
console.log(typeof edad.toString());

// Conversión de boolean a number

let numero = Number (esMayorEdad);
console.log(typeof (numero));*/

/*let texto = String(esMayorEdad)

console.log (typeof(texto));

console.log(typeof esMayorEdad.toString());*/

/*let negacion = !esMayorEdad;

console.log(negacion);*/

/* Concatenar  es basicamente unir strings*/
/*let saludo = "Hola mundo";
let frase = " El futuro es hoy, oiste viejo"

texto = saludo + frase;
document.write(texto);/*

*/


/*let saltoLinea="<br>";
let ingrediente1 = " 1 taza de harina";
let ingrediente2 = "1 taza de leche";
let ingrediente3 = " 1 huevo";
let ingrediente4 = " 2 cucharaditas de mantequilla";
let ingrediente5 = " 1 cucharadita de vainilla";
let ingrediente6 = "2 cucharaditas de polvo para hornear";

document.write("Receta de Hotcakes para 12 personas"+ saltoLinea + saltoLinea);


document.write(" Ingredientes : "+saltoLinea);

document.write(ingrediente1+saltoLinea+ingrediente2+saltoLinea+ingrediente3+saltoLinea+ingrediente4+saltoLinea+ingrediente5+saltoLinea+ingrediente6);*/

/* Tipos de datos
>-String(cadenas de texto)
>-number(numericos)
>- Boolenanos(booleanos:true or false)
null(nulos)
undefined(indefinidos)
objects(objects)
objects(arrays)*/

/*console.log() Nos permite visualizar en consola el navegador el codigo de JS

console.warn() Muestra un mensaje de advertencia
console.error(:mensaje de error)
console.table()*/

let firstName;
firstName = "Marco";
let lastName;
lastName = "Díaz"

console.log(firstName + " " + lastName);
console.log("Mi nombre es:" + firstName + " y mi apellido es" + lastName);

/*ECMAScript 6 (ES6).Interpolación de cadenas

>- backticks ``
>-Para variables las invocamos ${variable}
texto para string

*/

let age = 37;
console.log(`Mi nombre es ${firstName},
mi apellido es ${lastName}
 y tengo ${age} años`);

 //console.warn

console.warn(`Precaución,no es buena practica dejar sin punto y coma`);

//console.error

console.error('Status 404: Failed')

/* - Array.Se traduce como matriz o arreglo.Es un tipo de dato que pertenece a JS , en el cual se almacenan una colección de elemntos de manera ordenada.
-Los arrays se pueden manipular mediante metodos especificos.
-Los elementos de un array, se contabilizan como indices empezando por indice 0, por lo cual el primer elemnto del array posee el indice 0
-Se declaran como variables,seguido del signo igual y corchetes.Dentro de cada corchete  vive un elemento con un tipo de dato
*/

let arreglo1 = []//array vacio
console.log (`Array vacío ${arreglo1}`);

//Los elementos de un array se separan mediante comas

let cars = ["Volkswagen","BMW","Mazda","Kia"];
console.log(cars);

//LONGITUD e INDICE son diferentes. La LONGITUD (length) es el numero de elementos y el indice corresponde a cada elemento a partir del 0.

console.log(typeof(cars));

let salariesMxn = [1200,4500,6000,55000,20000,7500,12000,56000,37000,40000,90000,8100]

console.log(salariesMxn.length);
console.log(salariesMxn);

/*
Los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar información mediante llaves o claves y valores
Su sintaxys es la siguiente:

const object{
    clave1: valor1 (dato1),
    clave2:valor2 (dato2)
}

Los objetos pueden almacenar diferentes tipos de valores-

*/

const employee = {
    firstName:"Marco",
    lastName: "Díaz",
    age: 27,
    country:"México"

}

console.log(employee);
//Mostrando mi array como tabla
console.table(cars);
//Mostrando objeto como tabla
console.table(employee);















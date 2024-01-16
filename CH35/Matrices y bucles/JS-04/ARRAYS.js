/*
***Arrays***
Es una colección ó agrupación de elementos en una misma variable, cada uno de ellos ubicado por la posición que ocupa el array 
-Los arrays se utilizan para almacenar y organizar datos de manera más eficinete

*** Creat un array***
*/

//CREAR ARRAY

const numeros = [1,2,3,4,5];

// Array de cadena de texto

const comida = ["Hamburguesas","pollo","verdura al vapor","pan","pizza"];


//Array mixto

const mixto = [
"pluma", 
8, 
false,
 { nombre:"Marco"}];
console.log(mixto,comida,numeros);

//Array vacio

const mercado = [];
console.log(mercado)

//Agregando elementos al array vacio

mercado[0] = "Huevo";
console.log(mercado);

mercado[1] = "Jitomate";
mercado[2] = "Chetos";
mercado[3] = "Jabón";

console.log(mercado);

// Otra manera de crear arrays.Esta sintaxis se puede emplear en Arrays porque son Objects, es una manera de mandar a llamar un nuevo Objeto de tipo Array

const verduras = new Array("Brocoli","zanahoria","calabaza","chayote","jitomate",);

console.log(verduras);

//Para saber la longitud de un array

console.log(verduras.length);

//Acceder a objetos del array, de acuerdo a su indice

console.log(verduras[3]);
console.log(verduras[6]);

//Modificar elementos de un array por medio del indice

const cremeria = new Array("crema","queso oaxaca","aderezo","jamón","salchicha",);

console.log(cremeria);
// se modifica un elemento del array

cremeria[2] = "Quesillo";
console.log(cremeria);

cremeria[3] = "Danonino de durazno";
console.log(cremeria);

//Arreglo de arreglos o multidimensional

console.log("Arreglo de arreglos");

//Estados: Estado de México,Guadalajara,Yucatan,Sonora,Oaxaca,CDMX

//Platillos: tlacoyos,torta ahogada,Panuchos,Dogos,tlayuda,torta de tamal.

//En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.

const estados = new Array ("Estado de México","Jalisco","Yucatán","Sonora","Oaxaca","CDMX");

const platillos = new Array ("tlacoyos","torta ahogada","panuchos","dogos","tlayuda","torta de tamal");

const menu = new Array (estados,platillos);

console.log(`En ${menu[0][0]} se come ${menu[1][0]}`);

//Metodos arrays

//Metodo de cola (queue).Los metodos de cola implican agrerar elementos al fianl del array y eliminar elementos al inicio de array.Sigue el principio de FIFO (first-in-first-out) Lo que significa que el primer elemento añadido es el primer elemento eliminado.

/*
push
shift
unshift

*Metodo de pila (stack).Implica agregar elementos al final del array y eliminar elementos del final del array.Sigue el principio LIFO (Last-in-first-out) que significa el ultimo elemento añadido es el primero en ser eliminado.

push
pop

*/

console.log("Metodos de Arrays");
const ch35 = ["Daniel","Fer","Mariana","Mara","Gaby","Paola","Enrique"];

console.log(ch35);

//pop:eliminar el ultimo elemento del array

let popch35 = ch35.pop()
console.log(popch35);

console.log(ch35);

//*push () Agregar al final del array

let pushch35 = ch35.push("Mony");
console.log(ch35);

// shift (); Quitar primer elemento del array

let shiftch35 = ch35.shift();
console.log(ch35);

//unshift (): agregar al principio del array

let unshiftch35 = ch35.unshift("Daniel");
console.log(ch35);

//reverse: este cambia el sentido del ordenamiento del array

let reversech35 = ch35.reverse();
console.log(ch35);

/*Investigar:

-sort
-foreach
-slice
-splice
-indexof

*/








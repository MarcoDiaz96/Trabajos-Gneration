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
var respuesta = prompt("¿necesitas saber si eres mayor de edad?; si/no");
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

}



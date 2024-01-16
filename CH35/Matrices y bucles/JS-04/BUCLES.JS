console.log("Vamos a hablar de bluces");

/* 
*===== BUCLES =====
* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

* -- Operadores de incremento (++) y operadores de decremento (--)
*${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
* Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
*- El operador ++ se utiliza para aumentar el valor de una variable en uno.
*- El operador -- se utiliza para disminuir el valor de una variable en uno.
* (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/

/*
CICLO FOR:

-Se repite hasta que la condición se evalue con false.Crea 3 expresiones opcionales y su sitaxis es la siguinetes:

    *for (expresioninicial;expresioncondicional;expresionactualizacion){
        *codigo a ejecutar en cada iteracion del bucle
    }

    1.Inicializacion: se debe inicializar con una variable que sera evaluada a la expresion a comparar.
    2.Condición: Es una expresion que debe cumplir la variable inicial(true), si no se cumple(false) el bucle termina.
    3. pasos para realizar: son los interbalos que cambiaran la variable  inicial mientras esto sea true

    // cREAR UN PRIGRAMA PARA SABER CUANTOS BOLETOS VENDEMOS PARA UNA RIFA

    /*
    */
   for(let boleto = 1;boleto<= 25;boleto++){
    console.log(`Boleto # ${boleto}`);
   }
    
// Programa para vender bolo usando variable global

let bolo = 1;

for (bolo;bolo<=20;bolo++){
    console.log(`Vendi ${bolo} bolos`);
}

//Cuenta Regresiva

let cuentaRegresiva = 10;
for(cuentaRegresiva;cuentaRegresiva>=0;cuentaRegresiva--){
    console.log(`Quedan ${cuentaRegresiva} segundos para que tu compu se muera`);
}

// Como recorrer arrays con un ciclo for

/*debemos usar indices del arreglo para poder usar el bucle en indices desde 0 hasta n y usaremos la propiedad lenght
*/

const ch35 = ["Marco","Ricardo","Maribel","Gabriel","Arturo","Lizbeth"];

for (let i = 0; i < ch35.length; i++){
    console.log(ch35[i]);
}


/**** Variaciones del ciclo for
-- for...of nos permite recorrer el objeto (array) y devuelve el valor
-- for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)
*/

/*let frutas = ("Manzana","Papaya","Pera","Mango","Melón","Sandia")

for(let frutas of frutas){
    console.log(frutas + "grupo frutas")
}*/

// sumar numeros  del 1 al 20

let suma = 0;

for (let i=1;i<=20;i++){
    suma += i;

}

console.log(suma);

// Tabla del 5

const tabla = 5;
for (let i = 1;i<=10;i++){

    let resultado = tabla*i;
    console.log(`${tabla} x  ${i} = ${resultado}`);
}

//ciclo while

//Recorrer un bloque de ocdigo siempre que una condicion especifica sea verdad. Sirve para realizar una tarea repetitiva mientras una condicion sea verdad.

let productos = 5;
while (productos > 0){
    console.log(productos + "productos vendidos");
    productos --;
}

//imprimir numeros

let num1 = 0;
while(num1 < 10){
    num1 ++ 
    console.log("El numero es " + num1);
}


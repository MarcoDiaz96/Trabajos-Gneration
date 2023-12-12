console.log("HOLA CH35");

/*
*Control de flujo y estructuras de control

*Las estructuras de control son un componente fundamental dentro de la programación ,entre algunas de las facilidades y ventajas que nos proporcionan para escribir y depurar codigo,podemos mencionar las siguientes:

- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista
 * 
 * 
 * 
*Declaración de setencia if-else

- Palabra reservada if para comenzar la declaración, se coloca un parentesis() donde se debe colocar una expresion logica (true ׀׀false), se abre y cierram llaves {} para indicar que sentencia va a ejecutar si la condición se cumple (true),

- despues de la llave {} declarada para el bloque de ejecucion if,colocamos la palabra reservada else,para este ejemplo no es necesario colocar más expresiones dentro de un (), simplemente colocamos otras llaves { }para indicar el bloque de codigo que tiene que ser ejecutado en caso que la condicon no se cumpla 

if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso


*/

/*let n=15;
if(n>10){
    console.log(true);
}else{

    console.log(false);
}*/

// if anidados

/*let edad = 17;

if(edad<18){
    console.log("Eres menor de edad, no puedes pasar al party");

    
} else if (edad>=18&& edad <65){

    console.log("Eres un chavoruco")

    
}else{
console.log("Eres un adulto mayor");
}*/

/*
Setencia switch:
Es otro tipo de estructura de control de flujo que, nuevamente se encuentra en diversos lenguajes de programacion.

-Es bastante parecida a la sentencia if-else pero va a ser diferente en cuenato a comportamiento, puesto que esta setencia no se basa en una bifurcacion  (particion de caminos), si no que se secciona en multiples caos (case) que ,dependiendo de la expresion  que cumpla con un caso especifico sera nuestra secuencia que se va a ejecutar dentro de nuestra declaración

Declración:
- se empueza por colocar la palabra reservada switch,seguido de esto, colocamos parentesis  donde se debe colocar el valor que va indicar que sentencia/caso se va a ejecutar.

-Falta indicar el bloque de codigo que se limita a esta sentencia ,como lo haciamos en la sentencia if o con las funciones.

-Dentro de este bloque de codigo falta colocar los casos para cada valor que se desee ,establecer según sea el valor indicado dentro del parentesis ().

- Cada uno de estos casos se separa de la siguinete manera:
    -case valor:instruccion a ejecutar si el valor empata con ese caso.
    - Despues , para indicar que la instruccion de las sentencias debe cortarse suando se cumpla,se coloca la instrucción break.

-Cuando terminemos de establecer los casos que necesitemos declarar dentro de nuestra sentencia ,debemos colocar un valor por defecto,default.

-Esta ultima sentencia nos permite establecer un valor por defecto, si es que este valor colocado no empata con ningun otro dentro de la sentencia o en ninguno de los casos.

-default: "mensaje no disponible"


*/

/*let dia = "jueves";
switch(dia){
    case "lunes":
        console.log("Inicio de semana ");
        break;
    case "martes":
        console.log("¿Quien avienta balazos los martes?");
        break;
    case "miercoles":
        console.log("Presentamos proyecto");
        break;
    case "jueves":
    console.log("2x1 en nutrisa");
    break;

    case "viernes":
        console.log("Ya es time de ir por las chelas");
        break;

    case "sabado":
        console.log("Sabado de tacos");
        break;
    case "domingo":
        console.log("Toca descansito");
        break;
        default:
            console.log("Día Desconocido");
            break;
}*/


// Operador ternario

/*
Expresion condicional if-else más simple y legible
-Principalmente se usa para simplificar condiciones de una sola expresión.
Tambien puede anidar sentencias if-else-if,sin embargo no es recomendado  porque el codigo se puede volver confuso y poco legible 
-Su declaración  es la siguinete:
-Palabra reservada var,let o const
- se le asigna un nombre como si se tratara de una variable ,operador de asignación "=", seguido de este operador,hay que colocar una expresión logica, esta va dentro de un parentesis() depsues hay que colocar un caracter ? que indica el camino a seguir, dependiendo de si se cumple o no nuestra expresion 
para separar el resultado true de false debemos agregar u caracter de : , del lado izquierdo se coloca la sentencia a ejecutar.
- si se cumple la condicion del lado derecho, se coloca la sentencia a ejecutar 
*/

// ejemplo de operador ternario:

let n = 18;

let verificacion = n > 5 ? "Si es mayor" : "No es mayor"
console.log (verificacion);

/*
Cuando usar if-else o cuando switch?

- if-else: cuando necesitemos tomar desiciones bajo condiciones más flexibles

-switch: cuando tengamos un conjunto fijo de valores para crear alguna elección
*/














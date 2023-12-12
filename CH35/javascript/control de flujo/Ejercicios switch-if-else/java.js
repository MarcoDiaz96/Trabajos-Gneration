// Ejercicios para esta sesion



// Ejercicio 1

/*let edad = 18;

    if (edad >= 18) {
        console.log("¡Tienes la edad suficiente para votar!");
    } else {
        console.log("Lo siento, no tienes la edad suficiente para votar.");
    }*/




    //Ejercico 2

    /*function esDivisiblePor7y8(numero) {
       
        if (numero % 7 === 0 && numero % 8 === 0) {
            return true;
        } else {
            return false;
        }
    }
    
   
    let numeroEvaluado = prompt("Ingresa un número para evaluar si es divisible por 7 y 8:");
   
    numeroEvaluado = parseInt(numeroEvaluado);

    if (!isNaN(numeroEvaluado)) {
        var resultado = esDivisiblePor7y8(numeroEvaluado);
        console.log(resultado);
    } else {
        console.log("Por favor, ingresa un número válido.");
    }*/




    //Ejercicio 3

   /* function esDivisiblePor4o9(numero) {
        if (numero % 4 === 0 || numero % 9 === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    let numeroAleatorio = 8;
    
    console.log("El numero aleatorio es : " + numeroAleatorio);
    
    let resultado = esDivisiblePor4o9(numeroAleatorio);
    console.log(resultado);*/



    
    //Ejercicio 4

   /* function recomendarPelicula(categoria) {
        switch (categoria) {
            case 'accion':
                console.log("Recomendación de película de acción: Avengers");
                break;
            case 'drama':
                console.log("Recomendación de película de drama: Milagros inesperados");
                break;
            case 'comedia':
                console.log("Recomendación de película de comedia: ¿Donde estan las rubias?");
                break;
            case 'romance':
                console.log("Recomendación de película de romance: Bajo la misma estrella");
                break;
            case 'suspenso':
                console.log("Recomendación de película de suspenso: Efecto mariposa");
                break;
            case 'terror':
                console.log("Recomendación de película de terror: Así en la tierra como en el infierno");
                break;
            default:
                console.log("Categoría no reconocida. Por favor, ingresa una categoría válida.");
        }
    }
    
    let categoriaIngresada = prompt("Ingresa una categoría de película (accion, drama, comedia, romance, suspenso, terror):");
    
    
    if (categoriaIngresada) {
        recomendarPelicula(categoriaIngresada);
    } else {
        console.log("Por favor, ingresa una categoría válida.");
    }*/




    //Ejercicio 5:

   /* function opcionElejida(opcion) {
        if (opcion === 1) {
            console.log("Acción a realizar: Retirar dinero");
        } else if (opcion === 2) {
            console.log("Acción a realizar: Transferencia");
        } else if (opcion === 3) {
            console.log("Acción a realizar: Depósito");
        } else if (opcion === 4) {
            console.log("Acción a realizar: Pago de servicios");
        } else {
            console.log("Opción no válida. Por favor, ingresa una opción del 1 al 4.");
        }
    }
    
    let opcionDigitada = prompt("Ingrese una opción (1: Retirar dinero, 2: Transferencia, 3: Depósito, 4: Pago de servicios):");
    opcionDigitada = parseInt(opcionDigitada);
    
    if (!isNaN(opcionDigitada)) {
        opcionElejida(opcionDigitada);
    } else {
        console.log("Por favor, ingresa una opción válida.");
    }*/



    //Ejercicio 6
    
    function convertirDivisa(cantidad, opcion) {
        switch (opcion) {
            case 1:
                
                let resultadoDolares = cantidad / 17.31; 
                console.log(cantidad + " pesos mexicanos equivalen a aproximadamente " + resultadoDolares.toFixed(2) + " dólares estadounidenses.");
                break;
            case 2:
                
                let resultadoEuros = cantidad / 18.69; 
                console.log(cantidad + " pesos mexicanos equivalen a aproximadamente " + resultadoEuros.toFixed(2) + " euros.");
                break;
            case 3:
            
                let resultadoYenes = cantidad * 0.12; 
                console.log(cantidad + " pesos mexicanos equivalen a aproximadamente " + resultadoYenes.toFixed(2) + " yenes japoneses.");
                break;
            case 4:
            
                let resultadoLibra = cantidad / 21.75; 
                console.log(cantidad + " pesos mexicanos equivalen a aproximadamente " + resultadoLibra.toFixed(2) + " libras esterlinas.");
                break;
            case 5:
                
                let resultadoFranco = cantidad / 19.78; 
                console.log(cantidad + " pesos mexicanos equivalen a aproximadamente " + resultadoFranco.toFixed(2) + " francos suizos.");
                break;
            default:
                console.log("Opción no válida. Por favor, ingresa una opción del 1 al 5.");
        }
    }
    
    let cantidadIngresada = prompt("Ingrese la cantidad en pesos mexicanos:");
    let opcionIngresada = prompt("Ingrese una opción (1: A dólares, 2: A euros, 3: A yenes, 4: A libras, 5: A francos):");
    
    
    cantidadIngresada = parseFloat(cantidadIngresada);
    opcionIngresada = parseInt(opcionIngresada);
    
    if (!isNaN(cantidadIngresada) && !isNaN(opcionIngresada)) {
        convertirDivisa(cantidadIngresada, opcionIngresada);
    } else {
        console.log("Por favor, ingresa una cantidad y una opción válidas.");
    }